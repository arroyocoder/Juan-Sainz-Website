import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingTwo from '../components/BannerLandingTwo'
import FooterFour from '../components/FooterFour'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic13 from '../assets/images/pic13.jpg'

const Landing = (props) => (<Layout>
  <Helmet>
    <title>JUAN SAINZ</title>
    <meta name="description" content="Landing Page"/>
  </Helmet>

  <BannerLandingTwo/>

  <div id="mainTwo">
    <section id="one">
      <div className="inner">
        <header className="major">
          <h2>Descripción</h2>
        </header>
        <p className="text-shade-4">Durante su larga carrera en el ámbito jazzistico, Juan ha colaborado en infinidad de proyectos de los cuales un gran numero de ellos han sido aclamados tanto por el público como por los críticos de jazz.
        </p>
      </div>
    </section>
    <section id="two" className="spotlights">
      <section>
        <iframe width="100%" height="440" src="https://www.youtube.com/embed/40G1gPogn_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

        <div className="content landing-generic-color">
          <div className="inner">
            <header className="major">
              <h3>Tumbando a Monk</h3>
            </header>
            <p className="text-shade-3">Tumbando a Monk es un sexteto de latin-jazz formado en Cádiz que muestra gratitud, respeto y admiración hacia uno de los personajes más influyentes y estrambóticos de la historia del jazz: Thelonious Monk.
              <br/>
              <a href="http://juliansanchezmusic.com/biografia/" target="blank" className="anchor-jazz-two">Julián Sánchez</a>: trompeta, fliscorno y percusiones menores.
              <a href="https://www.javiergaliana.es/#page2" target="blank" className="anchor-jazz-two">&nbsp;Javier Galiana</a>: piano.
              <a href="https://malickmbengue.com/" target="blank" className="anchor-jazz-two">&nbsp;Malick Mbengue</a>: congas y cajón.
              <a href="https://javibermudez.com/quien-soy/" target="blank" className="anchor-jazz-two">&nbsp;Javier Bermúdez</a>: bajo eléctrico.
              <a href="" target="blank" className="anchor-jazz-two">&nbsp;Juan Sainz</a>: batería.
              <a href="https://www.google.com/search?client=firefox-b-d&q=pedro+cortejosa" target="blank" className="anchor-jazz-two">&nbsp;Pedro Cortejosa</a>: saxo tenor y percusiones menores.

            </p>
            <ul className="actions">
              <li>
                <a href="https://www.youtube.com/channel/UCQ8WTNmqw5ycnW444PuwZ_g?view_as=subscriber" className="button" target="blank">+ en Youtube&#x266D;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>

        <iframe width="100%" height="400" src="https://www.youtube.com/embed/LNHG8t9Ao20" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        <div className="content landing-generic-color">
          <div className="inner">
            <header className="major">
              <h3>Sonora Big Band</h3>
            </header>
            <p className="text-shade-3">Concierto del 10º aniversario de la
              <a href="https://www.diariodecadiz.es/ocio/Sonora-Big-Band-Teatro-Falla_0_101990442.html" target="blank" className="anchor-jazz-two">&nbsp;Sonora Big Band de Cádiz&nbsp;</a>
              que incluye un magistral solo de saxo de
              <a href="http://www.carlosvilloslada.com/" target="blank" className="anchor-jazz-two">&nbsp;Carlos Villoslada</a>. Tema: "The Fat Man".
            </p>
            <ul className="actions">
              <li>
                <a href="https://www.youtube.com/channel/UCQ8WTNmqw5ycnW444PuwZ_g?view_as=subscriber" className="button" target="blank">+ en Youtube&#x266D;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <iframe width="100%" height="440" src="https://www.youtube.com/embed/hYQYESoIL1I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        <div className="content landing-generic-color">
          <div className="inner">
            <header className="major">
              <h3>Tomate Trío y Cebolla</h3>
            </header>
            <p className="text-shade-3">
              <a href="http://www.rizomarecords.com/tomate-trio-y-cebolla" target="blank" className="anchor-jazz-two">Tomate, trío y cebolla&nbsp;</a>
              es un grupo formado por tres indispensables del jazz gaditano como son
              <a href="https://www.javiergaliana.es/#page2" className="anchor-jazz-two" target="blank">&nbsp;Javier Galiana</a>,
              <a href="https://clasijazz.com/on-experience-trio/" target="blank" className="anchor-jazz-two">&nbsp;José López&nbsp;</a>
              y
              <a href="" target="blank" className="anchor-jazz-two">&nbsp;Juan Sainz</a>. Abordan su primera grabación juntos a trío (aunque Galiana y López han grabado numerosos discos juntos en otras formaciones) en la que arreglan los temas del repertorio del pianista, cantante y compositor cubano
              <a href="https://es.wikipedia.org/wiki/Bola_de_Nieve_(cantante)" target="blank" className="anchor-jazz-two">&nbsp;Bola de Nieve&nbsp;</a>
              con un atrevido histrionismo moderado por un gusto exquisito.
            </p>
            <ul className="actions">
              <li>
                <a href="https://www.youtube.com/channel/UCQ8WTNmqw5ycnW444PuwZ_g?view_as=subscriber" className="button" target="blank">+ en Youtube&#x266D;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <iframe width="100%" height="440" src="https://www.youtube.com/embed/jUUjFCASZBs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        <div className="content landing-generic-color">
          <div className="inner">
            <header className="major">
              <h3>La Canalla</h3>
            </header>
            <p className="text-shade-3">Formado por cinco andaluces practicantes y un alma netamente gaditana, el grupo se crea circunstancialmente allá por 2009 en Barcelona. Juan fue miembro fundador del grupo, grabó el primer Cd
              <a href="http://www.aireflamenco.com/resenas/61-la-canalla-flores-ymalas-hierbas" className="anchor-jazz-two" target="blank">&nbsp;“Flores y Malas Yerbas”,&nbsp;</a>
              trabajando junto a
              <a href="https://es.wikipedia.org/wiki/Muchachito_Bombo_Infierno" className="anchor-jazz-two" target="blank">&nbsp;Muchachito Bombo Infierno&nbsp;</a>,
              <a href="https://zenetoficial.com/index-1.html" className="anchor-jazz-two" target="blank">&nbsp;Tony Zenet&nbsp;</a>,
              <a href="https://www.javierruibal.com/bio/" className="anchor-jazz-two" target="blank">&nbsp;Javier Ruibal&nbsp;</a>,etc.
              <br/>
              <a href="http://www.aireflamenco.com/el-patio/270-antonio-romera-qchipiq" className="anchor-jazz-two" target="blank">Antonio Romera ‘Chipi’</a>: voz y letra.
              <a href="https://www.javiergaliana.es/#page2" className="anchor-jazz-two" target="blank">&nbsp;Javier Galiana</a>: piano.
              <a href="http://juliansanchezmusic.com/biografia/" className="anchor-jazz-two" target="blank">&nbsp;Julián Sánchez</a>: vientos.
              <a href="" className="anchor-jazz-two" target="blank">&nbsp;Juan Sainz</a>: batería.
              <a href="https://clasijazz.com/on-experience-trio/" className="anchor-jazz-two" target="blank">José López</a>: contrabajo.
            </p>
            <ul className="actions">
              <li>
                <a href="https://www.youtube.com/channel/UCQ8WTNmqw5ycnW444PuwZ_g?view_as=subscriber" className="button" target="blank">+ en Youtube&#x266D;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <iframe width="100%" height="420" src="https://www.youtube.com/embed/TE4S2zv2J3w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        <div className="content landing-generic-color">
          <div className="inner">
            <header className="major">
              <h3>Orquesta Manuel de Falla</h3>
            </header>
            <p>
              Homenaje de la
              <a href="https://transparencia.cadiz.es/xxxii-festival-de-musica-manuel-de-falla-george-gershwin-el-innovador/" target="blank" className="anchor-jazz-two">&nbsp;Camerata del Gran Teatro Falla&nbsp;</a>
              a la figura de
              <a href="https://es.wikipedia.org/wiki/George_Gershwin" target="blank" className="anchor-jazz-two">&nbsp;George Gershwin</a>. Celebrado en mayo de 2016 en el
              <a href="https://es.wikipedia.org/wiki/Gran_Teatro_Falla" target="blank" className="anchor-jazz-two">&nbsp;Gran Teatro Falla&nbsp;</a>
              de Cádiz. En el
              <a href="https://transparencia.cadiz.es/xxxii-festival-de-musica-manuel-de-falla-george-gershwin-el-innovador/" target="blank" className="anchor-jazz-two">&nbsp;XXXII Festival Manuel de Falla&nbsp;</a>, el último después de tantos años de existencia, por decisión política. Todas las transcripciones orquestales a cargo de
              <a href="http://www.centrodedocumentacionmusicaldeandalucia.es/opencms/documentacion/compositor.html?slug=jose-luis-lopez-aranda" target="blank" className="anchor-jazz-two">&nbsp;José Luis López Aranda</a>, director del concierto.
            </p>
            <ul className="actions">
              <li>
                <a href="https://www.youtube.com/channel/UCQ8WTNmqw5ycnW444PuwZ_g?view_as=subscriber" className="button" target="blank">+ en Youtube&#x266D;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/HRGkYq7NEpk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        <div className="content landing-generic-color">
          <div className="inner">
            <header className="major">
              <h3>Wise Guys Octet</h3>
            </header>
            <p className="">
              El único octeto de jazz del mundo que hace un repertorio de villancicos populares andaluces y castellanos.
              <br/>
              <a href="http://www.jmsanlucar.com/galeria-de-musicos-sanluquenos/manuel-calvo-lopez/" target="blank" className="anchor-jazz-two">&nbsp;Lipi Calvo</a>
              <a href="http://www.pedrocortejosa.com/" target="blank" className="anchor-jazz-two">,&nbsp;Pedro Cortejosa</a>,
              <a href="http://www.carlosvilloslada.com/" target="blank" className="anchor-jazz-two">&nbsp;Carlos Villoslada</a>,
              <a href="https://jambabrassband.com/miembros/bio/miguel-barrones/" target="blank" className="anchor-jazz-two">&nbsp;Miguel Barrones</a>,
              <a href="https://jngsa9.wixsite.com/jesusnunez/biografia" target="blank" className="anchor-jazz-two">&nbsp;Jesús Núñez</a>,
              <a href="https://es.linkedin.com/in/miguel-angel-l%C3%B3pez-27a16141" target="blank" className="anchor-jazz-two">&nbsp;Miguel Ángel López</a>,
              <a href="https://www.javiergaliana.es/#page2" target="blank" className="anchor-jazz-two">&nbsp;Javier Galiana</a>,
              <a href="https://clasijazz.com/on-experience-trio/" target="blank" className="anchor-jazz-two">&nbsp;José López</a>
              ,
              <a href="" target="blank" className="anchor-jazz-two">&nbsp;Juan Sáinz</a>.

            </p>
            <ul className="actions">
              <li>
                <a href="https://www.youtube.com/channel/UCQ8WTNmqw5ycnW444PuwZ_g?view_as=subscriber" className="button" target="blank">+ en Youtube&#x266D;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>

    <section id="two">
      <div className="inner">
        <header className="major">
          <h2>Mas</h2>
        </header>
        <p className="text-shade-3">
          -Circuitos Andaluces de Música con el quinteto Confirmation y la
          <a href="https://www.diariodecadiz.es/ocio/Sonora-Big-Band-Teatro-Falla_0_101990442.html" className="anchor-jazz" target="blank">&nbsp;Sonora Big Band</a>.
          <br/>
          <br/>
          -Premios al “Mejor Grupo” en
          <a href="https://www.juntadeandalucia.es/cultura/agendaculturaldeandalucia/evento/festival-orillas-del-jazz-en-punta-umbria-huelva" target="blank" className="anchor-jazz">&nbsp;Festival de Jazz de Punta Umbría&nbsp;</a>
          1999 y Granada 2003
          <br/>
          <br/>

          -Ha trabajado con la
          <a href="http://orquestamanueldefalla.blogspot.com/" target="blank" className="anchor-jazz">&nbsp;Orquesta Manuel de Falla</a>, entre otros en una obra sobre composiciones de
          <a href="https://es.wikipedia.org/wiki/George_Gershwin" target="blank" className="anchor-jazz">&nbsp;Gershwin</a>.

        </p>
      </div>
    </section>
  </div>

  <FooterFour/>

</Layout>)

export default Landing
