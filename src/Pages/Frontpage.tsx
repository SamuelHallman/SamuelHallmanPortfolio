import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Portfolio from '../Components/Portfolio';
import Footer from '../Components/Footer';
import Form from '../Components/Form';
import Intro from '../Components/Intro';


export default function Frontpage() {
      const sectionRef4 = useRef<HTMLDivElement>(null);
      
      const { ref: ref4, inView: inView4 } = useInView({
            triggerOnce: true,
            threshold: 0.7,
      });
      
      return (
            <>
                  <Intro />
                  <Portfolio />
                  <div ref={sectionRef4}>
                        <div ref={ref4} className={`portfolioAppear ${inView4 ? 'inView' : ''}`}>
                              <Form />
                        </div>
                  </div>
                  <Footer />
            </>
      )
}
