import React from 'react'

import classes from './Projects.module.css'

const Card = ({ image, title, info }) => {
  return (
    <div className={classes.Card}>
      <div className="card-header">
        <h3 className="card-header-title">{title}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={title}/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>{info}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
