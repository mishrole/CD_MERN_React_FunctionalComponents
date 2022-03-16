import './App.css';
import Wrapper from './components/Wrapper';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']} />
      <br />
      <h1>User Form</h1>
      <UserForm />
    </div>
  );
}

export default App;
