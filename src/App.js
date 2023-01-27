import {lazy, Suspense, useContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {URIContext} from "./contexts/URIContext";

import Layout from "./components/Layout";

import "./style.css";

export function App() {

    const BASE_URI = useContext(URIContext);
    const Books = lazy(() => import('./components/Books'))
    const NewBook = lazy(() => import('./components/NewBook'))
    const BookDetails = lazy(() => import('./components/BookDetails'))
    const BookEdit = lazy(() => import('./components/BookEdit'))
    const Error = lazy(() => import('./components/Error'))

    return (
        <BrowserRouter>
            <Suspense fallback={
                <>
                    <Layout/>
                    <div className="Loading">
                        <div className="titles"><h1>Loading...</h1></div>
                    </div>
                </>
            }>
                <URIContext.Provider value={BASE_URI}>
                    <Routes>
                        <Route path="/" element={<Layout/>}>

                            <Route index element={<Books/>}/>
                            <Route path="create" element={<NewBook/>}/>
                            <Route path="books/:id" element={<BookDetails/>}/>
                            <Route path="books/edit/:id" element={<BookEdit/>}/>

                            {/*path for 404 page not found errors*/}
                            <Route path="*" element={<Error/>}/>

                        </Route>
                    </Routes>
                </URIContext.Provider>
            </Suspense>
        </BrowserRouter>
    );
}
