import React from "react";
import './Main.scss'
import { Description } from "./Description.jsx";
import { Logo } from "./Logo.jsx";


export function Main() {
    return <main className="Main">
        <Description />
     <Logo />

    </main>
}