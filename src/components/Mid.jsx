import React from 'react'
import './Mid.css'
import Lottie from 'react-lottie';
import * as animationData from './dev.json'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Mid = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    AOS.init();
  
    return (
    <div>
        <div className="parent">
            <div className="left">
                <h2 className='name_top'>Namaste, I'm </h2>
                <h1 className='name' data-aos="fade-right"  data-aos-duration="60000">Devesh Mani Tripathi</h1>
                <p className='about'>I'm a computer science engineer, an aspiring software developer and a graphic designer, currently living in the USA. I'm actively looking for full-time SDE opportunities.</p>
                <button className='connect' data-aos="fade-up"
     data-aos-offset="90"
     data-aos-easing="ease-in-sine">Get In Touch</button>
                <div className="k">
                    <div className="github">
                        <a className='jk' href='https://github.com/devesh17m' target="_blank">
                        <AiFillGithub />
                        </a>
                    </div>
                    <div className="linkedin">
                        <a className='jk' href="https://www.linkedin.com/in/deveshtripathi03/" target="_blank">
                            <AiFillLinkedin/>
                        </a>
                    </div>
                    <div className="mail">
                        
                        <AiFillMail/>
                    </div>

                    <hr className='line'></hr>
                </div>
            </div>
            <div className="right">
            <Lottie className="lot" options={defaultOptions}
            //   height={400}
            //   width={400}
              
              />
            </div>
        </div>
        
    </div>
  )
}

export default Mid