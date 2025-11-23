import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../assets/styles/Projects.css";

// TypeScript Interface for Repo
export interface GithubRepoOwner {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  owner: GithubRepoOwner;
  created_at: string;
  updated_at: string;
  homepage:string;
}
interface SimplifiedRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
}

export interface GithubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubRepo[];
}



// Custom Button Component
const Button: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({
  href,
  children,
  className = "bg-neon-blue",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-4 py-2 text-black rounded-md hover:bg-neon-light transition flex items-center gap-2 ${className}`}
  >
    {children}
  </a>
);

export default function Project() {
  const [projects, setProjects] = useState<SimplifiedRepo[]>([]);
const [loadMore,setLoadMore]=useState(6);
 useEffect(() => {
  fetch("https://api.github.com/search/repositories?q=user:civdix+topic:showcase")
    .then((res) => res.json() as Promise<GithubSearchResponse>)
    .then((response) => {
      const repos = response.items;
      const formattedData:SimplifiedRepo[] = repos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
      }));
      setProjects(formattedData.reverse()); //gievs the latest repos
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);


  return (
    <div className="projectMain" id="Projects">
    <h1 id="rainbow-underline" style={{color:"white"}}>My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 projectsArray">

    {projects.slice(0,loadMore).map((project, index) => (
      <motion.div
        key={index}
        className="projectIndi"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        >
        <div className="Card">          
          <h2 className="text-2xl font-semibold text-neon-blue mb-2">{project.name}</h2>
          <p className="text-gray-300 mb-4">{project.description?project.description.length>200?project.description.slice(0,200)+"...":project.description : "No description available."}</p>
          <div className="flex gap-4">
            <Button href={project.html_url}>
              <FaGithub /> GitHub
            </Button>{" "}
            {project.homepage && (
              <Button href={project.homepage} className="bg-neon-green hover:bg-neon-light-green" >
                <FaExternalLinkAlt /> Live Demo
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    ))}
    <button style={{margin:"0 auto"}} 
    onClick={()=>setLoadMore(prev=>prev+3)} disabled={loadMore>=projects.length?true:false}>{loadMore>=projects.length?"Check After Sometime for new projects":"Load More"}</button>
  </div>
  
            </div>
  );
}

