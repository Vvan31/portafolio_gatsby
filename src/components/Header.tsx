import React from "react";
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "react-router-dom";
//styles
import "../styles/header.scss"

const Header = () => {
    return (
        <div className="container">
            <div className="inner_header">
                <div className="logo">
                    <Link to="/">Vivian's Portfolio</Link>
                </div>
                <div className="navigation">
                    <nav>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>
                <div className="hamburger">
                    <span className="bar">.</span>
                    <nav>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};
export default Header;
export const Head: HeadFC = () => <title>Home sPage</title>
