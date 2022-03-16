import './App.css';
import Wrapper from './components/Wrapper';
import UserForm from './components/UserForm';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <div className="App">
      <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']} />
      <br />
      <h1>User Form</h1>
      <UserForm />
      <br />
      <h1>Movie Form</h1>
      <MovieForm />
    </div>
  );
}

export default App;
