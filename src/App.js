import React, {useContext, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {URIContext} from "./contexts/URIContext";

import Books from "./Books";
import NewBook from "./NewBook";
import Layout from "./Layout";
import Error from "./Error";
import BookDetails from "./BookDetails";
import BookEdit from "./BookEdit"

import "./style.css";

export function App() {


    const BASE_URI = useContext(URIContext); {/*TODO: implement SSL for https -> so Github Pages can work*/}

    return (
        <BrowserRouter>
            <URIContext.Provider value={BASE_URI}>
            <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Books />}/>
                        <Route path="create" element={<NewBook/>}/>
                        <Route path="books/:id" element={<BookDetails/>}/>
                        <Route path="books/edit/:id" element={<BookEdit/>}/>

                        {/*path for 404 page not found errors*/}
                        <Route path="*" element={<Error/>}/>
                    </Route>
            </Routes>
        </URIContext.Provider>
        </BrowserRouter>
    );
}
