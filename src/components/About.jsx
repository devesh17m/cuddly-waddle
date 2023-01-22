import React from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SpotifyPlayer from 'react-spotify-player';

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
            <p className='content_about' data-aos="fade-up">
            Hello! I'm Devesh Tripathi. I'm a computer science engineer by profession and a graphic designer by passion. Hence, whatever I build, I focus on pixel perfect delivery and experience. I'm from Hyderabad, India.
            <br></br>
            <br></br>
            I always try to sate my ever fostering curiosity to learn new things. I enjoy creating things that live on your device or the internet. I'm currently interning as a Software Engineer with the Information Security,Payments team at Amazon.com Inc. while pursuing my master's degree in Computer Science from University of Florida.
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
    </div>

        </div>
    </div>
  )
}

export default About