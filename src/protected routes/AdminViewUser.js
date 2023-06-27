import {Link, useParams} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from '../api/axios';
import DataContext from '../context/DataContext';
import { FaEthereum } from 'react-icons/fa';

const AdminViewUser = () => {
    const { allUsers, allAssets, getImgUrl } = useContext(DataContext);
  const { id } = useParams()

//   const [user, setUser] = useState({});

const user = allUsers.find(user => user._id === id);

 const userAssets = allAssets.filter( asset => asset.OwnerName === user.userName);


 const assets = (
        userAssets.map( (asset, index) => (
            <div className='related--card' key={index}>
                                <img src={getImgUrl(asset.image)} alt="" />
                                <div className='item-page-related'>
                                    <p>{asset.name} </p>
                                    <p>{asset.price} <FaEthereum /></p>
                                    <div className='related-purchase-bar'>
                                        <Link style={{ width: '100%', color: '#fff', textAlign: 'center', textDecoration: 'none' }}> Edit </Link>

                                    </div>
                                </div>
                            </div>
        ))
 )

  return (
    <section className="admin--user--page">
        <article className="admin--user--card">
            {
                <img src='https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png' width="140px" />

            }
            <div className="admin--card--user--details">
                <h1> User Details </h1>
                  <p> username  : {user.userName}</p>
                  <p>user Address : {user.contractAddress}</p>  
                  <p>Private Key : {user.privateKey} </p>  
                  <p>Balance : $ {user.balance} </p>  
                  <p> verified </p>
            </div>
            <div className="admin-user-action-button">
              <Link> Edit </Link>
              <button> Delete </button>
              <button>Message </button>
            </div>
        </article>

        <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Asssets <span></span>
                        </label>
                        <div className='related--items'>
                            {userAssets?.length && userAssets}
                            {!userAssets?.length && <p>no assets for this user</p>}

                            
                        </div>
                    </div>

    </section>
  )
}

export default AdminViewUser