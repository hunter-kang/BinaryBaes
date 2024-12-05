import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/TaskBar.css";
import "../styles/Text.css";

const TaskBar = ({page}) => {
    const navigate = useNavigate();
    const location = useLocation();
    function handleLogout() {

        fetch("http://localhost:5555/auth/logout") 
      
          .then(() => {
            localStorage.setItem('token', null);
            localStorage.removeItem('token');
            navigate('/');
          });
      
    }
    const defaultIndex = location.state !== null && location.state !== undefined ? location.state : 0;
    console.log("defaultIndex", defaultIndex);
    const [currentIndex, setCurrentIndex] = useState(defaultIndex);
    
    const taskBarClick = (buttonName) => {
        if (buttonName === "home") navigate('/Home', { state: currentIndex });
        else if (buttonName === "profile") navigate('/Profile');
        else if (buttonName === "matches") navigate('/Matches');
        else if (buttonName === "settings") navigate('/Profile_Setup');
        else if (buttonName === "search") navigate('/Search');
        //else if (buttonName === "logout") navigate('/');
    };

    return (
      <div className="task-bar" style={{ marginTop: 60 }}>
        <div className="small-text" style={{ marginRight: "100%" }}>/Users/{page}</div>
        <div className="rectangle">
          <button className="button-text-design" onClick={() => taskBarClick("home")} style={{ marginLeft: "5%" }}>
              HOME
          </button>
          <button className="button-text-design" onClick={() => taskBarClick("profile")} style={{ marginLeft: "9%" }}>
              PROFILE
          </button>
          <button className="button-text-design" onClick={() => taskBarClick("matches")} style={{ marginLeft: "9%" }}>
              MATCHES
          </button>
          <button className="button-text-design" onClick={() => taskBarClick("settings")} style={{ marginLeft: "9%" }}>
              SETTINGS
          </button>
          <button className="button-text-design" onClick={() => taskBarClick("search")} style={{ marginLeft: "9%" }}>
              SEARCH
          </button>
          <button className="button-text-design" onClick={handleLogout} style={{ marginLeft: "9%" }}>LOGOUT</button>
        </div>
      </div>
    );
};

export default TaskBar;