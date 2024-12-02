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
    const [searchText, setSearchText] = useState('');

    return (
        <div className="search-container">
            <p className="search-text">Binary Search</p>
            <p className="search-subtext">Find the perfect head Node for your linked list of dates!</p>
            <div className="row">
                <input
                   type="text"
                   placeholder={'Enter some keywords for your date'}
                   value={searchText}
                   className="input-field"
                   onInput={(e) => setSearchText(e.target.value)}
                   onChange={handleSearch}
                />
                <button className = "button-design" type="submit">Search</button>
            </div>
            <div className="row">
                <select
                   value={dateType}
                   onInput={(e) => setDateType(e.target.value)}
                   className="input-field dropdown"
                >
                   <option value="">Select your date type</option>
                   <option value="Movies">Movies</option>
                   <option value="CScore">CS Major-core</option>
                   <option value="engineering">Engineering</option>
                   <option value="bluemoon">Once in a Blue Moon</option>
                </select>
                <button className = "button-design" type="submit">Filter</button>
            </div>
            <div className="centered">
            <TaskBar page="SEARCH" />
            </div>
        </div>
    )
}