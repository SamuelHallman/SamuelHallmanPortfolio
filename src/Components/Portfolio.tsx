import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Portfolio() {
      const sectionRef1 = useRef<HTMLDivElement>(null);
      const sectionRef2 = useRef<HTMLDivElement>(null);
      const sectionRef3 = useRef<HTMLDivElement>(null);

      const { ref: ref1, inView: inView1 } = useInView({
            triggerOnce: true,
            threshold: 0.5,
      });

      const { ref: ref2, inView: inView2 } = useInView({
            triggerOnce: true,
            threshold: 0.6,
      });

      const { ref: ref3, inView: inView3 } = useInView({
            triggerOnce: true,
            threshold: 0.7,
      });

      return (
      <>
      <hr />
            <div className='PORTFOLIO' id='portf'>
                  <div ref={sectionRef1}>
                        <div ref={ref1} className={`portfolioAppear ${inView1 ? 'inView' : ''}`}>
                              <h3>Digiruori</h3>
                                    <a href="https://digiruori.fi/pelit/r6/" target="_blank"  rel="noopener noreferrer">
                                    <div className='group1'>
                                          <img src="Pictures/AvaruuspeliKeski.jpg" alt="Avaruuspeli" className='picturesSpace'/>
                                          <img src="Pictures/Avaruuspeli.jpg" alt="Avaruuspeli" className='picturesSpace'/>
                                          <img src="Pictures/AvaruuspeliAloitus.jpg" alt="Avaruuspeli" className='picturesSpace'/>
                                    </div>
                                    </a>
                              <a href="https://digiruori.fi/pelit/r6/" target="_blank"  rel="noopener noreferrer" className='projectLinks1'>Visit the site</a>
                              <p className='paragraph1'>
                              In this project, my team and I developed an educational game for elementary students. We utilized HTML canvas 
                              to create the game. My specific contributions to the project included implementing the player mechanics, score 
                              tracking, dice functionality, and managing the canvas rendering. Throughout the development process, we 
                              encountered various challenges, such as resolving issues with the camera following the player and clearing 
                              previously drawn images on the canvas.
                              </p>
                        </div>
                  </div>
                  <div ref={sectionRef2}>
                        <div ref={ref2} className={`portfolioAppear ${inView2 ? 'inView' : ''}`}>
                              <h3>Digiruori</h3>
                              <a href="https://digiruori.fi/pelit/r6p2/" target="_blank"  rel="noopener noreferrer">
                                    <div className='group2'>
                                          <img src="Pictures/KertotaulupeliKeski.jpg" alt="Kertotaulupeli" className='picturesMulti'/>
                                          <img src="Pictures/Kertotaulupeli.jpg" alt="Kertotaulupeli" className='picturesMulti'/>
                                          <img src="Pictures/KertotaulupeliAloitus.jpg" alt="Kertotaulupeli" className='picturesMulti'/>
                                    </div>
                              </a>
                              <a href="https://digiruori.fi/pelit/r6p2/" target="_blank"  rel="noopener noreferrer" className='projectLinks2'>Visit the site</a>
                              <p className='paragraph2'>
                              For this project, our team designed an interactive multiplication game tailored for elementary students. I took 
                              the lead in developing the spinwheel feature and focused on optimizing the game for mobile devices. The majority 
                              of the project was built using JavaScript.
                              </p>
                        </div>
                  </div>
                  <div ref={sectionRef3}>
                        <div ref={ref3} className={`portfolioAppear ${inView3 ? 'inView' : ''}`}>
                              <h3>Jalkahoitola Askel</h3>
                              <a href="http://www.jalkahoitola-askel.fi/" target="_blank"  rel="noopener noreferrer">
                                    <div className='group3'>
                                          <img src="Pictures/Jalkahoitola-askelPalvelut.jpg" alt="Jalkahoitola" className='picturesFeet'/>
                                          <img src="Pictures/Jalkahoitola-askelYhteydenotto.jpg" alt="Avaruuspeli" className='picturesFeet'/>
                                          <img src="Pictures/Jalkahoitola-askel.jpg" alt="Avaruuspeli" className='picturesFeet'/>
                                    </div>
                              </a>
                              <a href="http://www.jalkahoitola-askel.fi/" rel="noopener noreferrer" target="_blank" className='projectLinks3'>Visit the site</a>
                              <p className='paragraph3'>
                              I worked on a project for a company called Jalkahoitola Askel. To host the project, I used a web hosting service called
                              Planeetta Internet Oy. Although the tools provided by the hosting service had some limitations, I managed to create 
                              the required solution. Later, I recreated the project using React, which offered more flexibility and capabilities. 
                              Despite the challenges posed by the initial technologies, I successfully delivered a functional and improved version 
                              using React.
                              </p>
                        </div>
                  </div>
            </div>
      </>
      )
}
