
export default {
  path: ':id',
  // initStores: {
  //   'score-store': {
  //     from: 'scores-store',
  //     query: { filter: { _id: ':id' } },
  //   },
  // },
  widgets: [
    {
      type: 'menu',
      title: 'Scores',
      icon: 'cube',
      items: [
        { label: 'back', route: '/scores', icon: 'left arrow' },
        { label: 'edit', route: '/scores/:id/edit', icon: 'pencil' },
      ],
    },
    // {
    //   type: 'not-found-redirection'
    //   // TODO handle 404 here ?
    // },
    {
      type: 'outlet',
    },
  ],
};
