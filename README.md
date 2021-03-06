# Current build status: [![CircleCI](https://circleci.com/gh/cyb3rsyph0n/mirror-mirror.svg?style=badge)](https://circleci.com/gh/cyb3rsyph0n/mirror-mirror)

## Getting started

* Create a local config file in the root named `mirror-mirror.config.js` and paste the javascript from below or rename `sample.config.js` to `mirror-mirror.config.js`

```
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