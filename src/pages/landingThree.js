import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingFive from '../components/BannerLandingFive'
import Contact from '../components/Contact'
import FooterEight from '../components/FooterEight'

const Landing = (props) => (<Layout>
  <Helmet>
    <title>Juan Sainz</title>
    <meta name="description" content="Landing Page"/>
  </Helmet>

  <BannerLandingFive/>

  <div id="mainThree">

    <div className="inner border-mas-page">

      <h2 id="content">BIO</h2>
      <p>
        Desde muy joven encontró en la música una poderosa fuerza que le permitía sentir y disfrutar la vida de una manera especial. La aproximación a este mundo tuvo en sus comienzos un marcado carácter autodidacta sustentado por unas enormes ganas y no tantos recursos (no eran tiempos de internet). Su interés por el instrumento de la batería aparece ya a la edad de 11 años y siempre se consideró afortunado y privilegiado por la música a la que ha tenido el buen criterio de acceder. Corrían los 70, años del
        <a href="https://es.wikipedia.org/wiki/Rock_progresivo" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;rock progresivo&nbsp;</a>
        y experimental en grupos anglosajones de gran calidad instrumental como
        <a href="https://es.wikipedia.org/wiki/Yes_(banda)" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Yes&nbsp;</a>,
        <a href="https://es.wikipedia.org/wiki/Genesis" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Génesis&nbsp;</a>
        y
        <a href="https://es.wikipedia.org/wiki/King_Crimson" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;King Crimson&nbsp;</a>, trilogía fundamental en su primera formación. De obligada mención es el batería
        <a href="https://es.wikipedia.org/wiki/Bill_Bruford" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Bill Bruford&nbsp;</a>, principal responsable de su atracción y dedicación a este instrumento, entre otras razones por su original, atrevido y revolucionario concepto polirrítmico, en estrecha relación con la percusión clásica contemporánea, desarrollado también a través de sus propias composiciones, además de ser portador de una técnica y sonido exquisitos. Posteriormente en los años 80 tuvo la oportunidad de reforzar su interés a través del contacto con grandes músicos de Cádiz, principalmente
        <a href="https://www.conciertosengranada.es/artistas/manuel-perfumo-cuarteto" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Manuel Perfumo&nbsp;</a>, guía imprescindible en sus estudios de Jazz. Empieza a asistir a Seminarios nacionales e internacionales de jazz en los que tiene el honor de conocer, tanto dentro de las aulas como fuera de ellas a músicos de primera fila, asegurando definitivamente su determinación por esta música y desarrollando sus aptitudes en el instrumento. Grado Profesional de Percusión en el conservatorio
        <a href="https://conservatoriomanueldefalla.es/" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Manuel de Falla de Cádiz&nbsp;</a>, trabaja también la percusión clásica (
        <a href="http://orquestamanueldefalla.blogspot.com/" target="blank" className="anchor-flamenco-two bold-strong">Orquesta Manuel de Falla</a>). La evolución desde el rock al jazz se produce de manera muy natural, realizando un camino de ida y vuelta hacia los orígenes. Ello implicará ir gradualmente familiarizándose con repertorios estilísticamente muy diferenciados que van desde
        <a href="https://es.wikipedia.org/wiki/George_Gershwin" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Gershwin&nbsp;</a>,
        <a href="https://es.wikipedia.org/wiki/Scott_Joplin" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Scott Joplin&nbsp;</a>,
        <a href="https://es.wikipedia.org/wiki/Dixieland" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Dixieland&nbsp;</a>, el swing de las
        <a href="https://es.wikipedia.org/wiki/Big_band" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Big Bands&nbsp;</a>,
        <a href="https://es.wikipedia.org/wiki/Bebop" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Be Pop&nbsp;</a>,
        <a href="https://es.wikipedia.org/wiki/Cool_(jazz)" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Cool&nbsp;</a>,
        <a href="https://es.wikipedia.org/wiki/Hard_bop" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Hard Bop&nbsp;</a>,
        <a href="https://es.wikipedia.org/wiki/Jazz_latino" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Latin-Jazz&nbsp;</a>, etc. De igual manera, en su andadura profesional como músico en los años 90 y dado el contexto de la época, comienza a contactar con el mundo del Flamenco, en el que a través de los años, ha ido recorriendo muy distintos estilos que van desde los Nuevos Flamencos hasta los más rancios y auténticos artistas clásicos del género. Aún sin tener una vocación definida por la docencia, aunque sí por la buena comunicación, considera sin duda alguna que una de las mejores maneras de seguir aprendiendo es la enseñanza, a la que se dedica desde el año 1997, compaginándola con los conciertos. “La enseñanza te obliga a una actualización continua de conocimientos y a la consolidación de los ya adquiridos”. Consecuencia directa de su trabajo docente y profesional es la elaboración de un libro sobre la percusión moderna en el flamenco actual, “Clave Flamenca”, junto al percusionista
        <a href="https://malickmbengue.com/" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Malick Mbengue</a>.
      </p>
      <ul className="actions">
        <li>
          <a href="https://www.facebook.com/Juan-Sainz-Bateria-107702917718946/?modal=admin_todo_tour" className="button" target="blank">+ en Facebook&#x266D;</a>
        </li>
      </ul>
    </div>

    <div className="inner border-mas-page">

      <h2 id="content">FORMACION</h2>
      <p>Formado en Seminarios Nacionales e Internacionales de Jazz con profesores como:
        <a href="https://es.wikipedia.org/wiki/Max_Roach" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Max Roach&nbsp;</a>,
        <a href="https://fr.wikipedia.org/wiki/Joe_Hunt_(musicien)" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Joe Hunt&nbsp;</a>,
        <a href="https://en.wikipedia.org/wiki/Billy_Hart" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Billy Hart&nbsp;</a>,
        <a href="https://www.wbgo.org/post/bob-gullotti-drummer-and-teacher-known-legendary-tenure-fringe-dies-70" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Bob Gulotti&nbsp;</a>,
        <a href="https://en.wikipedia.org/wiki/Adam_Cruz" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Adam Cruz&nbsp;</a>,
        <a href="https://en.wikipedia.org/wiki/Jorge_Rossy" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Jordi Rossy&nbsp;</a>,
        <a href="https://www.conservatoriliceu.es/es/professors/marc-miralta/" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Marc Miralta&nbsp;</a>,
        <a href="https://es.wikipedia.org/wiki/Jeff_Ballard" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Jeff Ballard&nbsp;</a>,<a href="https://en.wikipedia.org/wiki/David_King_(drummer)" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;David King&nbsp;</a>,<a href="https://www.diariocordoba.com/noticias/cultura/andrea-michelutti-mejor-jazz-andaluz-abren-qurtuba-jazz_286966.html" target="blank" className="anchor-flamenco-two bold-strong">&nbsp;Andrea Michelutti</a>, etc.
      </p>
      <ul className="actions">
        <li>
          <a href="https://www.facebook.com/Juan-Sainz-Bateria-107702917718946/?modal=admin_todo_tour" className="button" target="blank">+ en Facebook&#x266D;</a>
        </li>
      </ul>
    </div>

  </div>

  <FooterEight/>

</Layout>)

export default Landing
