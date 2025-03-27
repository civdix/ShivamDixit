
import "../assets/styles/Home.css"
import Shivdix from "../assets/images/SHIVDIX.png"
import {useState, useEffect, useRef} from "react"
export default function Home(){
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    const coder = {
      name: "Shivam Dixit",
      skill: ["Web", "Android", "AI"],
      status: "Compiling..."
    };

    // Simulating console log with delays
    setTimeout(() => setLogs((prev) => [...prev, `> Initializing ${coder.name}...`]), 1000);
    setTimeout(() => setLogs((prev) => [...prev, `> Skills Loaded: ${coder.skill.join(", ")}`]), 2500);
    setTimeout(() => setLogs((prev) => [...prev, `> Status: ${coder.status.replace("Compiling...", "Ready!")}`]), 4000);
  }, []);
  return(
    <div className="Home glowing-circle">
<div className="section intro">
    <h1 className="animated-underline cyberpunk-text">Welcome to my Portfolio<span className="hopes" style={{fontSize:"40%"}}> Hope You are doing well</span></h1>
   
     <div className="codeSpace">
      <span className="declaration">const</span> API_URL = 
      <span className="string"> "https://dummyapi.com/user-data"</span>; <br />

      <span className="keyword">async function</span> fetchData() {"{"} <br />
      &nbsp;&nbsp;<span className="keyword">try</span> {"{"} <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="declaration">const</span> response = 
      <span className="function"> await fetch</span>(API_URL); <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="declaration">const</span> data = 
      <span className="function"> await response.json</span>(); <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="declaration">const</span> {"{ name, skill, status }"} = data; <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">console.log</span>(<span className="string">`Name: {"${name}"}`</span>); <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">console.log</span>(<span className="string">`Skill: {"${skill}"}`</span>); <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">console.log</span>(<span className="string">`Status: {"${status}"}`</span>); <br />
      &nbsp;&nbsp;{"}"} <span className="keyword">catch</span> (error) {"{"} <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">console.error</span>(<span className="string">`Error fetching data: {"${error.message}"}`</span>); <br />
      &nbsp;&nbsp;{"}"} <br />
      {"}"} <br />

      <span className="function">fetchData</span>(); <br />

      <div className="consoleOutput" style={{  borderEndStartRadius:"30px"}}>
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
</div>
<div className="section Photo">
<img
            src={Shivdix}
            alt="ShivDIx"
            className="glowing-effect"
          style={{borderRadius:"50%",border:"1px solid blueviolet",width:"60%"}}
          />
</div>

    </div>
  )
}