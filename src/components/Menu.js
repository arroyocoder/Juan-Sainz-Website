import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingThree">Bio</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Flamenco</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing0">Jazz/Latin</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingOne">Mas...</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingFour">Docencia</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landingTwo">Contacto</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
