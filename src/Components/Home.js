import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>ARYAN GANGWAR</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I’m a dedicated Flutter developer with a strong background in creating impactful mobile applications that blend functionality with a smooth user experience. I love the process of turning a raw concept into a product that users can rely on.<br /><br />
          With a strong foundation in <b>Dart</b>, <b>Java</b>, <b>Kotlin</b>, and <b>JavaScript</b>, 
          I completed successful projects across diverse sectors, like <b>E-Commerce</b> Applications, <b>Bus Booking</b> Application, <b>IoT Devices</b> based management User Interface, also Some <b>Gaming</b> Mobile Applications.
          <br/>
          &nbsp; &nbsp; &nbsp; &nbsp; I’m currently exploring full-stack development, focusing on <b>React.js</b> and <b>Angular</b> for the frontend, and using <b>Node.js</b> and <b>Java</b> with serverless architecture to build efficient, scalable APIs.

            {/* I plan to learn <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future.*/}
             <br /><br /> 
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home