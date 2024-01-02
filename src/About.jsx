import React from "react";
import Navbar from "./Components/Navbar";
import Aboutcont from "./Components/Aboutcont";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(delay);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="about">
          <Navbar />
          <Aboutcont />
        </div>
      )}
    </>
  );
};

export default About;
