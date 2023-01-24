import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Books from "./Books";
import NewBook from "./NewBook";
import Layout from "./Layout";
import Error from "./Error";
import BookDetails from "./BookDetails";

import "./style.css";

export function App() {

    const URI_COLLECTION = 'http://145.24.222.119:8000/books'; {/*TODO: implement SSL for https -> so Github Pages can work*/}

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Books BASE_URI={URI_COLLECTION}/>} />
                    <Route path="create" element={<NewBook BASE_URI={URI_COLLECTION}/>} />
                    <Route path="books/:id" element={<BookDetails BASE_URI={URI_COLLECTION} />} />
                    <Route path="books/edit/:id" element={<BookDetails BASE_URI={URI_COLLECTION}/>} /> {/*TODO: Edit to EDIT page*/}
                    {/*path for 404 page not found errors*/}
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
