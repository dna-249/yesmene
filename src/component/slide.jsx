import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaCircle, FaDotCircle, FaGgCircle} from "react-icons/fa"
const Slide = () => {
   const [showPic, setShowPic] = useState(0)
   const [show, setShow] = useState(false)
   const pic =["yasmen8.jpg","yasmen7.jpg","yasmen1.jpg","yasmen9.jpg"]
               
  const handleShow = () => {
    
  }
  
   
   const handleImg = (index) => {
     setShowPic(()=>index)
   }
   
   useEffect(()=>{
    const interval = setInterval(() => {
        setShowPic((index)=>{
            if(index === pic.length -1)return 0
            else return index + 1
             })  
    }, 3000);
    return ()=>{
        clearInterval(interval)
    }
   },[])
  return (
    <div style={{height:'100%',width:"100%", position:"relative",margin:'auto',}}>
        <div style={{height:'100%',width:"100%",display:"flex",overflow:'hidden',margin:'auto'}}  >
        {pic.map((p)=>
        <img  key={p} style={{translate:`${-100 * showPic}%`, transition:'1s ease-in-out',margin:'auto',flexGrow:"0",flexShrink:"0"}} src={p} className='img' />
        ,)}
        
    </div>
  <div  className={show? 'hide':"cover"} onClick={()=>setShow((prev)=>!prev)}> <h3>Yesmene <br /> Integrated Humanitarian <br /> Foundation</h3>
    <div>Educational Programmes </div>
    <div>Humanitarian Programmes</div>
    <div>Sustainable Programmes</div>
    </div>
    <div className='img-icon'>{pic.map((_,index)=><span key={index} onClick={()=>handleImg(index)}>{index === showPic? <FaDotCircle /> : <FaCircle/>}</span>)}</div>
    </div>
  )
}

export default Slide