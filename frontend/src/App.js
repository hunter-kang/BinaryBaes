import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Profile_Setup from './components/Profile_Setup';
import Questionnaire from './components/Questionnaire';
import Home from './components/Home';
//when we submit make sure to only keep the / route and /signup, everything else can be routed from that page


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path = "/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile_setup" element={<Profile_Setup />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;









