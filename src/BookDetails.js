import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {URIContext} from "./contexts/URIContext";

export default function BookDetails(props) {
    const params = useParams()
    const BASE_URI = useContext(URIContext)

    const [book, setBook] = useState(null);


    const loadBook = () => {
        fetch(`${BASE_URI}/${params.id}`,
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

    const deleteBook = () => {
        fetch(book._links.self.href,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => console.log(`deleted ${book.title}`))
            .catch((error) => console.error(error));
    };

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
                <Link to='/'>
                    <button>Terug naar Bibliotheek</button>
                </Link>
                {book &&<Link to={`/books/edit/${book._id}`}>
                    <button>Aanpassen</button>
                </Link> }
                <button onClick={deleteBook}>Verwijderen</button>
            </div>
        </div>
    );
}