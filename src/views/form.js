import React from 'react'

import { Helmet } from 'react-helmet'

import Top from '../components/top'
import Navbar from '../components/navbar'
import Form from '../components/form'
import './form.css'

const Formt = (props) => {
  return (
    <div className="form-container">
      <Helmet>
        <title>form - SkyAlert US</title>
        <meta property="og:title" content="form - SkyAlert US" />
      </Helmet>
      <Top></Top>
      <Navbar></Navbar>
      <h1 className="form-text">
        <span>Let’s talk about business solutions!</span>
        <br></br>
        <span></span>
      </h1>
      <span className="form-text3 before-Heading">
        We have the perfect solution, shortly an advisor will assist you
      </span>
      <Form></Form>
    </div>
  )
}

export default Formt
