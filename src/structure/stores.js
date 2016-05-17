
export default [
  {
    type: 'ordered-collection',
    name: 'participants-store',
    recordSchema: {
      _id: '',
      name: '',
    },
  },
  {
    type: 'collection',
    name: 'scores-store',
    recordSchema: {
      _id: '',
      participant: '',
      score: '',
    },
  },
];
