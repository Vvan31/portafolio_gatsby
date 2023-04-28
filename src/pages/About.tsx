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
                        <p className="text">Front-end web developer with a background in Software engineering, 
                        experience in process mining with python, front-end development with react, and a 
                        passion for learning new technology .</p>
                        <div className="skills">
                        <h3 className="skills-title">Skills</h3>
                        <ul className="skills-list">
                            <li className="skills-item">LANGUAGES: JavaScript, Python, Ruby, HTML, CSS, Swift, Bash, Java, Kotlin, C</li>
                            <li className="skills-item">FRAMEWORKS, LIBRARIES, AND ENVIRONMENTS: NodeJS, ReactJS, React Router, AWS, Bootstrap, Pandas, Numpy, JQuery. </li>
                            <li className="skills-item">SYSTEMS, CMS'S, AND DATABASES: SQL, MongoDB, Git, Firebase</li>
                            <li className="skills-item">MongoDB / Supabase / Firebase</li>
                        </ul>
                    </div>
                    </div>
                    <div className="image-box">
                        <StaticImage src='../images/graduation.jpeg' alt="Viviana Osorio" className={img1}/>
                        <StaticImage src='../images/deepcove.jpeg' alt="Viviana Osorio" className={img2}/>
                    </div>
                </div>
                <div className="contact">
                    <h3 className="contact-title">Contact</h3>
                </div>
            </div>
        </div>
    );
    };
    
export default About;