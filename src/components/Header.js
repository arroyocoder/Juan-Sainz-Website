import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import juanlogo from '../assets/images/juanlogo.jpg'


const Header = (props) => (
    <header id="header" className="alt">

        <nav>
            <button onClick={props.onToggleMenu} href="javascript:;"><span className="gold-banner-text">MENU</span></button>

        </nav>

    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
