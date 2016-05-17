
export default {
  path: 'participants',
  widgets: [
    {
      type: 'record-form',
      title: 'add participants',
      fields: [
        { name: 'name', type: 'text', label: 'name' },
      ],
      displaySubmitButtons: true,
      store: {
        name: 'participant-form-store',
        schema: {
          _id: 'string',
          name: 'string',
        },
      },
      linkedStores: {
        // own: 'participant-form-store',
        collection: 'participants-store',
      },
    },
    {
      type: 'participants-edit',
      title: 'all the participants',
      icon: 'users',
      linkedStores: {
        participants: 'participants-store',
      },
      // on: {
      //   rename: { dispatch: 'updateRecord', on: 'participants-store' },
      //   delete: { dispatch: 'deleteRecord', on: 'participants-store' },
      //   moveUp: { dispatch: 'moveUp', on: 'participants-store' },
      //   moveDown: { dispatch: 'moveDown', on: 'participants-store' },
      // },
    },
  ],
};
