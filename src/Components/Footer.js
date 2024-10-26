import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      {/* <h4>Developed by Aryan Gangwar</h4>
      <h4>Copyright &copy; 2023 DS</h4> */}
      <div className='footerLinks'>
        <a href="https://github.com/aryangangwar050/" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/aryan-gangwar-36334a173/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:aryangangwar050@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer