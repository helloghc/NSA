import React from 'react'

import { Helmet } from 'react-helmet'

import Top from '../components/top'
import Navbar from '../components/navbar'
import Licencitarios from '../components/licencitarios'
import Footer from '../components/footer'
import './licencitarios.css'


const viewLicencitarios = (props) => {
  return (
    <div>
      <Helmet>
        <title>Licenciatarios - SkyAlert</title>
        <meta property="og:title" content="licencitarios - SkyAlert US" />
      </Helmet>
      <Top></Top>
      <Navbar></Navbar>
      <div className="licencitarios-container">
      <h1 className="licencitarios-text">
        <span><strong>¡Hola!</strong></span>
        <br></br><br></br>
        <span>Agradecemos tu interés en formar parte de la unidad de negocio <strong>Licenciatarios SkyAlert.</strong></span>
        <br></br>
        <span></span>
      </h1>
      <span className="licencitarios-text3 before-Heading">
        Te invitamos a que nos dejes tus datos para ponernos en contacto contigo
      </span>
      <Licencitarios></Licencitarios>
      </div>
      <hr></hr>
      <Footer></Footer>
    </div>
  )
}

export default viewLicencitarios