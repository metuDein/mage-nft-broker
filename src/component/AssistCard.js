import React from 'react'

const AssistCard = ({image, title}) => {
  return (
    <article className='assist--card'>
      <img style={{background : '#000'}} src={image} alt="Non Fungible Token Icon" loading="lazy" className="assist--card--img" />
      <h2>{title}</h2>
    </article>
  )
}

export default AssistCard