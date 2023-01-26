import React, {Fragment, useContext, useState} from "react";
import {Link} from "react-router-dom";
import {URIContext} from "./contexts/URIContext";
import Book from "./Book";


export default function NewBook(props) {
    const BASE_URI = useContext(URIContext)

    const [book, setBook] = useState({
        title: "",
        title_nl: "",
        author: "",
        series: "",
        number: "",
        year: ""
    });

    const [addedData, setAddedData] = useState(null)

    const inputHandler = (event) => {
        setBook({
            ...book,
            [event.target.name]: event.target.value
        })
    };

    const saveBook = (event) => {
        event.preventDefault();

        fetch(BASE_URI,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(book)
            }
        )
            .then((response) => response.json())
            .then((data) => dataWasLoaded(data))
            .catch((error) => console.error(error));
    };

    const dataWasLoaded = (data) => {
        console.log(data);
        setAddedData(data);

    };

    return (
        <Fragment>
            <div className="Book newBook">
                <div className="titles">
                    <h2>Nieuw Boek aanmaken</h2>
                </div>
                <div className="forms">
                    <form>
                        <label htmlFor="title"> Titel (Originele taal): </label>
                        <input type="text" name="title" id="title" value={book.title} onChange={inputHandler}/>
                        <label htmlFor="title_nl"> Titel (Nederlandse vertaling): </label>
                        <input type="text" name="title_nl" id="title-nl" value={book.title_nl} onChange={inputHandler}/>
                        <label htmlFor="author"> Auteur: </label>
                        <input type="text" name="author" id="author" value={book.author} onChange={inputHandler}/>
                        <label htmlFor="series"> Reeks: </label>
                        <input type="text" name="series" id="series" value={book.series} onChange={inputHandler}/>
                        <label htmlFor="number"> Nummer in reeks: </label>
                        <input type="text" name="number" id="number" value={book.number} onChange={inputHandler}/>
                        <label htmlFor="year"> Jaar: </label>
                        <input type="text" name="year" id="year" value={book.year} onChange={inputHandler}/>
                    </form>
                </div>
                <div className="buttons">
                    <button onClick={saveBook}>Opslaan</button>
                    <Link to='/'>
                        <button>Terug naar Bibliotheek</button>
                    </Link>
                </div>
            </div>
            {addedData &&
                <Book
                book={addedData}
                key={addedData._id}
                id={addedData._id}
                status={'added'}
                libraryRefreshHandler={props.libraryRefreshHandler}
                />}

        </Fragment>
    );
}