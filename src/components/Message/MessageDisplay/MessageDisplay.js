import React from 'react';

const MessageDisplay = ( { message } ) => {
  return (
    <>
      <h1>Current Message</h1>
      <p>{ message }</p>
    </>
  );
};

export default MessageDisplay;