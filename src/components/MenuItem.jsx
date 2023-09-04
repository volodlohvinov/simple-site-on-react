import React from "react";
import './MenuItem.scss'
import { Link } from "react-router-dom"

export function MenuItem() {
    const linkStyle = {
        textDecoration: 'none', 
        color: 'inherit' 
    };
    return <ul className="MenuItem-container">
        <li className="MenuItem"><Link style={linkStyle} to='/'>Main</Link></li>
        <li className="MenuItem"><Link style={linkStyle} to='/qa'>Q&A</Link></li>
        <li className="MenuItem"><Link style={linkStyle} to='/materials'>Materials</Link></li>
        <li className="MenuItem"><Link style={linkStyle} to='/contacts'>Contacts</Link></li>
    </ul>
}
