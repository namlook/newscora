
import outlet from './outlet';
import participants from './participants';
import scores from './scores';
import statistics from './statistics';

export default {
  outlet,
  index: {
    redirect: '/participants',
  },
  participants,
  scores,
  statistics,
};
