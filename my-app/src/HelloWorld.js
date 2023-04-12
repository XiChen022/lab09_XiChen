import React from 'react';

const HelloWorld = () => {

  function hw() {
    alert('Hello World!');
  }

  return (
    <button onClick={hw}>Click me to show Hello World!</button>
  );
};

export default HelloWorld;