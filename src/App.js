import React, {useEffect} from "react";
import {useState} from "react"
import Books from "./Books";
import {NewBook} from "./NewBook";
import "./style.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Error from "./Error";
import BookDetails from "./BookDetails";

export function App() {

    const [library, setLibrary] = useState([])
    const [loadedData, setLoadedData] = useState([])
    const URI_COLLECTION = 'http://145.24.222.119:8000/books'


    const loadLibrary = () => {
        fetch(URI_COLLECTION,
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

    useEffect(loadLibrary, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout loadLibrary={loadLibrary} loadedData={loadedData} library={library}/>}>
                    <Route index element={<Books library={library} libraryRefreshHandler={loadLibrary}/>} />
                    <Route path="create" element={<NewBook />} />
                    <Route path="books/:id" element={<BookDetails />} />

                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
