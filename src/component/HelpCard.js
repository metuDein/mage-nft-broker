import React from 'react';

const HelpCard = ({ title, body, src}) => {
  return (
    <article className='help--card'>
    <img className='help--tab--img' src={src} alt="metamask" />

    <h1>{title}</h1>
    <p>{body}</p>
</article>
  )
}

export default HelpCard