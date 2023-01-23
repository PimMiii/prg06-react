import React, {useEffect} from "react";
import { useState } from "react";
import {useParams} from "react-router-dom";

export default function BookDetails(props) {
    const params = useParams()
    const URI_COLLECTION = 'http://145.24.222.119:8000/books'

    const [book, setBook] = useState(null);


    const loadBook = () => {
        fetch(`${URI_COLLECTION}/${params.id}`,
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
        console.log(data);
        setBook(data);
    };

    useEffect(loadBook, []);

/*    const deleteBook = () => {
        fetch(book._links.self.href,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => console.log(`deleted ${book.title}`))
            .then((response) => {props.libraryRefreshHandler()} )
            .catch((error) => console.error(error));
    };*/

    return (
        <div className="Book Details">
            <div className="titles">
                {book && <h2>{book.title}</h2>}
                {book && <h3>{book.title_nl}</h3>}
            </div>
            <div className="information">
                {book && <h3>Auteur: {book.author}</h3>}
                {book && <p>Jaar: {book.year}</p>}
                {book && <p>Reeks: {book.series} #{book.number}</p>}
            </div>
            <div className="buttons">
                <button>Aanpassen</button>
                {/*<button onClick={deleteBook}>Verwijderen</button>*/}
            </div>
        </div>
    );
}