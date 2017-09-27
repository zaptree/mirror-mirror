import React from 'react';
import PropTypes from 'prop-types';

export default function Greeting({ greetings }) {
  const hours = new Date().getHours();
  let greetingMessage = greetings[0];

  if (hours >= 12 && hours < 17) {
    greetingMessage = greetings[1];
  } else if (hours >= 17) {
    greetingMessage = greetings[2];
  }

  return <div className="timeofdaygreeting-container">{greetingMessage}</div>;
}

Greeting.defaultProps = {
  greetings: ['Good morning', 'Good afternoon', 'Good evening'],
};

Greeting.propTypes = {
  greetings: PropTypes.arrayOf(PropTypes.string),
};
