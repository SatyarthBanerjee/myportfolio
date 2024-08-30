import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Projectcont = () => {
  const screenshot = [
    {
      image:"Lightss.png",
      link:"https://lightin.netlify.app/",
      name:"E-commerce website"
    },
    {
      image:"Todoss.png",
      link:"https://satyarthb.github.io/To-Dorespo/",
      name:"To-do App"
    },
    {
      image:"weatherss.png",
      link:"https://weather-app-extended.vercel.app/",
      name:"Weather App"
    },

  ]
  // const links = ["https://lightin.netlify.app/","https://satyarthb.github.io/To-Dorespo/","https://magical-crostata-838318.netlify.app/"]
  return (
    <div className='projectcont'>
        <h1>Projects</h1>
        <div className='projectsdone'>
            {screenshot.map((item)=>{
                return(
                  <div className='clickableprojects'>
                    <img id="laptop" src="./Assets/—Pngtree—macbook pro 16_9011850.png"></img>
                    <img id="imagess" src={`./Assets/${item.image}`} target="_blank" rel="external" effect='blur'/>
                    <h3>{item.name}</h3>
                    <a href={item.link}>Link</a>
                    {/* {links.map((item)=>{
                      return(
                        <a href={item}></a>
                      )
                    })} */}

                    
                  </div>
                    
                )
                
            })}
        </div>
    </div>
  )
}

export default Projectcont
