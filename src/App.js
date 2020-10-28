import React from 'react'
import './App.css';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/Shop'
import { Switch, Route} from 'react-router-dom'


function App() {
    return (
      <div>
      <Switch>
      <Route exact path='/' component = {HomePage}/>
      <Route path='/shop' component = {ShopPage} />
      </Switch>
      </div>
    );
}

export default App;

/*
const HatsDetails = props => (
  <div>
  <h1>hats details {props.match.params.hatsId}</h1>
  </div>
)
//      <Route path='/hats/:hatsId' component = {HatsDetails} />
between hatspage div below
 // <Link to={`${props.match.url}/13`}>to topic 13</Link>
 // <Link to={`${props.match.url}/100`}> to topic 100</Link>*/

