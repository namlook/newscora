
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import CardWidget from 'odyssee-client/lib/components/widgets/CardWidget';
import Widget from 'odyssee-client/lib/components/Widget';

import _ from 'lodash';

class HallOfFameWidget extends React.Component {
  computeTotalByParticipants() {
    const totalByParticipants = this.props.ownStore.get('content')
      .groupBy((o) => o.participant)
      .reduce((acc, scores, participantName) => ([
        ...acc,
        {
          name: participantName,
          total: scores.reduce((total, score) => total + score.score, 0),
        },
      ]), []);

    return _.orderBy(totalByParticipants, ['total'], ['desc']);
  }

  render() {
    const { ...other } = this.props;
    const totalByParticipants = this.computeTotalByParticipants();

    if (!this.props.ownStore.get('content').size) {
      return (
        <Widget>
          <div className="ui basic center aligned segment">
            Vous devez d'abord <Link to="/scores">ajouter des scores</Link>
          </div>
        </Widget>
      );
    }

    return (
      <CardWidget _name="hall-of-fame" {...other}>
        <div className="ui basic segment">
          <div className="ui two column equal width grid">
            {totalByParticipants.map((item) =>
              <div key={item.name} className="column center aligned">
                <div className="ui statistic">
                  <div className="label">
                    {item.name}
                  </div>
                  <div className="value">
                    {item.total}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardWidget>
    );
  }
}

HallOfFameWidget.propTypes = {
  ownStore: PropTypes.object.isRequired,
};

export default HallOfFameWidget;
