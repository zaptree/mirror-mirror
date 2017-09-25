import React from 'react';

export default function Greeting() {
  const greetingMessage = new Date().getHours() > 12 ? 'afternoon' : 'morning';
  return <div className="friendly-message">Good {greetingMessage}</div>;
}
