import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Cards from './Components/Cards.jsx'
import MainPage from './Components/MainPage';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-253439300-1";
ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <MainPage/>
    </div>
  );
}

export default App;
