import React from 'react';
import './About.css';
//import { section } from 'framer-motion/client';

const About = () =>{
    return(
            <section id="about" className="about">
                <div className="about-container">
                    <div className="about-header">
                        <h2 className="section-title">
                            About <spna>Me</spna>
                        </h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p>Hi I'm <strong>Manish gupta</strong>, an Intermediate Java Full Stack Developer with a passion for building robust backend systems and 
                            modern web application. I specialize in desiging and developing scalble APIs and microservices using Spring Boot and Java .</p>
                           
                           
                            <p>I'm currently pursuing my B.Tech in Computer Science at Shushila Devi Bansal Collage Of TechnoLogies (2024 - 2028),
                                where I focus on software engineering, data structures, algorithms, and database management.
                            </p>

                             <p>
                                I enjoy solving complex problems with clean, maintainable code and I'm committed to best practices in the Java ecosystem. My journey involves continuous learning and contributing to open-source projects while building real-world applications.
                             </p>
                    
                                <p>
                                   When I'm not coding, I'm exploring new technologies, contributing to open source, or leveling up my system design skills. I'm always open to new opportunities and collaborations!
                                </p>
                                                
                       
                        </div>

                        <div className="about-stats">
                            <div className="stat">
                                <h3>2+</h3>
                                <p>Year Learning</p>
                            </div>
                            <div className="stat">
                                <h3>8+</h3>
                                <p>Projects Build</p>
                            </div>
                            <div className="state">
                                <h3>100%</h3>
                                <p>Dediaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default About;