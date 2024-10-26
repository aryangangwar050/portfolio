import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap,FaAws} from "react-icons/fa";
import {DiNodejs, DiJavascript1,DiDart, DiJava, DiAngularSimple} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel , SiFlutter,SiKotlin, SiIonic} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
      Flutter:<SiFlutter/>,
      Dart:<DiDart/>,
      Java:<DiJava/>,
      Kotlin:<SiKotlin/>,
      Angular:<DiAngularSimple/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Ionic : <SiIonic/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        AWS:<FaAws/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
