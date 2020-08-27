import React from 'react'

import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem'

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/" exact>Sean</NavItem>
    <NavItem link="/About" exact>About</NavItem>
    <NavItem link="/Projects" exact>Projects</NavItem>
    <NavItem link="/Contact" exact>Contact</NavItem>
  </ul>
)

export default navItems
