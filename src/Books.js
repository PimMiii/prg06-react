import Book from "./Book";
import React, {useEffect, useState} from "react";


export default function Books(props) {
    const [library, setLibrary] = useState([])
    const [loadedData, setLoadedData] = useState([])
    const loadLibrary = () => {
        fetch(props.BASE_URI,
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

    const showLibrary = library.map((item, index) => (
        <Book book={item} key={item.id} libraryRefreshHandler={loadLibrary}/>
    ))

    return (
        <div className="library">
            {showLibrary}
        </div>
    )
}