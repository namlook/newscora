
export default {
  path: 'participants',
  widgets: [
    {
      type: 'record-form',
      title: 'Ajouter un joueur',
      icon: 'user',
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
        { name: 'name', type: 'text', label: 'nom' },
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
    {
      type: 'participants-edit',
      title: 'Tous les joueurs',
      icon: 'users',
      store: {
        name: 'participants-store',
        recordSchema: {
          _id: '',
          name: '',
        },
      },
      linkedStores: {
        scores: 'scores-store',
      },
    },
  ],
};
