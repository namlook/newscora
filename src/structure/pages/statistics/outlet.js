
export default {
  path: 'statistics',
  widgets: [
    {
      layout: { mobile: 0, tablet: 0, computer: 16 },
      type: 'menu',
      title: 'Stats',
      icon: 'line charts',
      items: [
        { label: 'total', route: '/statistics/hall-of-fame', icon: 'trophy' },
        { label: 'graphiques', route: '/statistics/charts', icon: 'line chart' },
      ],
    },
    {
      type: 'outlet',
    },
  ],
};
