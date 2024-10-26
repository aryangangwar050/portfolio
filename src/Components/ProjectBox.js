import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName,nameKey}) => {
  const desc = {
    TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub : "https://github.com/DevanshSahni/tindog",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub:"",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite:"https://wiggles.vercel.app/",

    AstroFastDesc:"The AstroFast application is a comprehensive bus booking platform designed for users in Cameroon. Available on both Android and iOS, it allows users to easily book bus tickets. The app features the Transak Payment Gateway for secure transactions, a referral and downline system to encourage user growth, and enables users to transfer money to one another and users can download their tickets by the mobile app. AstroFast is already live on the Play Store, making it accessible for a wider audience.",
  AstroFastLink:"https://play.google.com/store/search?q=astro+fast&c=apps&hl=en_IN",

  RIXVIODesc:"Developed RIXVIO application which is a tiffin delivery service developed for both Android and iOS platforms. It consists of two separate apps: one for users and another for drivers. The app features Google Maps integration for seamless navigation, a location search function to improve user experience, and polygon mapping for more precise delivery areas. This solution is designed to enhance the efficiency of food delivery operations.",
  RIXVIOLink:"https://play.google.com/store/apps/details?id=com.rixvi.user",

  CascadeCutsDesc:"The Cascade Cuts application is a plant e-commerce platform developed for Android and iOS. It offers features like product browsing, cart management, a ”buy now” option, and order tracking and cancellation. The app integrates the Stripe payment gateway for secure transactions and also introduces a ”Pay by Cascade Cuts” feature, allowing users to make purchases and pay at a later date. Cascade Cuts has two modules: a user module for limited quantity purchases and a wholesaler module for bulk plant purchases. The app boasts a smooth user interface and is live on both the Play Store and App Store.",
  CascadeCutsLink:"https://play.google.com/store/apps/details?id=com.casecade.cuts&hl=en_US"

  }

  let show ='';
  if(desc[projectName + 'Github']==="" || !desc[projectName + 'Github']){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[nameKey + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[nameKey + 'Link']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox