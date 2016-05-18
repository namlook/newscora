
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import CardWidget from 'odyssee-client/lib/components/widgets/CardWidget';
import Widget from 'odyssee-client/lib/components/Widget';
import ParticipantCurrentScore from './ParticipantCurrentScore.jsx';

class ScoreNewWidget extends React.Component { // eslint-disable-line

  render() {
    const {
      ownStore,
      ownActions,
      scoresStore,
      scoresActions,
      participantsStore,
      ...other,
    } = this.props;

    if (!participantsStore.get('content').size) {
      return (
        <Widget>
          <div className="ui basic center aligned segment">
            Vous devez d'abord <Link to="/participants"> ajouter des participants</Link>
          </div>
        </Widget>
      );
    }

    return (
      <CardWidget _name="score-new" {...other}>
        {participantsStore.get('content').map((participant) => (
          <ParticipantCurrentScore
            key={participant._id}
            participant={participant}
            scoresStore={scoresStore}
            scoresActions={scoresActions}
            currentScoreStore={ownStore}
            currentScoreActions={ownActions} />
        ))}
      </CardWidget>
    );
  }
}

ScoreNewWidget.propTypes = {
  ownStore: PropTypes.object.isRequired,
  ownActions: PropTypes.object.isRequired,
  scoresStore: PropTypes.object.isRequired,
  scoresActions: PropTypes.object.isRequired,
  participantsStore: PropTypes.object.isRequired,
};

export default ScoreNewWidget;
