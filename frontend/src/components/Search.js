import React, { useState, useEffect } from 'react';
import "../styles/Search.css";
import { useNavigate } from 'react-router-dom';
import TaskBar from '../components/TaskBar';
import "../styles/Text.css";


export default function Search(){
    const handleSearch = (searchItem) => {
        console.log(searchItem)
    }
    const [dateType, setDateType] = useState('');
    const [otherThing, setOtherThing] = useState('');

    return (
        <div className="search-container">
            <input
                   type="text"
                   placeholder={'hi naomi'}
                   value={otherThing}
                   className="input-field"
                   onChange={handleSearch}
            />
            <p className="search-text">Binary Search</p>
            <p className="search-subtext">Find the perfect head Node for your linked list of dates!</p>
            <select
                   value={dateType}
                   className="input-field dropdown"
               >
                   <option value="">{'Enter your date type'}</option>
                   <option value="Movies">Movies</option>
                   <option value="CScore">CS Major-core</option>
                   <option value="engineering">Engineering</option>
                   <option value="bluemoon">Once in a Blue Moon</option>
            </select>
            <div className="centered">
            <TaskBar page="SEARCH" />
            </div>
        </div>
    )
}