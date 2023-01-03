import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import FloatButton from './components/FloatButton'
import './style.css'
import About from './views/about'
import Form from './views/form'
import Home from './views/home'
import Solutions from './views/solutions'
import How from './views/how'
import licencitarios from './views/licencitarios'

const App = () => {
  const [isSticky, setIsSticky] = useState(true);
  const handleScroll = () => {
    setTimeout(() => {
      setIsSticky(offset <= 920 ? false : true);
    }, 50)
  }
  return (
    <>
      <Router>
        <Switch>
          <Route component={About} exact path="/about" />
          <Route component={Form} exact path="/form" />
          <Route component={Home} exact path="/" />
          <Route component={Solutions} exact path="/solutions" />
          <Route component={How} exact path="/how" />
          <Route component={licencitarios} exact path="/licencitarios" />
        </Switch>
      </Router>
      {window.location.pathname !== '/licenciatarios' && window.location.pathname !== '/conviertete-en-licenciatario' && window.location.pathname !== '/thanks' &&
        <FloatButton sticked={isSticky} type='info' />
      }
      {window.location.pathname !== '/licenciatarios' && window.location.pathname !== '/conviertete-en-licenciatario' && window.location.pathname !== '/thanks' &&
        <FloatButton sticked={isSticky} type='whatsapp' />
      }
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'))
