import React from "react";
import './MenuItem.scss'

export function MenuItem() {
    return <ul className="MenuItem-container">
        <li className="MenuItem">Main</li>
        <li className="MenuItem">Q&A</li>
        <li className="MenuItem">Materials</li>
        <li className="MenuItem">Contacts</li>
    </ul>
}
