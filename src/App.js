import React from 'react'
import './App.css';
import HomePage from './pages/homepage/HomePage'
import { Switch, Route, Link } from 'react-router-dom'

const HatsPage = props => (
  <div>
  <h1>Hello hats</h1>
  </div>
)

function App() {
    return (
      <div>
      <Switch>
      <Route exact path='/' component = {HomePage}/>
      <Route path='/hats' component = {HatsPage} />
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

