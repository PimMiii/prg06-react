import {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {URIContext} from "../contexts/URIContext";


export default function NewBook() {

    const params = useParams();
    const BASE_URI = useContext(URIContext)
    const [book, setBook] = useState({
        title: "",
        title_nl: "",
        author: "",
        series: "",
        number: "",
        year: ""
    });
    const [savedBook, setSavedBook] = useState(null);

    const inputHandler = (event) => {
        setBook({
            ...book,
            [event.target.name]: event.target.value
        })
    };

    const loadBook = () => {
        fetch(`${BASE_URI}/${params.id}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
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

    const saveBook = (event) => {
        event.preventDefault();

        fetch(`${BASE_URI}/${params.id}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }, body: JSON.stringify(book)
            }
        )
            .then((response) => response.json())
            .then((data) => dataWasSaved(data))
            .catch((error) => console.error(error));
    };

    const dataWasSaved = (data) => {
        console.log(data);
        setSavedBook(data);
    };

    useEffect(loadBook, []);

    return (

        <div className="Book Details Edit">
            <div className="titles">
                <div>
                    <h2>Boek Aanpassen</h2>
                </div>
                {savedBook && <div className="success">
                    <h2>Aanpassingen opgeslagen!</h2>
                </div>}
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
                {book && <Link to={`/books/${book._id}`}>
                    <button>Terug naar Detailweergave</button>
                </Link>}
                <Link to='/'>
                    <button>Terug naar Bibliotheek</button>
                </Link>

            </div>
        </div>
    );
}