//
// import recordStoreReducer from 'odyssee-client/lib/stores/RecordStore/reducer';
//
// export default recordStoreReducer({
//   schema: {
//     _id: 'string',
//     name: 'string',
//     score: 'number',
//   },
// });
import { UPDATE, CLEAR } from './constants';
import { Map as iMap } from 'immutable';

import _ from 'lodash';

export default (config) => { // eslint-disable-line
  const initialState = iMap({});

  const actions = {
    [UPDATE]: (state, { name, score }) => (
      state.set(name, _.isNaN(parseFloat(score)) ? '' : parseFloat(score))
    ),
    [CLEAR]: (state, { name }) => state.set(name, ''),
  };

  return { initialState, actions };
};
