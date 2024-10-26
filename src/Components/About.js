import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, I'm <b>Aryan Gangwar</b>, highly skilled <b>Flutter developer</b> with
            over 2.8 years of experience in cross-platform mobile application
            development for both <b>Android</b> and <b>iOS</b>. Currently, I work at Alobha
            Technologies, where I’ve developed and maintained robust mobile
            applications featuring advanced functionalities such as payment
            gateway integrations, in-app purchases, and optimized state
            management using Provider and Bloc. I collaborate closely with UI/UX
            designers to achieve pixel-perfect interfaces and ensure a smooth,
            high-performance experience for users.
            <br />
            <br/>
            With a strong foundation in Dart, Java, Kotlin, and JavaScript, I’ve
            contributed to impactful projects like AstroFast, a comprehensive
            bus booking app, and Cascade Cuts, a plant e-commerce platform. Both
            apps are live on app stores, showcasing my ability to deliver
            complete, production-ready solutions. My experience includes RESTful
            API integration and third-party library management, enabling me to
            build scalable and feature-rich applications.
          </p>
          {/* <p>
            Hi, my name is <b>Aryan Gangwar</b> and I am from Noida, India. I'm
            a <b>MERN stack web developer</b> and a final year college student
            pursuing <b>BTech in CSE</b>. <br />
            <br />I have done an internship as a <b>software developer</b> at
            GoalFi which is a fintech startup. I love to create original
            projects with beautiful designs, you can check out some of my work
            in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to do photography, you can check out some
            of my shots here{" "}
            <a
              href="https://www.instagram.com/devansh_sahni_/?hl=en"
              target="_blank"
            >
              Instagram.
            </a>
          </p> */}
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="Flutter" />
        <Skills skill="Dart" />
        <Skills skill="Java" />
        <Skills skill="Kotlin" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Angular" />
        <Skills skill="Node" />
        <Skills skill="Ionic" />
        <Skills skill="MongoDb" />
        <Skills skill="AWS" />

        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
