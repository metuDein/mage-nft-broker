import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faSpinner, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../hook/useAuth';
import axios from '../api/axios';
import { FaCheckCircle } from 'react-icons/fa';

const UserVerification = () => {

    const {auth, allMessages} = useAuth()

    const [authLoading, setAuthLoading] = useState(false);
    
    
    const contractAddress = auth.user.contractAddress;
    const sendername = auth.user.userName
    
    const myVerificationRequest = allMessages.find(message => message.send_from === sendername && message.title === 'user verification');

    const [userID,  setUserID] = useState('')

    const handleImageChange = (e) => {
        console.log(e);

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setUserID(reader.result);
        };
        reader.onerror = error => console.log("error :", error);

    }

    const handleVerfifySubmit = async(e) => {
        e.preventDefault()

        if(!userID || !contractAddress) return window.alert('please ensure your wallet is connected to your account at the user settings');

        try {
            setAuthLoading(true)
            const response = await axios.post('/supportrequest', JSON.stringify({ image : userID, title : 'user verification', body : 'user verication request',  senderAddress : contractAddress, sendername : sendername }));

            console.log(response.data)
            console.log(response.status)
            console.log(response.message)

            if(response.status === 200) {
                setAuthLoading(false)
                window.alert('request successful')
                return 
            };
        } catch (error) {
            console.log(error.response.data)
            console.log(error.response.message)
            console.log(error.response.status)
            window.alert("verification request failed");
            setAuthLoading(false)
        }
    }

    return (
        <section className="create-nft" style={{marginTop : '20px'}}>
            <div className='create-nft-form'>
                <form onSubmit={handleVerfifySubmit}>
                    <img  src="https://www.iconpacks.net/icons/2/free-verified-icon-3600-thumb.png" style={{background: '#fff', borderRadius :'10px',  width : '100%', height:'200px', objectFit :'contain' }} />
            <h1>Take Advantage of Tritons Verification System</h1>

                    <div style={{fontSize : '15px', textAlign :'left'}}>
                        Using TritonsPrime verification mark is important for boosting sales because it provides an added layer of trust and credibility to your products or services. When customers see the Tritons verification mark on your listings, they can be confident that your offerings have been vetted and verified by a reputable platform.

                        The verification mark signifies that your products or services meet certain quality standards and have undergone a verification process. This helps to instill confidence in potential buyers, as they know they are purchasing from a trustworthy source.

                        Having the Tritons verification mark can also differentiate your listings from others in a crowded marketplace. It sets you apart as a verified and reliable seller, which can attract more customers and potentially lead to increased sales.
                    </div>

                    { !myVerificationRequest && !auth?.user?.verified && <label htmlFor='file-upload' className='file-upload'>
                        <span className='upload-overlay'> </span>
                        <input type="file" name='userID' id='file-upload' onChange={handleImageChange} />
                        <span className='upload-screen-read'>{!userID && userID !== null && <FontAwesomeIcon icon={faIdCard} style={{ fontSize: '70px' }} />}
                            {userID == "" || userID == null ? "" : <img src={userID} alt="" style={{ zIndex: '10', objectFit: 'contain', width: '100%', height: '100%' }} />}</span>
                    </label>}
                    {
                        myVerificationRequest && !auth?.user?.verified && 
                        <article style={{textAlign : 'center'}}>
                            <h1> Your Verification Request is Pending</h1>
                            <FontAwesomeIcon icon={faSpinner} spin style={{fontSize : '100px'}} />
                        </article>
                    }
                    {
                            auth?.user?.verified && 
                        <article style={{textAlign : 'center'}}>
                            <h1> You are a verified user</h1>
                            <FaCheckCircle style={{fontSize : '100px'}} />
                        </article>
                    }
                    {!authLoading || !myVerificationRequest && <button> Submit </button>}
                    {authLoading && <button onClick={e => e.preventDefault()}>  <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#c7d2e5", fontSize: '18px' }} /> </button>}
                </form>
            </div>

        </section>
    )
}

export default UserVerification