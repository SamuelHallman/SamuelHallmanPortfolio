import './App.css';
import Frontpage from './Pages/Frontpage';
import Testing from './Pages/Testing';

function App() {
  let component;
      switch (window.location.pathname) {
        case "/":
              component = <Frontpage />
              break;
        case "/testing":
              component = <Testing />
              break;
      }
  return (
    <>
      {component}
    </>
  );
}

export default App;
