import React from "react";
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "react-router-dom";
//styles
import "../styles/header.scss"


const Header = () => {
    const [classTag, setClassTag] = React.useState('container');

/*     React.useEffect(() => {
        (scroll)? setClassTag('onScroll') : setClassTag('container');
        console.log("scroll: " + scroll + " classTag: " + classTag);
        console.log(scroll);
    }, [scroll]); */

    const listenerScrollEvent = () => {
        var header = document.querySelector(".container");
        header?.classList.toggle("onScroll", window.scrollY > 90);
    }

    React.useEffect(() => {
        window.addEventListener('scroll', listenerScrollEvent);
        return () => {
            window.removeEventListener('scroll', listenerScrollEvent);
        }
    }, []);


    return (
        <div className="container">
                <div className="inner_header">
                    <div className="logo">
                        <Link to="/">Vvan</Link>
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
