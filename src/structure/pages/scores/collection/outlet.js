
export default {
  widgets: [
    {
      type: 'menu',
      title: 'Scores',
      icon: 'game',
      items: [
        { label: 'create', route: '/scores/i/new', icon: 'plus' },
      ],
    },
    {
      type: 'outlet',
    },
  ],
};
