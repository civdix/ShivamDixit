
import '../assets/styles/Navbar.css';
// Will make Navbar Down side
const handleResumeDownload=()=>{
           
  const fileUrl = "../assets/documents/Shivam_Dixit_Resume.pdf"; // Replace with the actual file path
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Shivam_Dixit_Resume.pdf"; // Set the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
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
        <div className="nav-item links" onClick={handleResumeDownload}>
          <a href="#Resume" onClick={handleResumeDownload}>My Resume</a>
        </div>{' '}
        <div className="nav-item links">
          <a href="#Projects">Projects</a>
        </div>{' '}
        
      </div>
    </div>
  );
}
