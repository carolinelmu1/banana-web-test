import React from 'react'

import PropTypes from 'prop-types'

import NavbarInteractive from './navbar-interactive'
import './header.css'

const Header = (props) => {
  return (
    <div className={`header-header ${props.rootClassName} `}>
      <NavbarInteractive
        rootClassName="navbar-interactive-root-class-name"
        className=""
      ></NavbarInteractive>
    </div>
  )
}

Header.defaultProps = {
  imageSrc: '627ea472-d5ae-4574-be22-c591d9901fac',
  imageAlt: 'image',
  rootClassName: '',
}

Header.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
