
import React, { PropTypes } from 'react';

import CardWidget from 'odyssee-client/lib/components/widgets/CardWidget';

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
    return (
      <CardWidget _name="hall-of-fame" {...other}>
        <div className="ui basic segment">
          {totalByParticipants.length ? (
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
          ) : <p>rien a montrer pour le moment</p>}
        </div>
      </CardWidget>
    );
  }
}

HallOfFameWidget.propTypes = {
  ownStore: PropTypes.object.isRequired,
};

export default HallOfFameWidget;
