import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useLoginState from './LoginState';  
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Profile_Setup from './components/Profile_Setup';
import Questionnaire from './components/Questionnaire';
import Home from './components/Home';

function App() {
  const isLoggedIn = useLoginState(); 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          {useLoginState() && (
            <>
              <Route path="/questionnaire" element={<Questionnaire />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile_setup" element={<Profile_Setup />} />
            </>
          )}
          {!useLoginState() && <Route path="*" element={<Navigate to="/" />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
