// import * from "react"

import '../assets/styles/Navbar.css';
// Will make Navbar Down side
export function Navbar() {
  return (
    <div className="navbar glass-box">
      <div className="myName">
        <div className="shivdixLogo">
          <img
            src="https://yt3.googleusercontent.com/b6Y8r2HToyVfIRK112WV6i3h-ht4uHlD360RRq7cyuyDAs-14RcJ3tK8Ly8fsa_q4PYBFBdOg4I=s160-c-k-c0x00ffffff-no-rj"
            className="MyImage"
          
          />
        </div>
        <span className="name glitch-text outline-text shiny-text ">Shivam Dixit</span>
      </div>
      <div className="nav">
        <div className="nav-item links">
          <a href="#About">About Me</a>
        </div>
        <div className="nav-item links">
          <a href="#Contact">Contact Me</a>
        </div>{' '}
        <div className="nav-item links">
          <a href="#Resume">Resume</a>
        </div>{' '}
        <div className="nav-item links">
          <a href="#Projects">Projects</a>
        </div>{' '}
        
      </div>
    </div>
  );
}
