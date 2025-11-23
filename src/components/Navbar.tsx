import '../assets/styles/Navbar.css';
import { useState } from 'react'
// Will make Navbar Down side
const handleResumeDownload = () => {
  const fileUrl = "/Shivam_Dixit_Resume_231125.pdf"; // Replace with the actual file path
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "shivamDIxitResume.pdf"; // Set the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar glass-box" >

      <div style={{display:"flex",flexDirection:"row", width:"100%",height:"100%",justifyContent:"space-between",alignContent:"center"}}>

      <div className="myName">
       
        <div className="shivamDixit">
        <span className="name glitch-text outline-text shiny-text ">Shivam</span>
        <span className="name glitch-text outline-text shiny-text" style={{marginLeft:"3px"}}>Dixit</span>

        </div>
      </div>
      <div className="nav">
        <div className="">
          <a href="#About">About Me</a>
        </div>
        <div className="">
          <a href="#Contact">Contact Me</a>
        </div>{' '}
        <div className="" >
          <a href="#Resume" onClick={handleResumeDownload}>My Resume</a>
        </div>{' '}
        <div className="">
          <a href="#Projects">Projects</a>
        </div>{' '}
      </div>
      <button className='p-0 mobileShow ' style={{justifySelf:"flex-end",background:"transparent"}} onClick={() => {
        setShowMenu(prev => !prev)
      }}>&#9776;
      </button>
      </div>
      <div style={{position:"relative"}}>
        
      {showMenu &&<div className="mobile" >
       <ul className='list'>
        <li style={{ transitionDelay: "0ms" }}>
          <a href="#About">About Me</a>
        </li>
        <li style={{ transitionDelay: "2ms" }} >         <a href="#Contact">Contact Me</a>
        </li>
        <li style={{ transitionDelay: "4ms" }}  >       <a href="#Resume" onClick={handleResumeDownload}>My Resume</a>
        </li>
        <li style={{ transitionDelay: "6ms" }} >        <a href="#Projects">Projects</a>
        </li>
      </ul>
    </div>}
      </div>
    </div>
    
 
  );
}

