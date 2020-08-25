import React from 'react'
import {Link} from 'gatsby'

const Footer = (props) => (<footer id="footer" className="footer-one">
  <div className="inner">
    <ul className="icons">
      <li>
        <a href="https://www.youtube.com/channel/UCQ8WTNmqw5ycnW444PuwZ_g?view_as=subscriber" className="icon alt fa-youtube fa-2x" target="blank">
          <span className="label">Youtube</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/Juan-Sainz-Bateria-107702917718946/?modal=admin_todo_tour" className="icon alt fa-facebook fa-2x" target="blank">
          <span className="label">Facebook</span>
        </a>
      </li>
      <Link to="/" className="button">Home</Link>

    </ul>

  </div>
</footer>)

export default Footer
