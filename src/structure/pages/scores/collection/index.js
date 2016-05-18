
import outlet from './outlet';

export default {
  outlet,
  index: {
    widgets: [
      {
        type: 'score-new',
        store: {
          name: 'scores-new',
        },
        linkedStores: {
          participants: 'participants-store',
          scores: 'scores-store',
        },
      },
      {
        type: 'collection-list',
        title: 'Historique des scores',
        subtitle: 'Cliquez pour modifier un score',
        unstackable: true,
        color: 'teal',
        icon: 'users',
        properties: ['participant', 'score'],
        searchProperty: 'participant',
        hideIfEmpty: true,
        onClickRedirectTo: '/scores/:id/edit',
        linkedStores: {
          own: 'scores-store',
        },
      },
    ],
  },
};
