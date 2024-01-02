import React from "react";
import Contactcont from "./Components/Contactcont";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
const Contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(delay);
  }, []);
  return (
    <>
      {loading?<Loader/>:<div className="contact">
        <Navbar />
        <Contactcont />
      </div>}
    </>
  );
};

export default Contact;
