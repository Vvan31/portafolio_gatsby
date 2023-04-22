import React from "react";
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "react-router-dom";

//components
import Header from "../components/Header"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Blogs from "./Blogs"

//styles
import "../styles/HomeStyle.scss"

const Home = () => {
    return (
        <>
        <Header />
        <div className="about">
            <About />
        </div>
        <div className="projects">
            <Projects />
        </div>
        <div className="contact">
            <Contact />
        </div>
        <div className="blogs">
            <Blogs />
        </div>
        </>
    );
};
export default Home;
export const Head: HeadFC = () => <title>Home Page</title>
