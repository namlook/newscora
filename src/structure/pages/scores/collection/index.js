
import outlet from './outlet';

export default {
  outlet,
  index: {
    widgets: [
      {
        type: 'collection-list',
        title: 'Les scores',
        unstackable: true,
        color: 'teal',
        icon: 'users',
        subtitle: 'Que le meilleur gagne',
        properties: ['_id', 'participant', 'score'],
        searchProperty: 'participant',
        onClickRedirectTo: '/scores/:id/edit',
        linkedStores: {
          own: 'scores-store',
        },
      },
    ],
  },
};
