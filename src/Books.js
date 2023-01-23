import Book from "./Book";
import React from "react";

export default function Books(props) {
    const showLibrary = props.library.map((item, index) => (
        <Book book={item} key={item.id} libraryRefreshHandler={props.libraryRefreshHandler}/>
    ))

    return (
        <div className="library">
            {showLibrary}
        </div>
    )
}