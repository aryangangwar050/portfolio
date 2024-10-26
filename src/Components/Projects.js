import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';
import astroFastBooking from "../images/astroFastBooking.webp";
import RIXIVO from "../images/RIXIVO.webp";
import CascadeCuts from "../images/CasadeCuts.webp"

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={astroFastBooking} projectName="Astro Fast" nameKey={"AstroFast"}/>
        <ProjectBox projectPhoto={RIXIVO} projectName="RIXVIO" nameKey={"RIXVIO"}/>
        <ProjectBox projectPhoto={CascadeCuts} projectName="Cascade Cuts" nameKey={"CascadeCuts"}/>
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects