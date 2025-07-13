import React from "react";
import "../assets/styles/About.css";
import Shivdix from "../assets/images/SHIVDIX.png"
import {FaGithub, FaGlobe} from "react-icons/fa"
const AboutMe: React.FC = () => {
  const project = [
    {name:"Studmart",
  github:"https://github.com/civdix/studmart",
link:""},{name:"WAWY",
github:"https://github.com/civdix/wawy",
link:"wawy.vercel.com"},{name:"Rural Rise",
github:"https://github.com/civdix/ruralrise",
link:"ruralrise.vercel.com"},
  ]
  return (
    <div className="container aboutMain" id="About">
     
      <section className="about">
        <div className="profile">
          <img src={Shivdix} alt="Shivam Dixit" className="profile-img" />
        </div>
        <div className="info">
          <h2>Take A Look About me</h2>
          <p>
            🚀 Code Alchemist | Web & AI Developer | Passionate Innovator
          </p>
          <p>
            I'm a 3rd-year BTech student specializing in full-stack development,
            with good Knowledge and Projects on Android Developement and OpenCV
          </p>
          <h3>Tech Stack</h3>
          <p>💻 JavaScript, TypeScript, Python, React.js, Express.js, Node.js, MongoDB</p>
          <h3>Top Projects</h3>
          <ul>
          {project.map((proj,index)=>  <li key={index}>📌{proj.name} 
            <a href={proj.github}> <FaGithub size={20}/> </a>
            <a href={proj.link}><FaGlobe size={20}/></a>
            </li>)}
          </ul>
          <h3>Find Me Here:</h3>
          <p>
          <a href="https://github.com/civdix" target="_blank">GitHub</a> |
          <a href="https://leetcode.com/u/Shivamdixit11/" target="_blank">Leetcode</a> |
          <a href="https://www.geeksforgeeks.org/user/shivamdixit11/" target="_blank">GFG</a> |
            <a href="https://linkedin.com/in/shivdix" target="_blank">LinkedIn</a> |
            <a href="#">Portfolio</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
