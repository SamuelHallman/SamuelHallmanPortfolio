import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
      const sectionRef5 = useRef<HTMLDivElement>(null);

      const { ref: ref5, inView: inView5 } = useInView({
            triggerOnce: true,
            threshold: 1,
      });

      return (
            <>
                  <footer className='FOOTER'>
                  <div ref={sectionRef5}>
                        <div ref={ref5} className={`emailAnimetaion ${inView5 ? 'inView' : ''}`}>
                              <p id="sendMail">Send a mail</p>
                              <a href="mailto:samuel.hollman@hotmail.com" id="email">
                                    <p>samuel.hollman@hotmail.com</p>
                                    <div className='linkLine'></div>
                              </a>
                        </div>
                  </div>
                  </footer>
            </>
      )
}
