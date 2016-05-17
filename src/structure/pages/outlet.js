
const color = 'violet';

export default {
  path: '/',
  widgets: [
    {
      layout: { mobile: 16 },
      type: 'application-navbar',
      title: 'Scora',
      color,
    },
    {
      layout: { mobile: 0, tablet: 0, computer: 3 },
      type: 'application-menu',
      color,
      items: [
        { label: 'Participants', route: '/participants', icon: 'users' },
        { label: 'Scores', route: '/scores', icon: 'game' },
        { label: 'Statistics', route: '', items: [
          { label: 'Hall Of Fames', route: '/statistics/hall-of-fame', icon: 'trophy' },
          { label: 'Statistics', route: '/statistics/charts', icon: 'line chart' },
        ] },
        { label: 'Contact', route: '/contact', icon: 'user' },
      ],
    },
    {
      layout: { mobile: 16, tablet: 16, computer: 13 },
      type: 'outlet',
    },
    {
      type: 'mobile-application-menu',
      layout: { mobile: 16, table: 16, computer: 0 },
      color,
      items: [
        { label: 'Participants', route: '/participants', icon: 'users' },
        { label: 'Scores', route: '/scores', icon: 'game' },
        { label: 'Total', route: '/statistics/hall-of-fame', icon: 'chart line' },
        { label: 'Charts', route: '/statistics/charts', icon: 'user' },
      ],
    },
  ],
};
