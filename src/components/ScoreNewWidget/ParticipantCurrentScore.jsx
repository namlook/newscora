import React, { PropTypes } from 'react';
import FormField from 'odyssee-client/lib/components/contrib/FormField';

import _ from 'lodash';

class ParticipantCurrentScore extends React.Component {

  constructor(props) {
    super(props);
    this.scoreChange = this.scoreChange.bind(this);
    this.saveScore = this.saveScore.bind(this);
  }

  scoreChange(participantId, value) {
    this.props.currentScoreActions.update(participantId, value);
  }

  saveScore(e, participantId, name) {
    e.preventDefault();
    e.stopPropagation();
    const score = this.props.currentScoreStore.get(participantId);
    if (!_.isNaN(parseFloat(score))) {
      this.props.scoresActions.addRecord({ participant: participantId, name, score });
      this.props.currentScoreActions.clear(participantId);
    }
  }

  totalFor(participant) {
    return this.props.scoresStore.get('content')
      .filter((o) => o.participant === participant)
      .reduce((acc, score) => acc + score.score, 0);
  }

  lastScoreFor(participant) {
    return this.props.scoresStore.get('content')
      .filter((o) => o.participant === participant)
      .map((o) => o.score)
      .last();
  }

  render() {
    const { participant, currentScoreStore } = this.props;
    const currentScore = currentScoreStore.get(participant._id);
    const total = this.totalFor(participant._id);
    const lastScore = this.lastScoreFor(participant._id);
    return (
      <div key={participant._id} className="ui segment">
        <div className="ui two columns stackable grid">
          <div className="column">
            <h2
              style={{ padding: 0, margin: 0 }}
              className="ui basic right floated aligned segment"
            >
              <i className="ui trophy icon"></i> {total}
            </h2>
            <h2 style={{ padding: 0, margin: 0 }}> {participant.name} </h2>
          </div>
          <div className="column">
            <form
              className="ui form"
              onSubmit={(e) => this.saveScore(e, participant._id, participant.name)}
            >
              <FormField
                name={participant._id}
                type="number"
                value={currentScore == null ? '' : currentScore}
                placeholder={lastScore != null ? `dernier score : ${lastScore || 0}` : ''}
                onChange={this.scoreChange} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ParticipantCurrentScore.propTypes = {
  participant: PropTypes.object.isRequired,
  currentScoreStore: PropTypes.object.isRequired,
  currentScoreActions: PropTypes.object.isRequired,
  scoresStore: PropTypes.object.isRequired,
  scoresActions: PropTypes.object.isRequired,
};

export default ParticipantCurrentScore;
