import React, { useState } from 'react';

const UserForm = ( props ) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    console.log("Werlcome", newUser);
    clearForm();
  };

  const clearForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit = { createUser }>
      <div>
        <label>Username: </label>
        <input type="text" onChange={ (e) => setUsername(e.target.value) } value = { username }/>
      </div>

      <div>
        <label>Email Address: </label>
        <input type="email" onChange={ (e) => setEmail(e.target.value) } value = { email }/>
      </div>

      <div>
        <label>Password: </label>
        <input type="password" onChange={ (e) => setPassword(e.target.value) } value = { password }/>
      </div>

      <button type="submit">Create User</button>
    </form>
  );
}

export default UserForm;