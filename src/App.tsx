
import './App.css'
import {Navbar} from "./components/Navbar.tsx"
import Home from "./components/Home.tsx"
import AboutMe from './components/About.tsx'
import Project from './components/Projects.tsx'
import Contact from "./components/Contactus.tsx"
function App() {

  return (
    <>
      <div className=" ">
<Navbar/>
<Home/>
<AboutMe />
<Project/>
<Contact/>
      </div>
    </>
  )
}

export default App
