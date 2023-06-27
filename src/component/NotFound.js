import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='greet--tab' style={{flexDirection : 'column'}}>
        <img src="images/finallogo.png"  />
            <h1 style={{color:'#fff'}}> 404 Page Not Found </h1>
            <Link to={'/'} style={{background : '#fff', color : '#000', padding : '10px 20px', borderRadius : '10px'}}> Goto Homepage </Link>
        </section>
  )
}

export default NotFound