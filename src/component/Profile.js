import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { faPencil, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FaEthereum, FaCheckCircle } from 'react-icons/fa'
import axios from '../api/axios';
import useAuth from '../hook/useAuth';
import UserTableCell from './UserTableCell';

import { faPenNib, faRocket } from "@fortawesome/free-solid-svg-icons"
import DataContext from '../context/DataContext'

const Profile = () => {
    const { setMyAssets, allAssets, getImgUrl} =  useContext(DataContext)
    const navigate = useNavigate();
    const { contractAddress } = useParams();
    
    const { auth, setAuth } = useAuth()
    const myAssets = allAssets.filter(asset => asset?.OwnerName == auth?.user?.userName);
    console.log(myAssets?.length);
    
    const userAddress =  auth?.user?.contractAddress;

    console.log(auth)

   

    // const [myAssets, setMyAssets] = useState([]);
    const [ownedAssets, setOwnedAssets] = useState([]);
    const [boughtAssets, setBoughtAssets] = useState([]);


    
    

    const setProfileImage = (image) => {
        if(!image || image == "") return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU";

        return image
    }






    const assetsCell = (
        myAssets.slice().reverse()?.map(asset => {
            return <tr className='cart--item--details admin-asset' key={asset._id}>
                 <div className='admin--assets'>
                    <Link to={`/user-edit-asset/${asset._id}`} style={{ textDecoration: 'none', background: "blue", color: '#fff', padding: '5px 30px', borderRadius: '5px' }}> Edit </Link>
                </div>
            <td className='cart--item--image'><img src={getImgUrl(asset.image)} alt="" /></td>
            <td><FaEthereum /> {asset.price} {!asset.price && 0}</td>
        </tr>
        })
    )




    return (
        <section className='profile-section'>
            <p> </p>
            <div className='profile--banner' style={{background :  auth.user.image ? `url(${auth.user.image})` : `url('https://i.seadn.io/gae/li-seuHsxhBZZVzRYDkhrg0c-E0Zo_4ak2kTCSPWP4Pfro0uB4_2GmnYlEJhvJzXTvctgGKR751nYd9dJm9oG6RCAryOYkPe37nRBA?auto=format&dpr=1&w=1000')`, backgroundPosition :'cover' }}>
                <img src={setProfileImage(auth.user.image)} alt="" className='profile-pic' />
                {/* <span><FontAwesomeIcon icon={faPencil} /></span> */}
            </div>
            <div className='profile-desc' style={{ marginLeft: '10px', textAlign : 'center'}}>
                <h1>{auth?.user?.userName && auth?.user?.userName}  {!auth?.user?.userName && <Link>Edit Profile</Link>} {auth.user?.verified && <FaCheckCircle style={{ color: '#547dc4', marginLeft: '5px', fontSize: '13px' }} />} </h1>
                <div className='profile--details'>
                    <span>{auth.user?.contractAddress ? (auth?.user?.contractAddress).substring(0, 14) + '...' : 'no address' } </span>
                    <span></span>
                </div>
            </div>


            <div className='user-collections'>
                {
                    myAssets?.length &&
                    <div className='collection-settings'>
                        <span className='tab--select active'> Created</span>
                        <span className='tab--select '>Collected</span>
                        <form>
                            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <input type="text" className='collection--search' />
                        </form>
                    </div>
                }


                {
                    !myAssets?.length &&
                    <div className='no--user--data active'>
                        <Link to={'/explore'} style={{ color: '#000', textDecoration: 'none', padding: '10px', background: "#fff", borderRadius: '5px', marginRight: '15px' }}> Explore <FontAwesomeIcon icon={faRocket} style={{ marginLeft: '5px' }} /> </Link>
                        <Link  to={'/user-create'} style={{ color: '#000', textDecoration: 'none', padding: '10px', background: "#fff", borderRadius: '5px', }}> Create <FontAwesomeIcon icon={faPenNib} style={{ marginLeft: '5px' }} /> </Link>
                    </div>
                }

                {myAssets?.length &&
                    <table className='cart--table'>
                    <thead>
                        <th>image</th>
                        <th>Price</th>
                        
                    </thead>
                    <tbody>
                        {assetsCell}
                        
                    </tbody>
                </table>
                }
            </div>
        </section>
    )
}

export default Profile