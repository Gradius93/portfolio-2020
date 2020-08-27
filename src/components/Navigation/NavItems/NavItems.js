import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul className={classes.NavItems}>
    <NavigationItem link="/" exact>Sean</NavigationItem>
    <NavigationItem link="/About" exact>About</NavigationItem>
    <NavigationItem link="/Projects" exact>Projects</NavigationItem>
    <NavigationItem link="/Contact" exact>Contact</NavigationItem>
  </ul>
)

export default navigationItems
