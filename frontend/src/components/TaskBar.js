import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/TaskBar.css";
import "../styles/Text.css";

const TaskBar = ({page}) => {
    const navigate = useNavigate();

    const taskBarClick = (buttonName) => {
        if (buttonName === "home") navigate('/Home');
        else if (buttonName === "profile") navigate('/Profile');
        else if (buttonName === "matches") navigate('/Matches');
        else if (buttonName === "settings") navigate('/Profile_Setup');
        else if (buttonName === "logout") navigate('/');
    };

    return (
      <div className="task-bar" style={{ marginTop: 60 }}>
        <div className="small-text" style={{ marginRight: 1250 }}>/Users/{page}</div>
        <div className="rectangle">
          <button className="button-text-design" onClick={() => taskBarClick("home")} style={{ marginLeft: 60 }}>
              HOME
          </button>
          <button className="button-text-design" onClick={() => taskBarClick("profile")} style={{ marginLeft: 220 }}>
              PROFILE
          </button>
          <button className="button-text-design" onClick={() => taskBarClick("matches")} style={{ marginLeft: 220 }}>
              MATCHES
          </button>
          <button className="button-text-design" onClick={() => taskBarClick("settings")} style={{ marginLeft: 220 }}>
              SETTINGS
          </button>
          <button className="button-text-design" onClick={() => taskBarClick("logout")} style={{ marginLeft: 220 }}>
              LOGOUT
          </button>
        </div>
      </div>
    );
};

export default TaskBar;