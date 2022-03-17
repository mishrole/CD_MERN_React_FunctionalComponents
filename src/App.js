import { useState } from 'react';
import './App.css';
import MessageDisplay from './components/Message/MessageDisplay/MessageDisplay';
import MessageForm from './components/Message/MessageForm/MessageForm';
import MoviesList from './components/Movies/MoviesList/MoviesList';

function App() {

  const [currentMessage, setCurrentMessage] = useState("There are no messages");

  const youveGotMail = ( newMessage ) => {
    setCurrentMessage(newMessage);
  }

  const movies = ['El rey león', 'El libro de la selva', 'La princesa y el sapo'];

  return (
    <>
    <div className="container p-3">
      <MessageForm onNewMessage={ youveGotMail }/>
      <MessageDisplay message={ currentMessage } />
    </div>

    <div className="container py-5">
      <MoviesList movies={movies} />
    </div>
    </>
  );
}

export default App;
