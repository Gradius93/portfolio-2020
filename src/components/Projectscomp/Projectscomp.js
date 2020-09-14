import React from 'react'

import Index from './Projects/Index'

import classes from './Projectscomp.module.css'

const projectscomp = () => {
  return (
    <div classname={classes.Index}>
    <h1 className={classes.Title}>My Projects</h1>
      <Index />
    </div>
  )
}

export default projectscomp
