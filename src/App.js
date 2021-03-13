import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/nav';
import Aboutus from './components/aboutus';
import { useState  , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movies from './components/movies';
import useWindowDimensions from './useWindowResize';
import SingleMovie from './components/singleMovie';

function App() {
  const [inout, setInout] = useState(-110);

  const {width} = useWindowDimensions();

  const openNav = () => {
    if (width < 1780) {
      if (inout === -110) {
        setInout(0)
      } else {
        setInout(-110)
      }
    }
  }

  useEffect(()=>{
    if(width > 1780){
      setInout(0)
    }
    if(width < 1780){
      setInout(-110)
    }
  },[width])

  return (
    <div className="App">
      <button id="open-nav" onClick={openNav}><FontAwesomeIcon icon="bars" /></button>
      <Router>
        <Nav open={inout} closeNav={openNav} />
        <Switch>
          <Route path="/" exact>
            <Movies />
          </Route>
          <Route path="/aboutus" exact>
            <Aboutus />
          </Route>
          <Route path="/movies" exact>

          </Route>
          <Route path="/movies/:id">
            <SingleMovie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
