import React from "react";
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "react-router-dom";

//components
import About from "./About"
//styles
import "../styles/HomeStyle.scss"

const Home = () => {
    return (
        <>
        <About />
        </>
    );
};
export default Home;
export const Head: HeadFC = () => <title>Home Page</title>
