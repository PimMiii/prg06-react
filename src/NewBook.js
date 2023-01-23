import React from "react";
import { useState } from "react";

const URI_COLLECTION = 'http://145.24.222.119:8000/books'

export function NewBook(props) {
    const [book, setBook] = useState({
        title: "",
        title_nl: "",
        author: "",
        series: "",
        number: "",
        year: ""
    });

    const inputHandler = (event) => {
        setBook({
            ...book,
            [event.target.name]: event.target.value
        })
    };

    const saveBook = (event) => {
        event.preventDefault();

        fetch(URI_COLLECTION,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(book)
            }
        )
            .then((response) => console.log(`added ${book.title}`))
            .then((response) => {props.libraryRefreshHandler()} )
            .catch((error) => console.error(error));
    };

    return (
        <div className="Book newBook">
            <div className="titles">
                <h2>Nieuw Boek aanmaken</h2>
            </div>
            <div className="forms">
                <form>
                    <label htmlFor="title"> Titel (Originele taal): </label>
                    <input type="text" name="title" id="title" value={book.title} onChange={inputHandler} />
                    <label htmlFor="title_nl"> Titel (Nederlandse vertaling): </label>
                    <input type="text" name="title_nl" id="title-nl" value={book.title_nl} onChange={inputHandler} />
                    <label htmlFor="author"> Auteur: </label>
                    <input type="text" name="author" id="author" value={book.author} onChange={inputHandler} />
                    <label htmlFor="series"> Reeks: </label>
                    <input type="text" name="series" id="series" value={book.series} onChange={inputHandler} />
                    <label htmlFor="number"> Nummer in reeks: </label>
                    <input type="text" name="number" id="number" value={book.number} onChange={inputHandler} />
                    <label htmlFor="yearr"> Jaar: </label>
                    <input type="text" name="year" id="year" value={book.year} onChange={inputHandler} />
                </form>
            </div>
            <div className="buttons">
                <button onClick={saveBook}>Voeg nieuw boek toe</button>
            </div>
        </div>
    );
}