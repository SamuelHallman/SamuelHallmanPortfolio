import { useState, useEffect  } from 'react';
export default function Navigation() {
      const [isButtonPressed, setNavButton] = useState(false);

      const handleButtonPressed = () => {
            if (isButtonPressed)setNavButton(false);
            else setNavButton(true);
      }
      const checkScreenSize = () => {
            setNavButton(window.innerWidth <= 1000);
            };
            
            useEffect(() => {
            window.addEventListener('resize', checkScreenSize);
            checkScreenSize();

            return () => window.removeEventListener('resize', checkScreenSize);
      }, []);

      return (
            <>
                  <button className='mobileNavButton' onClick={handleButtonPressed}>☰</button>
                  {isButtonPressed ? null :(
                  <nav>
                        <ul className='NAVIGATION'>
                              <li className='navButtonsList'><a href="#about" className='navButtons'>ABOUT</a></li>
                              <li className='navButtonsList'><a href="#portf" className='navButtons'>RECENT WORK</a></li>
                              <li className='navButtonsList'><a href="#contact" className='navButtons'>CONTACT</a></li>
                        </ul>
                  </nav>
                  )}
            </>
      )
}
