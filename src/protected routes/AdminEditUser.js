import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';
import axios from '../api/axios';
import DataContext from '../context/DataContext';
import { FaEthereum } from 'react-icons/fa';



const AdminEditUser = () => {
    const { id } = useParams()


    const { isLoading, setIsLoading, allAssets, getImgUrl, allUsers } = useContext(DataContext)

    const user = allUsers.find(user => user._id === id);
    console.log(user);

    const userAssets = allAssets.filter(asset => asset.OwnerName === user.userName || asset.token_address === user.contractAddress);



    const [updateUserName, setUpdateUserName] = useState(user?.userName);
    const [updateUserEmail, setUpdateUserEmail] = useState(user?.userEmail);
    const [updateBalance, setUpdateBalance] = useState(user?.balance);
    const [updateVerified, setUpdateVerified] = useState(user?.verified);
    const [updateAdminAccess, setUpdateAdminAccess] = useState('');
    const [updateUserAddress, setUpdateUserAddress] = useState(user.contractAddress);
    const [updateUserPassword, setUpdateUserPassword] = useState(user.password);
    const [updateUserKey, setUpdateUserKey] = useState(user.privateKey);
    const [updateTransactionAccess, setUpdateTransactionAccess] = useState(user?.transactable);






    const assets = (
        userAssets.map((asset, index) => (
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



    const handleUserUpdate = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.put('/adminusers', JSON.stringify({ id: id, userName: updateUserName, balance: updateBalance, verified: updateVerified, adminAccess: updateAdminAccess, transactable: updateTransactionAccess, email : updateUserEmail, password : updateUserPassword }));
        console.log(response.data)
        console.log(response.status)
        if(response.status === 200) return alert('update successful')
        } catch (error) {
            console.log(error.response.data)
            console.log(error.response.status)
        }
    }
    const handleUserDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                '/admindeleteusers',
                JSON.stringify({ id: id }),
            )
            console.log(response.data)
            console.log(response.status)
            if(response.status === 200) return alert('user deleted')

        } catch (error) {
            console.log(error.response.data)
            console.log(error.response.status)
        }
    }




    return (
        <section className="create-nft">
            <div>

                <Link to={'/admin-panel'} style={{ color: '#000', background: '#fff', padding: '10px', textDecoration: 'none', borderRadius: '10px' }}> Back To panel</Link>
            </div>
            {isLoading && <p style={{ color: '#fff' }}> LOADING...</p>}
            <div className='create-nft-form'>
                <form onSubmit={handleUserUpdate}>
                    <h1>Edit User</h1>

                    <div className='nft-create-text'>
                        <label htmlFor='user-name' className='nft-create-name'>
                            Name <span>current name : {user.userName} {!user.userName && "no name"} </span>
                        </label>
                        <input
                            type="text"
                            id='user-name'
                            placeholder='change user name'
                            value={updateUserName}
                            onChange={e => setUpdateUserName(e.target.value)}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='user-name' className='nft-create-name'>
                            Name <span>current name : {user.userName} {!user.userName && "no name"} </span>
                        </label>
                        <input
                            type="text"
                            id='user-name'
                            placeholder='change user name'
                            value={updateUserEmail}
                            onChange={e => setUpdateUserEmail(e.target.value)}
                        />
                    </div>

                    <div className='nft-create-text'>
                        <label htmlFor='user-balance' className='nft-create-name'>
                            Balance <span> <FaEthereum /> {user.balance}</span>
                        </label>
                        <input
                            type="text"
                            id='user-balance'
                            placeholder='change user balance'
                            value={updateBalance}
                            onChange={e => setUpdateBalance(e.target.value)}
                        />
                    </div>
                    <div className='nft-create-text verification'>
                        <label htmlFor='user-verified' className='nft-create-name'>
                            verified <span>{user.verified && 'user verified'} {!user.verified && 'user not verified'} </span>
                            <input
                                type="checkbox"
                                id='user-verified'
                                placeholder='change user verified'
                                onChange={e => setUpdateVerified(e.target.checked)}
                                checked={updateVerified}
                            />
                            <div style={{ background: `${updateVerified ? 'green' : '#fff'}` }} className='check-visulalize'>
                                <span class={updateVerified ? 'active-check-span' : ''}></span>
                            </div>
                        </label>
                    </div>
                    <div className='nft-create-text verification'>
                        <label htmlFor='user-admin' className='nft-create-name'>
                            Access <span>{user?.roles?.Admin && user?.roles?.Admin === 5150 && 'user has admin access'}  </span>
                        </label>
                        <input
                            type="text"
                            id='user-balance'
                            placeholder={!user?.roles?.Admin && 'user has no admin access'}
                            value={updateAdminAccess}
                            onChange={e => setUpdateAdminAccess(e.target.value)}
                        />
                    </div>
                    <div className='nft-create-text verification'>
                        <label htmlFor='user-transactable' className='nft-create-name'>
                            <span>{user.transactable && 'user can buy'} {!user.transactable && 'user can not buy'} </span>
                            <input
                                type="checkbox"
                                id='user-transactable'
                                placeholder='change user verified'
                                onChange={e => setUpdateTransactionAccess(e.target.checked)}
                                value={updateTransactionAccess}
                            />
                            <div style={{ background: `${updateTransactionAccess ? 'green' : '#fff'}` }} className='check-visulalize'>
                                <span class={updateTransactionAccess ? 'active-check-span' : ''}></span>
                            </div>
                        </label>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Private Key <span></span>
                        </label>
                        <input
                            type="text"
                            id='file-price'
                            value={updateUserKey}
                            readOnly
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                             password <span></span>
                        </label>
                        <input
                            type="text"
                            id='file-price'
                            value={updateUserPassword}
                            readOnly
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                             wallet Address <span></span>
                        </label>
                        <input
                            type="text"
                            id='file-price'
                            value={updateUserAddress}
                            readOnly
                        />
                    </div>

                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Assets <span></span>
                        </label>
                        <div className='related--items'>
                            {userAssets?.length && assets}
                            {!userAssets?.length && <p>no assets for this user</p>}


                        </div>
                    </div>




                    <button> Save Changes </button>
                    <button style={{ marginLeft: '10px' }} onClick={handleUserDelete}> Delete User</button>
                </form>
            </div>

        </section>
    )
}

export default AdminEditUser