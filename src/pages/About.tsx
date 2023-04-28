import React from "react"; 
import { StaticImage } from "gatsby-plugin-image"
//components
import Header from "../components/Header"

//styles
import "../styles/about.scss"

const About = () => {
    const [isVisible, setVisible] = React.useState(true);
    const [img1, setImg1] = React.useState('visible');
    const [img2, setImg2] = React.useState('hidden');
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (isVisible) {
                setVisible(false);
                setImg1('hidden');
                setImg2('visible');
            } else {
                setVisible(true);
                setImg1('visible');
                setImg2('hidden');
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [isVisible]);
   
    return (
        <div className="about">
        <Header />
            <div className="content">
                <h1 className="title">VIVIANA OSORIO</h1>
                <h2 className="subtitle">SOFTWARE ENGINEER</h2>
                <div className="boxes">
                    <div className="text-box">
                        <p className="text">Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Ut in obcaecati aperiam repellat 
                        inventore doloremque pariatur illo, unde autem at. 
                        Sint nam consequatur hic debitis fugiat id corporis 
                        nisi consequuntur!</p>
                        <p className="text">Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                    <div className="image-box">
                        <StaticImage src='../images/graduation.jpeg' alt="Viviana Osorio" className={img1}/>
                        <StaticImage src='../images/deepcove.jpeg' alt="Viviana Osorio" className={img2}/>
                    </div>
                </div>
                <div className="skills">
                    <h3 className="skills-title">Skills</h3>
                    <ul className="skills-list">
                        <li className="skills-item">HTML / CSS</li>
                        <li className="skills-item">JavaScript / Typescript</li>
                        <li className="skills-item">React / Node</li>
                        <li className="skills-item">MongoDB / Supabase / Firebase</li>
                        <li className="skills-item">SQL / NoSQL</li>
                        <li className="skills-item">Python</li>
                        <li className="skills-item">Git / Github</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    };
    
export default About;