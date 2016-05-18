
export default {
  path: 'participants',
  widgets: [
    {
      type: 'participants-edit',
      title: 'all the participants',
      icon: 'users',
      store: {
        name: 'participants-store',
        recordSchema: {
          _id: '',
          name: '',
        },
      },
    },
    {
      type: 'record-form',
      title: 'Ajouter des participants',
      icon: 'plus square outline',
      fields: [
        // {
        //   type: 'fields', fields: [
        //     { type: 'text', name: 'name', label: 'name' },
        //     { type: 'number', name: 'score', label: 'score' },
        //   ],
        // },
        // {
        //   type: 'fields', fields: [
        //     { type: 'cancel', name: 'cancel', label: 'annuler' },
        //     { type: 'clear', name: 'clear', label: 'clear' },
        //     { type: 'save', name: 'save', label: 'ok' },
        //   ],
        // },
        { name: 'name', type: 'text', label: 'name' },
      ],
      // displaySubmitButtons: true,
      displaySubmitButtons: false,
      store: {
        name: 'participant-form-store',
        schema: {
          _id: 'string',
          name: 'string',
        },
      },
      linkedStores: {
        collection: 'participants-store',
      },
    },
  ],
};
