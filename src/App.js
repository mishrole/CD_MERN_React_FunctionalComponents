import { useState } from 'react';
import './App.css';
import Grandfather from './components/HelloContext/Grandfather/Grandfather';
import MessageDisplay from './components/Message/MessageDisplay/MessageDisplay';
import MessageForm from './components/Message/MessageForm/MessageForm';
import MoviesList from './components/Movies/MoviesList/MoviesList';
import { MainContextProvider } from './context/MainContext';

function App() {

  const [currentMessage, setCurrentMessage] = useState("There are no messages");

  const youveGotMail = ( newMessage ) => {
    setCurrentMessage(newMessage);
  }

  const movies = ['El rey león', 'El libro de la selva', 'La princesa y el sapo'];

  return (
    <>
      <MainContextProvider>
        <div className="container p-3">
          <MessageForm onNewMessage={ youveGotMail }/>
          <MessageDisplay message={ currentMessage } />
        </div>

        <div className="container py-5">
          <MoviesList movies={movies} />
        </div>

        <div className="container py-5">
          <Grandfather />
        </div>
      </MainContextProvider>
    </>
  );
}

export default App;
