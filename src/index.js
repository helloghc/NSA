import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ModalContext } from './context'
import './style.css'
import AppSkyAlert from './views/app-sky-alert'
import SuitedeSoluciones from './views/suite'
import REDSkyAlert from './views/r-e-d-sky-alert'
import Home from './views/home'
import PorQuSkyAlert from './views/por-qu-sky'
import Prensa from './views/prensa';
import FloatButton from './components/FloatButton'
import ModalEpicenter from './components/Modal/Epicenter';
import PostDetail from './components/Posts/PostDetail';

const App = () => {

  const [isSticky, setIsSticky] = useState(true);
  const [isOpenModalEpicenter, setIsOpenModalEpicenter] = useState(false);

  const handleScroll = () => {
    const footer = document.getElementsByClassName("footer-container")[0];
    const offset = footer.getBoundingClientRect().top;
    setTimeout(() => {
      setIsSticky(offset <= 920 ? false : true);
    }, 50)
  }

  const toggleModalEpicenter = () => setIsOpenModalEpicenter(!isOpenModalEpicenter);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ModalContext.Provider value={{
        isOpen: isOpenModalEpicenter,
        toogleOpen: toggleModalEpicenter,
      }}>
        <Router>
          <div>
            <Route exact component={AppSkyAlert} path="/app" />
            <Route
              exact
              component={SuitedeSoluciones}
              path="/suite-de-soluciones"
            />
            <Route exact component={REDSkyAlert} path="/red-skyalert" />
            <Route exact component={Home} path="/" />
            <Route exact component={PorQuSkyAlert} path="/por-que-skyalert" />
            <Route exact component={Prensa} path="/prensa" />
            <Route exact component={PostDetail} path="/prensa/:name" />
          </div>
        </Router>
        {window.location.pathname !== '/protege-a-tu-personal-epicenter-01' &&
          <FloatButton sticked={isSticky} type='info' />
        }

        <FloatButton sticked={isSticky} type='whatsapp' />
        {
					isOpenModalEpicenter && (
						<ModalEpicenter
							id="modal"
							isOpen={isOpenModalEpicenter}
							onClose={toggleModalEpicenter}
						/>
					)
				}
      </ModalContext.Provider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
