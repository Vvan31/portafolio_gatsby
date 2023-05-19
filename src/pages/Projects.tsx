import React from "react";
import { useEffect } from "react";
//component
import Header from "../components/Header"

// Styles
import "../styles/style.scss"
import "../styles/proyects.scss"

const Projects = () => {

return (
<div className="projects">
    <Header />
    <div className="content">
        <div className="parallax houseplants"> </div>
        <div className="element">
            "House Plants" is a web application that lets you search an API for a specific house plant and provides you with all the necessary information. 
            With "House Plants", you can keep track of all your house plants and customize your profile to manage them better.
            <div className="links">
                <a href="">Github</a>
                <a href="">Live</a> 
            </div>
            <p> This app was created with React, Redux, JavaScript, and MUI</p>
        </div>
        <div className="blank"></div>
        <div className="parallax NotesApp"> </div>

        <div className="element">
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling.
            Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
        <div className="blank"></div>
        <div className="parallax gurutrivia"> </div>

        <div className="element">
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling.
            Tip: Try to remove the background-attachment property to remove the scrolling effect.
        </div>
        <div className="blank"></div> 
    </div>
</div>
);
};
export default Projects;