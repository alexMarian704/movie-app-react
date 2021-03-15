import React from 'react'
import { Link} from 'react-router-dom';

export default function PageError() {
    return (
        <div id="error-container">
            <h1 id="page-error">404</h1>
            <h1 id="page-error">Page not found</h1>
            <Link to="/" id="back-home">Back to home page</Link>
        </div>
    )
}
