import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Navigation from './Navigation';

export default function Intro() {
      const sectionRef5 = useRef<HTMLDivElement>(null);

      const { ref: ref5, inView: inView5 } = useInView({
            triggerOnce: true,
            threshold: 0.25,
      });
      
      return (
            <>
            <div className='INTRO'>
            <img src={process.env.PUBLIC_URL + "/Pictures/MyFace.JPG"} alt="myFace" className='facePicture' />
            <Navigation />
                  <div className='introText'>
                        <h1>HI, MY <br /> NAME IS <span className='samuel'>SAMUEL</span></h1>
                        <h2>
                        Driven by passion and fueled by creativity, I'm eager to bring my expertise to a dynamic team and make a lasting impact through innovative solutions.
                        </h2>
                  </div>
            </div>
            <hr />
            <div ref={sectionRef5}>
                  <div ref={ref5} className={`portfolioAppear ${inView5 ? 'inView' : ''}`}>
                        <div className='ABOUT' id='about'>
                              <div className='aboutText'>
                                    <p id='aboutHeading'>ABOUT</p>
                                    <p>
                                    Hello! I'm Samuel, a passionate Frontend developer, on a mission to bring creativity and innovation to the digital world. With a strong foundation in JavaScript, I thrive on translating ideas into captivating and functional solutions.
                                    <br /> <br />
                                    Throughout my journey, I've had the privilege of working on diverse projects, each presenting unique challenges that have honed my problem-solving abilities. From developing interactive games for elementary students to crafting seamless web experiences, I take pride in delivering projects that leave a positive impact.
                                    <br /> <br />
                                    My love for technology, especially JavaScript, has driven me to create engaging and dynamic user interfaces. Whether it's spinning up a spinwheel, weaving canvas magic, or diving deep into the intricacies of React, I'm always eager to push the boundaries of what's possible.
                                    <br /> <br />
                                    One of my notable projects involved collaborating with Jalkahoitola Askel, where I transformed their vision into reality, utilizing web hosting solutions from Planeetta Internet Oy. Despite the initial limitations, my resourcefulness and adaptability allowed me to excel and deliver outstanding results.
                                    <br /> <br />
                                    I'm deeply committed to continuous learning, always seeking opportunities to sharpen my skills and stay up-to-date with the latest trends and technologies. I firmly believe in the power of teamwork and collaboration, as it enriches the creative process and brings out the best in every project.
                                    <br /> <br />
                                    When I'm not coding, you can find me exploring the outdoors, finding inspiration in nature's beauty, or immersing myself in the pages of a good book.
                                    <br /> <br />
                                    I'm excited about the future of Web development, and I look forward to creating innovative solutions that make a difference. Let's connect and explore the endless possibilities together!
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
            </>
      )
}
