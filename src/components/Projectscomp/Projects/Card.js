import React from 'react'

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={title} />
        </figure>
      </div>

    </div>
  )
}

export default Card
