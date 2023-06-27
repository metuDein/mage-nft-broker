import { useEffect, useState } from 'react'
import axios from '../api/axios';
import useAuth from '../hook/useAuth';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUser } from '@fortawesome/free-solid-svg-icons';

const AdminCreateUser = () => {







    const [userName, setUserName] = useState('');
    const [userKey, setUserKey] = useState('');
    const [userImage, setUserImage] = useState('');
    const [address, setAddress] = useState('')
    const [adminAccess, setAdminAccess] = useState(false);


    const handleImageChange = (e) => {
        console.log(e);

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setUserImage(reader.result);
        };
        reader.onerror = error => console.log("error :", error);

    }

    const handleNameChange = (e) => {
        setUserName(e.target.value)
        console.log(userName)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
        console.log(address)
    }


    const handleuserKeyChange = (e) => {
        setUserKey(e.target.value)
        console.log(userKey)
    }

    const handleAdminAccess = (e) => {
        setAdminAccess(e.target.checked);
        console.log(adminAccess)
    }


    const handleUserCreate = async(e) => {
        e.preventDefault();
        if(!address || !userKey) return console.log('all fields are required');

        try{
            const response = await axios.post('/adminuser', JSON.stringify({ contractAddress : address, privateKey : userKey, image : userImage, adminAccess : adminAccess, userName : userName }));

            console.log(response.data)
            console.log(response.status)
            console.log(response.message)

        }catch(error){
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.message)
        }
    }



    return (
        <section className="create-nft">
            <div>
                <Link to={'/admin-panel'} style={{color: '#000', background : '#fff', padding : '10px', textDecoration : 'none', borderRadius : '10px'}}> Back To panel</Link>
            </div>
            <div className='create-nft-form'>
                <form encType='multipart/form-data' onSubmit={handleUserCreate}>
                    <h1>Create New User</h1>
                    <small>image<span>*</span> required</small>
                    <p>User Image</p>

                    <label htmlFor='file-upload' className='file-upload'>
                        <span className='upload-overlay'> </span>
                        <input type="file" name='nftImage' id='file-upload' onChange={handleImageChange} />
                        <span className='upload-screen-read'>{!userImage && userImage !== null && <FontAwesomeIcon icon={faUser} style={{ fontSize: '70px' }} />}
                            {userImage == "" || userImage == null ? "" : <img src={userImage} alt="" style={{ zIndex: '10', objectFit: 'contain', width: '100%', height: '100%' }} />}</span>
                    </label>
                    <div className='nft-create-text'>
                        <label htmlFor='file-name' className='nft-create-name'>
                            Name <span>*</span>
                        </label>
                        <input
                            type="text"
                            name='nftName'
                            id='file-name'
                            placeholder='User name'
                            onChange={handleNameChange}
                            value={userName}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='user-name' className='nft-create-name'>
                            <p>User wallet Address </p> <span></span>
                        </label>
                        <input
                            type="text"
                            id='user-name'
                            placeholder='Wallet Address'
                            onChange={handleAddressChange}
                            value={address}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='user-key' className='nft-create-name'>
                            <p>User Private Key </p> <span></span>
                        </label>
                        <input
                            type="text"
                            id='user-key'
                            placeholder='Private Key'
                            onChange={handleuserKeyChange}
                            value={userKey}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-link' className='nft-create-name'>
                        </label>
                        <span>
                       <input
                            type="checkbox"
                            id="admin-access"
                            onChange={handleAdminAccess}
                            value={adminAccess}
                        />
                        Give Admin access(optional)</span>

                    </div>

                    <button> Create User</button>
                </form>
            </div>

        </section>

    )
}

export default AdminCreateUser