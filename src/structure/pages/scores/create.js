
export default {
  path: 'i/new',
  widgets: [
    {
      type: 'record-form',
      title: 'add scores',
      fields: [
        { name: 'name', type: 'text', label: 'participant' },
        { name: 'score', type: 'number', label: 'score' },
      ],
      displaySubmitButtons: true,
      onSaveRedirectTo: '/scores',
      onCancelRedirectTo: '/scores',
      store: {
        name: 'score-new-form',
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
