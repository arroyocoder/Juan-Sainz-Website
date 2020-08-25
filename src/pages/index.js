import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import pic08 from '../assets/images/pic08.jpg'
import pic16 from '../assets/images/pic16.jpg'
import guitarra from '../assets/images/guitarra.jpg'
import Footer from '../components/Footer'


class HomeIndex extends React.Component {
  render() {

    return (<Layout>
      <Helmet title="JUAN SAINZ" meta={[
          {
            name: 'description',
            content: 'Sample'
          }, {
            name: 'keywords',
            content: 'sample, something'
          }
        ]}></Helmet>

      <Banner/>

      <div id="main">
        <section id="one" className="tiles">
          <article style={{
              backgroundImage: `url(${pic16})`
            }}>
            <header className="major">
              <h3 className="tiles-contact">FLAMENCO&#x266D;</h3>
              <p className="tiles-contact">INFO Y VIDEOS</p>
            </header>
            <Link to="/landing" className="link primary"></Link>
          </article>
          <article style={{
              backgroundImage: `url(${pic16})`
            }}>
            <header className="major">
              <h3 className="tiles-contact">JAZZ/LATIN&#x266D;</h3>
              <p className="tiles-contact">INFO Y VIDEOS</p>
            </header>
            <Link to="/landing0" className="link primary"></Link>
          </article>
          <article style={{
              backgroundImage: `url(${pic16})`
            }}>
            <header className="major">
              <h3 className="tiles-contact">CONTACTO&#x266D;</h3>
              <p className="tiles-contact">DETALLES Y REDES SOCIALES</p>
            </header>
            <Link to="/landingTwo" className="link primary"></Link>
          </article>
          <article style={{
              backgroundImage: `url(${pic16})`
            }}>
            <header className="major">
              <h3 className="tiles-contact">MAS&#x266D;</h3>
              <p className="tiles-contact">otros proyectos</p>
            </header>
            <Link to="/landingOne" className="link primary"></Link>
          </article>

        </section>

      </div>
      <Footer />

    </Layout>)
  }
}

export default HomeIndex
