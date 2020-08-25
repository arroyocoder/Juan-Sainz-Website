import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingThree from '../components/BannerLandingThree'
import Contact from '../components/Contact'
import FooterSeven from '../components/FooterSeven'




const Landing = (props) => (<Layout>
  <Helmet>
    <title>JUAN SAINZ</title>
    <meta name="description" content="Landing Page"/>
  </Helmet>

  <BannerLandingThree />

  <div id="mainTwo max-w">
    <Contact />
    <FooterSeven />


  </div>

</Layout>)

export default Landing
