import React from "react";
import Projectcont from "./Components/Projectcont";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
const Projects = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(delay);
  }, []);
  return (
    <>
    { loading?<Loader/>:
      <div className="project">
        <Navbar />
        <Projectcont />
      </div>
    }
     
    </>
  );
};

export default Projects;
