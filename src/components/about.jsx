import React from "react";
import { BiMailSend } from "react-icons/bi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";


function About() {
    return (
        <>
         <div className="main">
                <h1 className="title">Satvik Sagar Sharma</h1>
                <p className="subtitle">
                  Software Engineer
                  <a href="https://www.airbus.com/en" target="_blank" rel="nofollow">
                    @Airbus ✈️
                  </a>
                </p>
                <p className="description">
                  I am a Software Engineer 👨‍💻 with over 1+ years of experience.
                </p>
                <h2 className="section-title">💡 Skills</h2>
                <ul className="skills-list">
                  <li>🐍 Programming Languages: Python, JavaScript, Rust</li>
                  <li>⚛️ Frameworks: React</li>
                  <li>🔧 Tools: Jenkins, Red Hat Linux</li>
                  <li>🌩️ Cloud Platforms: AWS</li>
                </ul>
                <h2 className="section-title">🎭 Hobbies</h2>
                <p className="description">
                  When not coding, I’m all about vibing to music 🎧 and conquering
                  virtual worlds 🎮.
                </p>
              </div>
              <div className="secondary">
                <a
                  href="https://www.linkedin.com/in/satvik-sagar-sharma-861b63194/"
                  target="_blank"
                >
                  <FiLinkedin />
                </a>
                {/* <a href="https://www.twitter.com" target="_blank">
                  <FiTwitter />
                </a> */}
                <a href="https://github.com/satvik-bot" target="_blank">
                  <FiGithub />
                </a>
                <a href="mailto:satviksagar340@gmail.com" target="_blank">
                  <BiMailSend />
                </a>
              </div>
        </>
    )
}

export default About