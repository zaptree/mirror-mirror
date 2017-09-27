This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Getting started

* Create a local config file in the root named `config.js` and paste the javascript from below

```
module.exports = {
  // defaultPanel: 0,
  panels: [
    {
      name: 'Panel 1',
      components: [
        {
          name: 'TimeOfDayGreeting',
          options: {
            greetings: ['Good Morning', 'Good Afternoon', 'Good Evening'],
          },
        },
      ],
    },
  ],
};
```

## Installation
```
npm i -g yarn
yarn install
```

## Script breakdown and Running locally
- `yarn start` will start up the entire environment and launch mirror-mirror
- `yarn run start:react` will just start up the website portion for debugging and development purposes
- `yarn build` will create a production optimized build
- `yarn run build:run` will create a production optimized build and run it
- `yarn run build:package` will create a production optimized build and package mirror-mirror for the host operating system
- `yarn run lint` will run airbnb linting against src/