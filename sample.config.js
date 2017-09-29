module.exports = {
  // defaultPanel: 0,
  panels: [
    {
      name: 'Panel 1',
      components: [
        {
          name: 'TimeOfDayGreeting',
          placement: 'bottom center',
          options: {
            greetings: ['Good Morning', 'Good Afternoon', 'Good Evening'],
          },
        },
      ],
    },
  ],
};
