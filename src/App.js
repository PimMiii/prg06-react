import React, {useEffect} from "react";
import {useState} from "react"
import Book from "./Book";
import "./style.css";

export default function App() {

    const [library, setLibrary] = useState([])
    const [loadedData, setLoadedData] = useState([])


    const loadJson = () => {
        fetch('http://145.24.222.119:8000/books',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then((data) => dataWasLoaded(data))
            .catch((error) => console.error(error));
    };


    const dataWasLoaded = (data) => {
        console.log(data.items);
        setLoadedData(data.items);
        setLibrary(data.items);
    };

    const showLibrary = library.map((item, index) => (
        <Book book={item} key={index}/>
    ))
    useEffect(loadJson, [])
    return (
        <div className="container">
            <h1>Mijn PRG06 Bibliotheek</h1>
            <div className="library">
                {showLibrary}
            </div>
            <div className="actions">
                <button onClick={() => {
                    alert("you fucking nerd!")
                    setLibrary([...library, {title: "NERD ALERT"}])
                }}>Add a Book
                </button>
                <button onClick={loadJson}>Load JSON</button>
                <h4>JSON Books loaded: {loadedData.length}</h4>
                <h4>{library.length}</h4>
            </div>
        </div>
    );
}
