import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Signup />
    </div>
  );
}

export default App;


