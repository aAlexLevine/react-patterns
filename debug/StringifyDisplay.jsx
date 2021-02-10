import React from 'react';

const StringifyDisplay = ({ value, replacer = null, space = 2 }) => (
  <pre style={{ backgroundColor: '#eee', padding: '1em' }}>
    <code>{JSON.stringify(value, replacer, space)}</code>
  </pre>
);

export default StringifyDisplay;
