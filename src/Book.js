import React from "react";
import { useState } from "react";
import "./style.css";

export default function Book(props) {
    const [likes, setLikes] = useState(0);

    const addLike = () => {
        setLikes((value) => value+1);
    };

    const [book, setBook] = useState(props.book);

    const inputHandler = (event) => {
        setBook({title: event.target.value})
    };

    const deleteItem = () => {
        return alert ("Dacht het niet èh vriend!")
    };

    return (
        <div className="Book">
            <div className="titles">
            <h2>{book.title}</h2>
            {book.title_nl && <h3>{book.title_nl}</h3>}
            </div>
            <div className="information">
            {book.author && <h3>Auteur: {book.author}</h3>}
            {book.year && <p>Jaar: {book.year}</p>}
            {book.series  && <p>Reeks: {book.series} #{book.number}</p>}
            </div>
            <div className='buttons'>
            <input onChange={inputHandler} type="text" value={book.title} />
            <button onClick={addLike}>Likes: {likes}</button>
            <button onClick={deleteItem}>Verwijder Item</button>
            </div>
        </div>
    );
}