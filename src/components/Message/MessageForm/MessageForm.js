import React, { useState } from 'react';

const MessageForm = ( { onNewMessage } ) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewMessage( message );
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1>Set Message</h1>
    
    <div className="mb-3">
    <textarea className="form-control" name="message" cols="50" rows="4" placeholder="Enter your message here" onChange={ (e) => setMessage(e.target.value) } value={ message }></textarea>
    </div>

    <div className="d-flex">
      <button className="btn btn-primary" type="submit">Send Message</button>
    </div>
  </form>
  );
};

export default MessageForm;