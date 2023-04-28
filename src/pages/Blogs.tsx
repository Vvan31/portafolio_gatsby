import React from "react";

//components
import Header from "../components/Header"

//styles
import "../styles/blogs.scss"
import { link } from "fs";
const Blogs = () => {
    const posts = [
        {
            title: "Blog Title",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.unsplash.com/photo-1622837137196-3b4b3b5b5b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            link: "https://www.google.com"
        },
        {
            title: "Blog Title",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.unsplash.com/photo-1622837137196-3b4b3b5b5b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            link: "https://www.google.com"
        },
        {
            title: "Blog Title",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.unsplash.com/photo-1622837137196-3b4b3b5b5b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            link: "https://www.google.com"
        },
        {
            title: "Blog Title",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.unsplash.com/photo-1622837137196-3b4b3b5b5b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            link: "https://www.google.com"
        },
        {
            title: "Blog Title",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.unsplash.com/photo-1622837137196-3b4b3b5b5b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            link: "https://www.google.com"
        }
    ]

    return (
        <div className="blogs">
        <Header />
            <div className="content">
                <h1>Blogs</h1>
                <div className="cards">
                    {posts.map((post) => (
                        <div className="card">
                            <div className="card__image">
                                <img src={post.image} alt="" />
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">{post.title}</h2>
                                <p className="card__text">{post.text}</p>
                                <a href="post.link" className="card__btn">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;