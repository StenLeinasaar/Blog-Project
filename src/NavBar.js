import React from "react";
import "./assets/css/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home </Link>
            </li>
            <li>
                <Link to="/About"> About</Link>
            </li>
            <li>
                <Link to="/ArticlesList"> Articles</Link>
            </li>
            <li>
                <Link to="/Article"> Blog</Link>
            </li>
        </ul>
    </nav>

);

export default NavBar;