
import './App.css'
import {Navbar} from "./components/Navbar.tsx"
import Home from "./components/Home.tsx"
import AboutMe from './components/About.tsx'
import Project from './components/Projects.tsx'
function App() {

  return (
    <>
      <div className="container ">
<Navbar/>
<Home/>
<AboutMe />
<Project/>
      </div>
    </>
  )
}

export default App
