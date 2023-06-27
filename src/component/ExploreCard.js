import React from 'react'
import DataContext from '../context/DataContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../hook/useAuth';
import { FaEthereum } from 'react-icons/fa';


const ExploreCard = ({displayData}) => {

    const navigate = useNavigate();

    const {getImgUrl, addToCart, cartItemQuantity, setCartItemQuantity} = useContext(DataContext);
    const {auth} = useAuth()



    const handleCartWork = (id, userAddress, quantity, price, image, name, username) => {


        if(!auth?.user) return navigate('/walletlogin')

        console.log(id, userAddress, quantity, price, image, name, username);

        addToCart(id, userAddress, quantity, price, image, name, username)
    }
    


    const assets = (
        displayData.slice().reverse().map((item, index) => (
            <article className='collection--card'  key={index} style={{color : '#fff', background : '#fff'}} >
                <Link to={`/itempage/${item._id}`} style={{color : '#000', textDecoration : 'none'}}>
                        <img src={getImgUrl(item.image)} alt="nft card img" />
                        <h2>{`${item.name}`}</h2>
                        <div className='collection--desc'>
                            <h3 style={{textAlign : 'center'}}>{item.price} <FaEthereum /> </h3>
                            <span className='category'> {(item.categories).toUpperCase()} </span> 
                        </div>
                </Link>
                        <div className='collection--purchase--bar'>
                            
                            <button> <Link to={`/itempage/${item._id}`}> Buy Now</Link></button> 
                            <span>
                                <FontAwesomeIcon onClick={() => handleCartWork(item._id, auth?.user?.contractAddress, cartItemQuantity, item.price, item.image, item.name, auth?.user?.userName)} icon={faCartPlus} />
                            </span>
                        </div>
                    </article>

        ))
    )

  return assets
}

export default ExploreCard