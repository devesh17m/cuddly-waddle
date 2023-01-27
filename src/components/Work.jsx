import React , {useState}from 'react'
import './Work.css'
const Work = () => {
    const obj = {
        "Amazon": ["Software Development Engineer Intern @ Amazon.com Inc.", "May - Aug 2022", "SDE Intern for the Amazon Payments and Security Team, LumosXBatch Transmission.", "Designed a unique way of S2S authentication for services in Amazon.com’s core Batch Payments architecture, by leveraging the use of digital signatures(JWTs) secured with AWS KMS, to migrate from legacy web CAs.", "This implementation cuts down the incurred IMR cost by a significant 90% and also unaltered the SLA of the payments service, while keeping the service secure."],
        "Tcs": ["Graduate Research Assistant-UF @ FICS", "Jul 2021 - present", "FICS stands for Florida Institute for Cybersecurity Research, Gainesville, FL, USA. This is where I conducted an extensive research on Explainable Ai (XAI by DARPA) directed around how an optical character recognizer works on Assuring Printed Circuit Boards.", "Implemented various interpretable specific and agnostic methodologies like Gradient CAMs, Layer-wise Relevance BackPropagation (LRP),Local Interpretable Model-Agnostic Explanations (LIME) and Shapley Additive Explanations (SHAP)"]
    }
    const [active, setActive] = useState('Amazon');
    console.log(Object.keys(obj)[0])
  return (
    <div>
        <p className='work_heading'>Where I've Worked</p>
        <div className="parent_work">
            
        </div>
        
        <div className="jobs" data-aos="fade-up"
     data-aos-duration="2000">
            <div className="left_job">
                <h2 className='company' onClick={() => setActive("Amazon")}>{Object.keys(obj)[0]}</h2>
                <h2 className='company' onClick={() => setActive("Tcs")} >{Object.keys(obj)[1]}</h2>
            </div>
            <div className="right_job">
                
                <div className="right_job_head">
                    <h2 className='work_title'>{obj[active][0]}</h2>
                    <h3 className='duration'>{obj[active][1]}</h3>
                </div>
                    <ul className='work_done'>
                    {
                                
                                obj[active].slice(2, obj[active].length).map((ele, i) => {
                                    console.log(i)
                                    return (
                                        <li className='niv' key={i}>{ele}</li>
                                    )
                                })
                            }
                    </ul>

            </div>
        </div>
    </div>
  )
}

export default Work