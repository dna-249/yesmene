import React, { useEffect } from 'react'
import { useState} from 'react'
const About = () => {
    const [width, setWidth] = useState('')
    useEffect(()=>{
    const widths = window.outerWidth;

    const media = () => {
     if(widths <= 350){
        setWidth(()=> 'grid2') } else { setWidth(()=> 'grid')}
    };media()

    },[])
      

    
  return (
    <>
    <div className='center' > <h3 onClick={()=>media()}> ABOUT  YIMF</h3></div>
    <div className={width}> 
        <div>< img className='img2' src="y.jpg" alt="" />
        <br /><span> VISION & MISSION</span>
        </div>
        <div>< img className='img2' src="yasmen6.jpg" alt="" />
        <br /><span> PROJECTS </span>
        </div>
        <div>< img className='img2' src="yasmen4.jpg" alt="" />
        <br /><span> OUR TEAM</span></div>
        
        
    </div>
    <div className='center'><h3> learn more </h3></div>

    </>
  )
}

export default About