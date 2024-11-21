import { useState } from 'react';
import "../styles/Text.css";
import "../styles/Profile.css";
import TaskBar from '../components/TaskBar';
import logo from '../assets/logo-design.png';
import snoopy from '../assets/snoopy_sample_img.png'
import snoopy2 from '../assets/snoopy.jpeg'

export default function Profile(){
    return(
        <div className="profile-container">
            <p className="profile-text">
                #Profile Information
            </p>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">Snoopy = Profile():</p>
                    <p className="info-text"> • Orientation: Binary Orientation: Binary Orientation: Binary Orientation: Binary </p>
                    <p className="info-text"> • Gender: Non-binary Gender: Non-binary Gender: Non-binary Gender: Non-binary </p>
                </div>
                <div className="answer-container">
                </div>
            </div>
            <p className="prompt-text">#Prompt 1</p>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">def your_favorite_color():</p>
                    <p className="info-text">mint green mint green mint green mint green mint green mint green mint green</p>
                    <p className="info-text">sky blue sky blue sky blue sky blue sky blue sky blue sky blue sky blue </p>
                </div>
                <div className="img-container">
                    <img className="photo" src={snoopy} alt="hi"></img>
                    <p className="png-text">.png</p>
                </div>
            </div>
            <p className="prompt-text">#Prompt 2</p>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">def your_favorite_color():</p>
                </div>
                <div className="info-container">
                    <img className="photo" src={snoopy2} alt="hi"></img>
                    <p className="png-text">.png</p>
                </div>
            </div>
            <p className="prompt-text">#Prompt 3</p>
            <div className="question-container">
                <p className="question-text">def your_favorite_color(): def your_favorite_color(): def your_favorite_color():</p>
                <div className="row">
                    <div className="answer-container">
                        <p className="info-text">mint green mint green mint green mint green mint green mint green mint green</p>
                        <p className="info-text">sky blue sky blue sky blue sky blue sky blue sky blue sky blue sky blue </p>
                    </div>
                    <div className="answer-container">
                        <img className="photo" src={snoopy2} alt="hi"></img>
                        <p className="png-text">.png</p>
                    </div>
                </div>
            </div>
            <p className="prompt-text">#Prompt 4</p>
            <div className="row">
                <div className="answer-container">
                    <img className="photo" src={snoopy2} alt="hi"></img>
                    <p className="png-text">.png</p>
                </div>
                <div className="answer-container">
                </div>
            </div>
            {/*<TaskBar page = "PROFLIE"/>*/}
        </div>
    );
}