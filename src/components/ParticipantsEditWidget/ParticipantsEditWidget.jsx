import React, { PropTypes } from 'react';

import CardWidget from 'odyssee-client/lib/components/widgets/CardWidget';
import FormField from 'odyssee-client/lib/components/contrib/FormField';
import ConfirmButtonUI from 'odyssee-client/lib/components/ui/ConfirmButtonUI';

class ParticipantsEditWidget extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.rename = this.rename.bind(this);
    this.delete = this.delete.bind(this);
  }

  moveUp(participantId) {
    this.props.ownActions.moveUp(participantId);
  }

  moveDown(participantId) {
    this.props.ownActions.moveDown(participantId);
  }

  rename(participantId, newName) {
    this.props.ownActions.updateRecord(participantId, { name: newName });
  }

  delete(participantId) {
    this.props.ownActions.deleteRecord(participantId);
  }

  render() {
    const { ownStore, ...other } = this.props;

    if (!ownStore.get('content').size) return null;

    return (
      <CardWidget _name="participants-edit" {...other}>
        {ownStore.get('content').map((participant) => (
          <div key={participant._id} className="ui segment">
            <div className="ui form">
              <div className="field">
                <FormField
                  className="ui input"
                  name={participant._id}
                  value={participant.name}
                  onChange={this.rename} />
              </div>
              <div className="field">
                <div className="ui small basic icon buttons">
                  <button className="ui button" onClick={() => this.moveDown(participant._id)}>
                    <i className="up chevron icon"></i>
                  </button>
                  <button className="ui button" onClick={() => this.moveUp(participant._id)}>
                    <i className="down chevron icon"></i>
                  </button>
                </div>
                <ConfirmButtonUI
                  className="ui right floated red button"
                  displayClassName="basic"
                  displayLabel="supprimer"
                  confirmLabel="confirmer"
                  onConfirm={() => this.delete(participant._id)} />
              </div>
            </div>
          </div>
        ))}
      </CardWidget>
    );
  }
}

ParticipantsEditWidget.propTypes = {
  ownStore: PropTypes.object.isRequired,
  ownActions: PropTypes.object.isRequired,
};

export default ParticipantsEditWidget;
