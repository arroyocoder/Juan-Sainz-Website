import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLandingFour from '../components/BannerLandingFour'
import FooterFive from '../components/FooterFive'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic13 from '../assets/images/pic13.jpg'

const Landing = (props) => (<Layout>
  <Helmet>
    <title>JUAN SAINZ</title>
    <meta name="description" content="Landing Page"/>
  </Helmet>

  <BannerLandingFour/>

  <div id="mainThree">
    

    <div className="inner border-mas-page">
      <header className="major">
        <h2 id="content">CANTAUTORES</h2>
      </header>
      <p>
        -<a href="http://lacanalla.net/blog/bio/" target="blank" className="anchor-flamenco-two">La Canalla</a>: socio fundador del proyecto. Grabacion del primer disco
        <a href="https://www.discogs.com/es/La-Canalla-Flores-Y-Malas-Hierbas/release/3405457" target="blank" className="anchor-flamenco-two">&nbsp;"Flores y Malas Hierbas"&nbsp;</a>. Dentro de este proyecto colaboro con otros cantautores como Muchachito Bombo Infierno, El Kanka o Vicky Luna.
        <br/>
        -<a href="https://www.javierruibal.com/bio/" target="blank" className="anchor-flamenco-two">Javier Ruibal</a>: colaboro en la gira de su disco
        <a href="https://www.amazon.es/La-Reina-de-Africa/dp/B00WFFEJFA" target="blank" className="anchor-flamenco-two">&nbsp;"La Reina de África"&nbsp;</a>
        y en
        <a href="https://www.amazon.es/Javier-Ruibal-CDs-vinilos/s?k=Javier+Ruibal&rh=n%3A599373031" target="blank" className="anchor-flamenco-two">&nbsp;"El Clandestino del Puerto"&nbsp;</a>
        junto con el grupo.
        <br/>
        -En su gira sobre musica de Bola de Nieve con Tomate Trio y Cebolla compartio escenario con
        <a href="https://es.wikipedia.org/wiki/Martirio_(cantante)" target="blank" className="anchor-flamenco-two">&nbsp;Martirio</a>.
        <br/>
        -Acompaña al autor gaditano

        <a href="https://es.wikipedia.org/wiki/Antonio_Mart%C3%ADnez_Ares" target="blank" className="anchor-flamenco-two">&nbsp;Martínez Ares&nbsp;</a>
        tanto en su vertiente de cantautor como en su reciente trabajo
        <a href="https://www.lavozdigital.es/cadiz/lvdi-martinez-ares-presenta-nueva-banda-cannivals-concierto-pay-pay-201704061644_noticia.html" target="blank" className="anchor-flamenco-two">&nbsp;(“The Cannivals”)&nbsp;</a>, consistente en música y letras extraídas de sus exitosas agrupaciones de carnaval .
        <br/>
      </p>
      <ul className="actions">
        <li>
          <a href="https://www.youtube.com/channel/UCQ8WTNmqw5ycnW444PuwZ_g?view_as=subscriber" className="button" target="blank">+ en Youtube&#x266D;</a>
        </li>
      </ul>
    </div>
    <div className="inner border-mas-page">
      <header className="major">
        <h2 id="content">OTRAS ACTIVIDADES</h2>
      </header>
      <p>
        -Cine:
        <a href="https://www.premiosgoya.com/pelicula/demasiado-corazon" target="blank" className="anchor-flamenco-two">&nbsp;Demasiado Corazón (Eduardo Campoy)</a>,
        <a href="https://es.wikipedia.org/wiki/Veinte_a%C3%B1os_no_es_nada" target="blank" className="anchor-flamenco-two">&nbsp;20 años no es nada ( Antonio de Cos).</a>
        <br/>
        -Baile:
        <a href="https://www.regmurcia.com/servlet/s.Sl?sit=c,419,m,1360&r=ReP-18924-DETALLE_REPORTAJES" target="blank" className="anchor-flamenco-two">&nbsp;Espectáculo flamenco “Raza”&nbsp;</a>
        de
        <a href="https://www.regmurcia.com/servlet/s.Sl?sit=c,419,m,1360&r=ReP-18924-DETALLE_REPORTAJES" target="blank" className="anchor-flamenco-two">&nbsp;Antonio Parra.</a>
        <br/>
        -Teatro:
        <a href="https://www.lacronicabadajoz.com/noticias/agenda/arsenio-martins-aroma-jazz-trio-jazziberia_204848.html" target="blank" className="anchor-flamenco-two">&nbsp;Arsenio Martins&nbsp;</a>
        (animación musicada sobre cine expresionista alemán).
        <br/>
        -TV:
        <a href="https://www.youtube.com/playlist?list=PLEB7C43A8D3111FC8" target="blank" className="anchor-flamenco-two">&nbsp;1001 Noches&nbsp;</a>
        de(
        <a href="https://cordobapedia.wikanda.es/wiki/Joaqu%C3%ADn_Petit" target="blank" className="anchor-flamenco-two">Joaquín Petit</a>),
        <a href="https://es.wikipedia.org/wiki/El_loco_de_la_colina" target="blank" className="anchor-flamenco-two">&nbsp;El Loco de la Colina (Big Band Sonora)</a>,
        <a href="https://www.canalsur.es/portada-2808.html" target="blank" className="anchor-flamenco-two">Canal Sur</a>,
        <a href="https://solmusica.com/" target="blank" className="anchor-flamenco-two">Sol Música</a>
        y el programa de
        <a href="https://es.wikipedia.org/wiki/Andreu_Buenafuente" target="blank" className="anchor-flamenco-two">Buenafuente</a>
        con
        <a href="https://es.wikipedia.org/wiki/El_Barrio_(cantautor)" target="blank" className="anchor-flamenco-two">El Barrio</a>.
        <br/>
        -Colabora ocasionalmente con la orquesta
        <a href="http://orquestamanueldefalla.blogspot.com/" target="blank" className="anchor-flamenco-two">Manuel de Falla</a>
        tanto en repertorios clásicos como jazzisticos(<a href="https://en.wikipedia.org/wiki/George_Gershwin" className="anchor-flamenco-two" target="blank">George Gershwin</a>).
        <br/>
        -Ha promocionado como esponsor a
        <a href="https://pearldrum.com/" target="blank" className="anchor-flamenco-two">&nbsp;Pearl Drums&nbsp;</a>
        y
        <a href="https://sabian.com/" target="blank" className="anchor-flamenco-two">&nbsp;Sabian Cymbals.</a>

      </p>
      <ul className="actions">
        <li>
          <a href="https://www.facebook.com/Juan-Sainz-Bateria-107702917718946/?modal=admin_todo_tour" className="button" target="blank">+ en Facebook&#x266D;</a>
        </li>
      </ul>

    </div>

  </div>

  <FooterFive/>

</Layout>)

export default Landing
