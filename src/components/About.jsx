import React from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SpotifyPlayer from 'react-spotify-player';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import <Spotify></Spotify>
const About = () => {
    AOS.init();
    const size = {
        width: 300,
        height: 100,
      };
      const view = 'list'; // or 'coverart'
      const theme = 'black'; // or 'white'
  return (

    <div className='jkkk'>
        <div className="left_container">
        <div className="about2">

            <h2 className='heading_about' data-aos="fade-up">ABOUT ME</h2>
            <p className='content_about' data-aos="fade-up" data-aos-duration="2000">
            Hello! I'm Devesh Tripathi. I'm a computer science engineer by profession and a graphic designer by passion. Hence, whatever I build, I focus on pixel perfect delivery and experience. I'm from Hyderabad, India.
            <br></br>
            <br></br>
            I always try to sate my ever fostering curiosity to learn new things. I enjoy creating things that live on your device or the internet. I'm currently interning as a Software Engineer with the Information Security,Payments team at Amazon.com Inc. while pursuing my master's degree in Computer Science from University of Florida.
            </p>
            <h2 className='tech_head'  data-aos="fade-up" data-aos-duration="2000">TECHNOLOGIES I'VE WORKED WITH</h2>
            <p className='tech'>
                <ul className='lang1'  data-aos="fade-up" data-aos-duration="2000">
                    <li className='l'>React Js</li>
                    <li className='l2'>Node Js</li>
                    <li>AWS</li>
                    <li>Figma</li>
                </ul>
                <ul className='lang2'  data-aos="fade-up" data-aos-duration="2000">
                    <li>Python</li>
                    <li>Kubernetes</li>
                    <li>Tensorflow</li>
                    <li>Open CV</li>
                    
                </ul>
            </p>
        </div>
        </div>
        <div className="right_container">

        {/* <Spotify link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" /> */}
        <div className="spot">
        <SpotifyPlayer className="lk"
  uri="spotify:track:2LEF1A8DOZ9wRYikWgVlZ8"
  size={size}
  view={view}
  theme={theme}
/>
    {/* <img className='boy' src="https://cdn.discordapp.com/attachments/1059104671911919619/1068417944910045225/3d-business-guy-working-on-a-computer.png"/> */}
    </div>
    <img className='boy' data-aos="zoom-in-up" data-aos-duration="2000" src="https://cdn.discordapp.com/attachments/1059104671911919619/1068417944910045225/3d-business-guy-working-on-a-computer.png"/>
        </div>
        
    </div>
  )
}

export default About