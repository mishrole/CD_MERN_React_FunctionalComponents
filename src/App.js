import { useState } from 'react';
import './App.css';
import MessageDisplay from './components/Message/MessageDisplay/MessageDisplay';
import MessageForm from './components/Message/MessageForm/MessageForm';
// import Wrapper from './components/Wrapper';
// import UserForm from './components/UserForm';
// import MovieForm from './components/MovieForm';
// import Reducer from './components/Reducer';

function App() {

  const [currentMessage, setCurrentMessage] = useState("There are no messages");

  const youveGotMail = ( newMessage ) => {
    setCurrentMessage(newMessage);
  }

  return (
    <div className="container p-3">
      <MessageForm onNewMessage={ youveGotMail }/>
      <MessageDisplay message={ currentMessage } />

      {/* <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']} />
      <br />
      <h1>User Form</h1>
      <UserForm />
      <br />
      <h1>Movie Form</h1>
      <MovieForm />
      <br />
      <h1>Reducer</h1>
      <Reducer /> */}
    </div>
  );
}

export default App;
