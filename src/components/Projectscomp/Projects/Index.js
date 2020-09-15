import React, { Component } from 'react'

import Card from './Card'

import classes from './Projects.module.css'

const projects = [
  { title: "spam", image: "asdf", info: "dummy" },
  { title: "blam", image: "asdf", info: "dummy" },
  { title: "maam", image: "asdf", info: "dummy" },
  { title: "wham", image: "asdf", info: "dummy" },
  { title: "damn", image: "asdf", info: "dummy" },
  { title: "lamb", image: "asdf", info: "dummy" },
  { title: "caam", image: "asdf", info: "dummy" },
  { title: "gram", image: "asdf", info: "dummy" }

]

class Index extends Component {

  constructor() {
    super()

    this.state = {
      projects: {
        title: "spam",
        image: "asdf",
        info: "dummy"
      }
    }
  }



  render() {


  return (
      <section className="section">
        <div className={classes.Container}>

          <div className={classes.Index}>


            {projects.map(project => (
              <Card
                key={project.title}
                title={project.title}
                image={project.title}
                info={project.info} />
            ))}

          </div>
        </div>
      </section>
    )
  }
}

export default Index
