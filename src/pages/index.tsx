import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { BrowserRouter, Routes, Route } from "react-router-dom";

//styles
import "../styles/style.scss"

//components
import About from "./About";
import  Home from "./Home";
import  Blogs from "./Blogs";
import  Contact from "./Contact";
import  Projects from "./Projects";
import NotFoundPage from "./404";

const App: React.FC<PageProps> = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter> 
  )
}
export default App
export const Head: HeadFC = () => <title>Vivian's Portafolio</title>
