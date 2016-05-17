
export default {
  path: 'edit',
  widgets: [
    {
      type: 'record-form',
      fields: [
        { name: 'participant', type: 'search', label: 'participant' },
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
          score: 'number',
        },
      },
      linkedStores: {
        // own: 'score-store',
        collection: 'scores-store',
      },
    },
  ],
};
