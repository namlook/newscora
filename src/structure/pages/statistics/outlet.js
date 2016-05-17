
export default {
  path: 'statistics',
  widgets: [
    {
      type: 'menu',
      title: 'Stats',
      icon: 'line charts',
      items: [
        { label: 'hall of fames', route: '/statistics/hall-of-fame', icon: 'trophy' },
        { label: 'charts', route: '/statistics/charts', icon: 'line chart' },
      ],
    },
    {
      type: 'outlet',
    },
  ],
};
