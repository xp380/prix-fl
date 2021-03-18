import React, { useState, useEffect } from "react";

const people = [
    "Carrefour",
    "Franprix",
    "Auchan",
    "Intermarché",
    "System U",

];
export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);
    return (
        <div className="App">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}


