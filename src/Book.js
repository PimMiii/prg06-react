import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Book(props) {

    const [book, setBook] = useState(props.book);

    const inputHandler = (event) => {
        setBook({title: event.target.value})
    };

    const deleteBook = () => {
        fetch(props.book._links.self.href,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => console.log(`deleted ${props.book.title}`))
            .then((response) => {
                props.libraryRefreshHandler()
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="Book">
            <div className="titles">
                {book.title_nl && <h2>{book.title}</h2>}
                {book.title_nl && <h3>{book.title_nl}</h3>}
            </div>
            <div className="information">
                {book.author && <h4>Auteur: {book.author}</h4>}
            </div>
            <div className="buttons">
                <Link to={`/books/${props.book.id}`}>
                    <button>Details weergeven</button>
                </Link>
                <Link to={`/books/edit/${props.book.id}`}>
                    <button>Aanpassen</button>
                </Link>
                <button onClick={deleteBook}>Verwijderen</button>

            </div>
        </div>
    );
}