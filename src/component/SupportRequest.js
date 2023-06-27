import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSpinner } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../hook/useAuth';
import axios from '../api/axios';

const SupportRequest = () => {  
    const {auth}  = useAuth()
    
    const [subject, setSubject] =  useState('')
    const [userName, setUserName] = useState(auth?.user?.userName || '')
    const [address, setAddress ] =  useState(auth?.user?.contractAddress || '');
    const [assetName, setAssetName] =  useState('')
    const [body, setBody] =  useState('')
    const [compliantImage, setCompliantImage] =  useState('');
    const [authLoading, setAuthLoading] = useState(false);


    const handleImageChange = (e) => {
        console.log(e);

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setCompliantImage(reader.result);
        };
        reader.onerror = error => console.log("error :", error);

    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleNameChange = (e) => {
        setUserName(e.target.value);
    }
    const handleTitleChange = (e) => {
        setSubject(e.target.value);
    }
    const handleAssetChange = (e) => {
        setAssetName(e.target.value);
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value);
    }

    const handleRequestSubmit = async (e) => {
        e.preventDefault();
        
        if(!subject || !address || !body || !userName) return window.alert('error one or more required fields are empty')
        try {
            setAuthLoading(true);
            const response = await axios.post('/supportrequest', JSON.stringify({ image : compliantImage, itemName : assetName, title : subject, body : body, senderAddress : address, sendername : userName}));

            console.log(response.data)
            console.log(response.status)

            if(response.status === 200){
                setAuthLoading(false)    
                return window.alert('request successful')
            }

        } catch (error) {
            console.log(error.response.status)
            console.log(error.response.message)
            window.alert('request failed')
            setAuthLoading(false)
        }
    }

  return (
    <section className="create-nft">
            <div className='create-nft-form'>
                <form onSubmit={handleRequestSubmit}>
                    <h1>Issue a Compliant </h1>
                    <small><span>*</span> required</small>
                    <div className='nft-create-text'>
                        <label htmlFor='file-name' className='nft-create-name'>
                            Account Name<span>*</span>
                        </label>
                        <input type="text" id='file-name' placeholder='User name' onChange={handleNameChange} value={userName}/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-owner' className='nft-create-name'>
                            Wallet ID<span>*</span>
                        </label>
                        <input type="text" id='file-owner' placeholder='Wallet Address' onChange={handleAddressChange} value={address}/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-title' className='nft-create-name'>
                            <p> subject</p>
                            
                        </label>
                        <input type="text" id='file-title' placeholder='subject' onChange={handleTitleChange} value={subject}/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-link' className='nft-create-name'>
                            <p>Asset name</p> <span> (optional)</span>
                            
                        </label>
                        <input type="text" id='file-link' placeholder='assets name' onChange={handleAssetChange} value={assetName}/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-description' className='nft-create-desc'>
                        <p>Description </p>
                        </label>
                        <textarea rows={'5'} cols={'30'} id='file-description' onChange={handleBodyChange} value={body} placeholder='please explain the issue'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-image' className='nft-create-desc'>
                        <p>Attachments (Optional)</p>

                        <small> Add File  {compliantImage && '1 image added'} <input type="file" style={{display : 'none'}}  id={'file-image'} onChange ={ handleImageChange} /> </small>
                        </label>
                        
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-blockchain' className='nft-create-desc'>
                            Blockchain
                        </label>
                        <select id='file-blockchain'>
                            <option className='network-options' >Select Asset Network</option>
                            <option value="BNB Chain" >BNB Chain</option>
                            <option value="Ethereum">Ethereum</option>
                        </select>

                    </div>

                    {authLoading && <button onClick={e =>e.preventDefault()}> <FontAwesomeIcon icon={faSpinner} spin style={{color: "#c7d2e5", fontSize : '18px'}} /> </button>}
                    {!authLoading && <button> Submit </button>}
                </form>
            </div>

        </section>
  )
}

export default SupportRequest