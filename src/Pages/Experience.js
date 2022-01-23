// import './Portfolio.css';
import { Routes, Route, Link } from "react-router-dom";

const Experience = () => {
    return (
       <div className="page">
            <div className="job">
                <h1>Jr. Product Developer</h1>
                <div className="job-header">
                    <h2>
                        Decoded - New York, NY
                    </h2>
                    <h2>
                        June 2021 - Present
                    </h2>
                </div>
                <ul id="job-description-list">
                    <li>Programmed and scaled web applications / technical assets while cross-functionally collaborating across multiple teams in an agile, feedback-driven environment</li>

                    <li>Lead facilitated and moderated workshops on various technologies (APIs, AI / ML, cybersecurity, blockchain) with clients and stakeholders</li>

                    <li>Produced content as product owner for new clients</li>

                    <li>Revised content edits for workshops</li>

                    <li>Created designs and animations for company accounts</li>

                    <li>Standardized staging and production settings for organizing external resources</li>

                    <li>Established a platform for improving product release notes</li>

                    <li>Researched case studies and clients’ needs for new products to make data-informed decisions</li>

                    <li>Worked with Fortune 50 clients in various sectors, such as financial services, consulting, and government</li>
                </ul>
            </div>

            <div className="job">
                <h1>Development Intern</h1>
                <div className="job-header">
                    <h2>
                        Whittle School & Studios - New York, NY
                    </h2>
                    <h2>
                        June 2019 - August 2019
                    </h2>
                </div>
                <ul id="job-description-list">
                    <li>Managed the product development of a Guidebook app for faculty onboarding and an introductory online course for the Reggio Emilia pedagogy using the Agilix Buzz platform and coding in HTML</li>

                    <li>Gathered user requirements from clients to draft roadmaps and wireframes</li>

                    <li>Cross-functionally collaborated with different teams to ensure a fluid UI and UX</li>

                    <li>Adapted to the agile methodology and structure</li>

                    <li>Researched educational conferences, social and emotional learning, and mental wellness promotion in classrooms</li>   
                </ul>
            </div>

            <div className="job">
                <h1>Research Assistant</h1>
                <div className="job-header">
                    <h2>
                        Boston University - Boston, MA
                    </h2>
                    <h2>
                        September 2018 - December 2018
                    </h2>
                </div>
                <ul id="job-description-list">
                    <li>Assisted in leading the code development of a website in multiple languages (Perl, JavaScript, HTML, CSS) for a linguistic eye-tracking research study utilizing FTP software</li>   

                    <li>Analyzed data collected from CSV and Excel files</li>   

                    <li>Set up, configured, and troubleshot lab equipment</li>   

                    <li>Conducted the research study with human subjects (certified by CITI Program for Human Subjects Protection Training: Social & Behavioral Focus)</li>   

                    <li>Created visual stimuli with Adobe Photoshop</li>   

                    <li>Edited Spanish and Greek audio files with accompanied Brownian noise utilizing Audacity</li>   
                </ul>
            </div>
            
       </div>
    );
}
 
export default Experience;
