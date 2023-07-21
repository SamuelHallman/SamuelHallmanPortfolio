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
            <div className='PORTFOLIO'>
                  <div ref={sectionRef1}>
                        <div ref={ref1} className={`portfolioAppear ${inView1 ? 'inView' : ''}`}>
                              <h3>Digiruori</h3>
                              <a href="https://digiruori.fi/pelit/r6/" target="_blank"  rel="noopener noreferrer">
                                    <img src="Pictures/AvaruuspeliAloitus.jpg" alt="Avaruuspeli" className='pictures'/>
                                    <img src="Pictures/Avaruuspeli.jpg" alt="Avaruuspeli" className='picturesFront'/>
                              </a>
                              <a href="https://digiruori.fi/pelit/r6/" target="_blank"  rel="noopener noreferrer" className='projectLinks'>Visit the site</a>
                              <p className='paragraph'>
                                    In this project me and my team created a game for a elementary students. We created this 
                                    game using HTML canvas. My part in the project was the player, score, dice and canvas.
                                    There were many problems along the way for example the camera following the player or 
                                    the canvas not clearing last drawn pictures.
                              </p>
                        </div>
                  </div>
                  <div ref={sectionRef2}>
                        <div ref={ref2} className={`portfolioAppear ${inView2 ? 'inView' : ''}`}>
                              <h3>Digiruori</h3>
                              <a href="https://digiruori.fi/pelit/r6p2/" target="_blank"  rel="noopener noreferrer">
                                    <img src="Pictures/KertotaulupeliAloitus.jpg" alt="Avaruuspeli" className='pictures'/>
                                    <img src="Pictures/Kertotaulupeli.jpg" alt="Kertotaulupeli" className='picturesFront'/>
                              </a>
                              <a href="https://digiruori.fi/pelit/r6p2/" target="_blank"  rel="noopener noreferrer" className='projectLinks'>Visit the site</a>
                              <p className='paragraph'>
                                    In this project me and my team created a game about multiplications for elementary students. 
                                    I created the spinwheel and the mobile visual side. This project was creted using JavaScript 
                                    mostly.
                              </p>
                        </div>
                  </div>
                  <div ref={sectionRef3}>
                        <div ref={ref3} className={`portfolioAppear ${inView3 ? 'inView' : ''}`}>
                              <h3>Jalkahoitola Askel</h3>
                              <a href="https://digiruori.fi/pelit/r6p2/" target="_blank"  rel="noopener noreferrer">
                                    <img src="Pictures/Jalkahoitola-askel.jpg" alt="Jalkahoitola" className='pictures'/>
                                    <img src="Pictures/Jalkahoitola-askelYhteydenotto.jpg" alt="Avaruuspeli" className='picturesFront'/>
                              </a>
                              <a href="http://www.jalkahoitola-askel.fi/" rel="noopener noreferrer" target="_blank" className='projectLinks'>Visit the site</a>
                              <p className='paragraph'>
                                    This project was for a company called Jalkahoitola Askel. I created this using webhosting called 
                                    Planeetta Internet Oy. It's tools were limited, but I created a copy of this with React. Most of
                                    the problems in this project was limitation with the technologies that was given to me.
                              </p>
                        </div>
                  </div>
            </div>
      </>
      )
}
