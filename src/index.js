import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import About from './views/about'
import Form from './views/form'
import Home from './views/home'
import Solutions from './views/solutions'
import How from './views/how'
import licencitarios from './views/licencitarios'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={About} exact path="/about" />
        <Route component={Form} exact path="/form" />
        <Route component={Home} exact path="/" />
        <Route component={Solutions} exact path="/solutions" />
        <Route component={How} exact path="/how" />
        <Route component={licencitarios} exact path="/licencitarios" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
