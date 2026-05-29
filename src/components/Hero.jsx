import React from 'react';
import { FaGithub , FaLinkedin , FaEnvelope } from 'react-icons/fa';
import './Hero.css';


const Hero = () =>{
    return (
        <section id = "home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hi, I'm <span>Manish Gupta</span>
                    </h1>

                    <p className="hero-subtitle">
                        InterMediate Java Full Stack Developer 
                    </p>

                    <p className="hero-description">
                        Passionate about building scalable backend system and modern web applications.

                                   Crafting code with clean architechure and high-perfomance APIs.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="cta-button primary"> View My Work</a>
                        <a href="#contact" className="cta-button primary"> Get In Touch</a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/Mr-Manish-Gupta" target="_blank" rel='noopener noreferrer' className='social-link'><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/manishgupta-dev" target="_blank" rel='noopener noreferrer' className='social-link'><FaLinkedin/></a>
                        <a href="mailto:guptamani214@gmail.com" rel='noopener noreferrer' className='social-link'><FaEnvelope/></a>
                    </div>
                </div>



                <div className="hero-visual">
                    <div className="code-block">
                        <div className="code-header">
                            <span className='dot red'></span>
                            <span className='dot yellow'></span>
                            <span className='dot green'></span>
                        </div>
                        <pre className="code-text">
                            {`const developer = {
                                    name:"Manish"
                                    role:"Full Stack Dev"
                                    skills:["Java" ,"React" ]
                                    possion:"Clean Code"
                            }`}


                        </pre>
                    </div>
                </div>
            </div>


            <div className="scroll-indicator">
                <div className="scroll-dot"></div>
                    <p>Scroll to explore</p>
                </div>
   
        </section>
    )
}

export default Hero;