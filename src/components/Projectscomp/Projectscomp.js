import React from 'react'

import Index from './Projects/Index'

import classes from './Projectscomp.module.css'

const projectscomp = () => {
  return (
    <div classname={classes.Main}>
      <h1 className={classes.Title}>My Projects</h1>
      <div classname={classes.Index}>
        <Index />
      </div>
    </div>
  )
}

export default projectscomp
