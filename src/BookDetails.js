import React, {useState, useContext, useEffect, Fragment} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {URIContext} from "./contexts/URIContext";

export default function BookDetails(props) {
    const params = useParams()
    const BASE_URI = useContext(URIContext)

    const [book, setBook] = useState(null);
    const navigate = useNavigate();


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
            .then((response) => navigate("/") )
            .catch((error) => console.error(error));
    };

    return (
        <Fragment>
        {book &&
        <div className="Book Details">
            <div className="titles">
                <div>
                 <h2>{book.title}</h2>
                <h3>{book.title_nl}</h3>
                </div>
            </div>
            <div className="information">
                <h3>Auteur: {book.author}</h3>
                <p>Jaar: {book.year}</p>
                <p>Reeks: {book.series} #{book.number}</p>
            </div>
            <div className="buttons">
                <Link to='/'>
                    <button>Terug naar Bibliotheek</button>
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <button>Aanpassen</button>
                </Link>
                <button onClick={deleteBook}>Verwijderen</button>
            </div>
        </div>
        }
            {!book &&
                <div className="Book Details">
                    <div className="titles">
                        <div>
                            <h2>Boek niet gevonden.</h2>
                            <h3>Book not found</h3>
                        </div>
                    </div>
                    <div className="information">
                    </div>
                    <div className="buttons">
                        <Link to='/'>
                            <button>Terug naar Bibliotheek</button>
                        </Link>
                    </div>
                </div>
            }
        </Fragment>
    );
}