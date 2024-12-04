import React, { useState } from 'react';
import "../styles/Search.css";
import TaskBar from '../components/TaskBar';
import "../styles/Text.css";

export default function Search() {
    const [dateType, setDateType] = useState('');
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    // Handle search by keyword
    const handleSearch = async () => {
        if (!searchText.trim()) {
            setError('Please enter a keyword to search.');
            return;
        }
        try {
            //format for backend use
            const response = await fetch(`http://localhost:5555/user/wordsearch?keyword=${encodeURIComponent(searchText)}`);
            const data = await response.json();

            if (response.ok) {
                setSearchResults(data.data)
                console.log('Search Results:', data.data); 
            } else {
                setError(data.message || 'Failed to fetch search results');
            }
        } catch (err) {
            console.error('Error fetching search results:', err);
            setError('An error occurred while searching. Please try again.');
        }
    };

    // Handle filtering by category
    const handleFilter = async () => {
        if (!dateType.trim()) {
            setError('Please select a date type.');
            return;
        }

        setError('')
        try {
            //query url so that it has the encrypted date Type for backend use
            const response = await fetch(`http://localhost:5555/user/categoryFilter?category=${encodeURIComponent(dateType)}`);
            const data = await response.json();

            if (response.ok) {
                setSearchResults(data.data);
                console.log('Filter Results:', data.data); // Log the results
            } else {
                setError(data.message || 'Failed to fetch filter results');
            }
        } catch (err) {
            console.error('Error fetching filter results:', err);
            setError('An error occurred while filtering. Please try again.');
        }
    };

    return (
        <div className="search-container">
            <p className="search-text">Binary Search</p>
            <p className="search-subtext">Find the perfect head Node for your linked list of dates!</p>

            {/* Keyword Search Section */}
            <div className="row">
                <input
                    type="text"
                    placeholder="Enter some keywords for your date"
                    value={searchText}
                    className="input-field"
                    onInput={(e) => setSearchText(e.target.value)}
                />
                <button className="button-design" type="button" onClick={handleSearch}>
                    Search
                </button>
            </div>

            {/* Category Filter Section */}
            <div className="row">
                <select
                    value={dateType}
                    onChange={(e) => setDateType(e.target.value)}
                    className="input-field dropdown"
                >
                    <option value="">Select your date type</option>
                    <option value="Movies">Movies</option>
                    <option value="CS Major Core">CS Major Core</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Once in a Blue Moon">Once in a Blue Moon</option>
                </select>
                <button className="button-design" type="button" onClick={handleFilter}>
                    Filter
                </button>
            </div>

            {/* Display Results Section */}
            <div className="results-container">
                {error && <p className="error-text">{error}</p>}
                {searchResults.length > 0 ? (
                    <ul className="results-list">
                        {searchResults.map((result, index) => (
                            <li key={index}>{result.dateIdea || result}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No results to display.</p>
                )}
            </div>

            <div className="centered">
                <TaskBar page="SEARCH" />
            </div>
        </div>
    );
}
