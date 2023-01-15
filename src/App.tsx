import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Cards from './Components/Cards.jsx'
import MainPage from './Components/MainPage';
import ReactGA from 'react-ga';
import ReactGA4 from 'react-ga4';
//import ReactGA from 'react-ga4';

const TRACKING_ID_GA = "UA-253439300-1";
const TRACKING_ID_GA4 = "G-CXEN0JB7T2";
ReactGA.initialize(TRACKING_ID_GA);
ReactGA4.initialize(TRACKING_ID_GA4);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA4.event('Homepage');
  }, []);

  return (
    <div>
      <MainPage/>
    </div>
  );
}

export default App;
