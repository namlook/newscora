
import { UPDATE, CLEAR } from './constants';

export const update = (name, score) => ({ type: UPDATE, name, score });
export const clear = (name) => ({ type: CLEAR, name });
