import {useState} from "react";
import {Link} from "react-router-dom";

export default function Book(props) {

    let className = "Book"
    if (props.status) {
        className = "Book Success"
    }

    const [book, setBook] = useState(props.book);

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
        <div className={`${className}`}>
            <div className="titles">
                <div>
                    {book.title_nl && <h2>{book.title}</h2>}
                    {book.title_nl && <h3>{book.title_nl}</h3>}
                </div>
                {props.status &&
                    <div className="success">
                        <h2>Boek toegevoegd!</h2>
                    </div>}
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