import React, { Component } from 'react'

import Card from './Card'

import classes from './Projects.module.css'

class Index extends Component {

  constructor() {
    super()

    this.state = {
      projects: []
    }
  }



  render() {


  return (
      <section className="section">
        <div className={classes.Container}>
        
          <div className={classes.Index}>
            <Card title="spam" image="asdf" info="dummy"/>
            <Card title="blam" image="asdf" info="dummy"/>
            <Card title="maam" image="asdf" info="dummy"/>
            <Card title="wham" image="asdf" info="dummy"/>
            <Card title="damn" image="asdf" info="dummy"/>
            <Card title="lamb" image="asdf" info="dummy"/>
            <Card title="cam" image="asdf" info="dummy"/>
            <Card title="gram" image="asdf" info="dummy"/>

          </div>
        </div>
      </section>
    )
  }
}

export default Index
