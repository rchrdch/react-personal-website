// import './Portfolio.css';
import { Routes, Route, Link } from "react-router-dom";

const About = () => {
    return (
       <div className="page">
            <h1>Who Am I?</h1>
            <h2>
                To begin with the basics:
            </h2>
            <ul id="about-list">
                <li>Boston University ‘21 alum with a B.A. in Computer Science</li>

                <li>Born in Queens, NY (so I know what a good bagel tastes like) and raised in Central NJ (yes, it exists!)</li>

                <li>Fluent in English, Korean, and level A1 German</li>

                <li>Astrological sign: Virgo</li>

                <li>Play piano, snare & bass drum, French horn, and alto saxophone</li>

                <li>Love volleyball, ice-skating, swimming, and fencing</li>

                <li>Major proponent of the Oxford Comma</li>
            </ul>
            <p id="about-paragraph">
                As an individual with a creative mindset, I like to explore different ideas, fields, and possibilities. Paired with my extensive technical background, my goal is to create new designs, products, and solutions that are innovative and positively impact our everyday lives.
            </p>
            
       </div>
    );
}
 
export default About;
