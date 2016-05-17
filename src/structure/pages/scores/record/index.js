
import outlet from './outlet';
import edit from './edit';

export default {
  outlet,
  index: {
    widgets: [
      {
        type: 'record-display',
        // routeParamsMapping: { _id: ':id' },
        // store: {
        //   name: 'score-display',
        //   schema: {
        //     _id: 'string',
        //     participant: 'string',
        //     score: 'number',
        //     lap: 'number',
        //   },
        // },
        linkedRouteParams: { _id: ':id' },
        linkedStores: {
          // record: {
          //   name: 'score-store',
          //   bootstrap: {
          //     from: 'scores-store',
          //     query: { filter: { _id: ':id' } },
          //   },
          // },
          own: 'score-store',
          collection: 'scores-store',
        },
        fields: [
          { name: 'participant', type: 'text', label: 'participant' },
          { name: 'score', type: 'number', label: 'score' },
        ],
      },
    ],
  },
  edit,
};
