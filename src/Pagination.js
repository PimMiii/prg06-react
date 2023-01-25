import React, {useState, useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {URIContext} from "./contexts/URIContext";


export default function Pagination(props) {

    /*const params = useParams();*/
    const BASE_URI = useContext(URIContext)
    const pagination = props.pagination

    return (
       <nav className="Pagination buttons">
           <div className="actions">
        <button onClick={() => {props.setUri(pagination._links.first.href)}}>First</button>
               {pagination.currentPage === 1
                   ? <button disabled>Previous</button>
                   :<button onClick={() => {props.setUri(pagination._links.previous.href)}}>Previous</button>
               }
           <h3>{pagination.currentPage}/{pagination.totalPages}</h3>
               {pagination.currentPage === pagination.totalPages
                   ? <button disabled>Next</button>
                   : <button onClick={() => {props.setUri(pagination._links.next.href)}}>Next</button>
               }
           <button onClick={() => {props.setUri(pagination._links.last.href)}}>Last</button>
           </div>
       </nav>
    );
}