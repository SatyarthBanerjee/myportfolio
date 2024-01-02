import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Skeleton } from "antd";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
const HomeCont = () => {
  const imgarr = [
    "css-3.png",
    "html.png",
    "js.png",
    "physics.png",
    "sass.png",
    "tailwindimg.png",
  ];
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  // const handleAllLoad = () => {
  //   if (loading) {
  //     setImagesLoaded(true);
  //   }
  // };
  // useEffect(() => {
  //   let loadedImages = 0;

  //   const handleLoad = () => {
  //     loadedImages++;
  //     if (loadedImages === imgarr.length) {
  //       setLoading(false);
  //     }
  //   };

  //   imgarr.forEach((data) => {
  //     const img = new Image();
  //     img.src = `./Assets/${data}`;
  //     img.onload = handleLoad;
  //   });

  //   // Clean up the event listeners when the component unmounts
  //   return () => {
  //     imgarr.forEach((data) => {
  //       const img = new Image();
  //       img.src = `./Assets/${data}`;
  //       img.onload = null;
  //     });
  //   };
  // }, [imgarr]);
  const navigate = useNavigate()
  const handlenav=()=>{
    navigate("/contact")
  }
  return (
    <div className="homecont">
      <div className="lcont">
        <div className="lcontkacont">
          <h1>Satyartha Banerjee</h1>
          <p>Frontend Web Developer</p>
        </div>

        <button onClick={handlenav}>Hire Me</button>
      </div>
      <div className="rcont">
        <div className="rcontkacont">
         <img
            className="profilepic"
            src="./Assets/Screenshot 2023-12-06 023015.png"
          ></img> 
          <div className="logos">
          
          {
              imgarr.map((data, index) => (
                <img
                  key={index}
                  src={`./Assets/${data}`}
                  effect="blur"
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCont;
