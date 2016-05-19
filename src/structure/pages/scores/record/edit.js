
export default {
  path: 'edit',
  widgets: [
    {
      type: 'record-form',
      fields: [
        { name: 'name', type: 'text', disabled: true, label: 'participant' },
        { name: 'score', type: 'number', label: 'score' },
      ],
      onSaveRedirectTo: '/scores',
      onCancelRedirectTo: '/scores',
      displaySubmitButtons: true,
      linkedRouteParams: { _id: ':id' },
      store: {
        name: 'score-edit',
        schema: {
          _id: 'string',
          participant: 'string',
          name: 'string',
          score: 'number',
        },
      },
      linkedStores: {
        collection: 'scores-store',
      },
    },
  ],
};
