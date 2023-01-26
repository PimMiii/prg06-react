import Book from "./Book";
import React, { useContext, useEffect, useState } from "react";
import {URIContext} from "./contexts/URIContext";
import Pagination from "./Pagination";

export default function Books() {
    const BASE_URI = useContext(URIContext)

    const [library, setLibrary] = useState([])
    const [loadedData, setLoadedData] = useState([])
    const [limits, setLimits] = useState({
        start: '1',
        limit: '6'
    })
    const [uri, setUri] = useState(`${BASE_URI}?start=${limits.start}&limit=${limits.limit}`)
    const [pagination, setPagination] = useState(null)

    const loadLibrary = () => {
        fetch(uri,
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
        setPagination(data.pagination)
    };

    useEffect(loadLibrary, [uri])

    const showLibrary = library.map((item) => (
        <Book book={item} key={item.id} libraryRefreshHandler={loadLibrary}/>
    ))

    return (
        <>
            <div className="library">
                {showLibrary}
            </div>
            {pagination &&
            <Pagination pagination={pagination} setUri={setUri} libraryRefreshHandler={loadLibrary}/> }
        </>
    )
}