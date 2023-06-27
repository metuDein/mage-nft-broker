import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from '../api/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import DataContext from '../context/DataContext';
import useAuth from '../hook/useAuth';

const UserEditAsset = () => {

    const { id } = useParams();
    const { getImgUrl,  allAssets, setAllAssets } = useContext(DataContext);

    // const thisAsset = myAssets.find( asset => asset._id === id);
    const navigate = useNavigate()
    const { auth } = useAuth()

    const [asset, setAsset] = useState([]);
    

    const aAsset = allAssets.find(asset => asset._id === id);
    // console.log(thisAsset);
    console.log(aAsset);

   

    const [assetName, setAssetName] = useState(aAsset.name);
    const [assetImage, setAssetImage] = useState(aAsset.image);
    const [assetPrice, setAssetPrice] = useState(aAsset.price);
    const [assetSupply, setAssetSupply] = useState(aAsset.block_number_minted);
    const [assetOwner, setAssetOwner] = useState(aAsset.OwnerName);
    const [assetNetwork, setAssetNetwork] = useState(aAsset.blockChain);
    const [assetDescription, setAssetDescription] = useState(aAsset.description);
    const [assetCategory, setAssetCategory] = useState(aAsset.categories);
    const [authLoading, setAuthLoading] = useState(false);




    const handleImageChange = (e) => {
        console.log(e);

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);


        reader.onload = () => {
            console.log(reader.result);
            setAssetImage(reader.result);
        };
        reader.onerror = error => {
            setAssetImage(aAsset.image)
            return console.log("error :", error)
        };

    }



    const handleNameChange = (e) => {
        setAssetName(e.target.value);
    }

    const handleOwnerChange = (e) => {
        setAssetOwner(e.target.value)
    }
    const handlePriceChange = (e) => {
        setAssetPrice(e.target.value);
    }
    const handleSupplyChange = (e) => {
        setAssetSupply(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setAssetDescription(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setAssetCategory(e.target.value);
    }
    const handleNetworkChange = (e) => {
        setAssetNetwork(e.target.value);
    }



    const handleAssetUpdate = async (e) => {

        e.preventDefault();

        if (!id) return window.alert('user asset id required');
        try{
            setAuthLoading(true)
        const response = await axios.put('/userassets', JSON.stringify({ id: id, desc : assetDescription, price: assetPrice, supply: assetSupply, category: assetCategory, image: assetImage, blockchain : assetNetwork}));

        console.log(response.data)
        console.log(response.status)
        console.log(response.message)
        if(response.status === 200) {
            setAuthLoading(false);

            setAllAssets(old => {
                const others = old.filter(item => item._id !== id);
                const allAsset = [...others, response.data.result];

                return allAsset;
            })
            
            window.alert('update successful');
        }
        
        if(response.status === 400) window.alert('update failed')
    }catch(error){
        console.log(error.response.status)
        console.log(error.response.message)
        window.alert('update failed')
    }



    }

    const handleAssetDelete = async (e) => {

        e.preventDefault();

        if (!id) return console.log('id required');

       try{
        setAuthLoading(true)
            const response = await axios.post('/userdeleteasset', JSON.stringify({ id : id }))
            console.log(response.data);
            console.log(response.status);

            if (response.status === 200) {
                setAuthLoading(false);
                setAllAssets( old => {
                    const others = old.filter(item => item._id !== id);
                    return others
                })
                navigate('/user-profile')
                window.alert('item deleted');
            } else {
                window.alert('item failed to delete')
            }
        }catch(error){
            console.log(error.response.status)
            console.log(error.response.message)
            window.alert('item failed to delete')
        }
    }




    return (
        <section className="create-nft">
            {/* {isLoading && <p>Loading.....</p>} */}
            <div className='create-nft-form'>
                <form >
                    <h1>Edit Asset</h1>
                    <small>image<span>*</span> required</small>
                    <p>Asset image</p>

                    <label htmlFor='file-upload' className='file-upload'>
                        <span className='upload-overlay'> </span>
                        <input type="file" name='nftImage' id='file-upload' onChange={handleImageChange} />
                        <span className='upload-screen-read'>

                            <img src={getImgUrl(assetImage)} alt="" style={{ zIndex: '10', objectFit: 'contain', width: '100%', height: '100%' }} /></span>
                    </label>

                    <div className='nft-create-text'>
                        <label htmlFor='user-name' className='nft-create-name'>
                            <span>current name : <br /> {assetName} <br /> #{asset.token_id} </span>
                        </label>
                        <input
                            type="text"
                            id='user-name'
                            placeholder='change user name'
                            value={assetName}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='user-name' className='nft-create-name'>
                            <span>current owner : {assetOwner} </span>
                        </label>
                        <input
                            type="text"
                            id='user-name'
                            placeholder='change user name'
                            value={assetOwner}
                            onChange={handleOwnerChange}
                        />
                    </div>

                    <div className='nft-create-text'>
                        <label htmlFor='user-balance' className='nft-create-name'>
                            Price <br /> <span>current price : {assetPrice && assetPrice} {!assetPrice && 0}</span>
                        </label>
                        <input
                            type="text"
                            id='user-balance'
                            placeholder='change user balance'
                            value={assetPrice}
                            onChange={handlePriceChange}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='user-balance' className='nft-create-name'>
                            <br /> <span>current supply : <br /> {assetSupply} </span>
                        </label>
                        <input
                            type="text"
                            id='user-balance'
                            placeholder='change Asset supply'
                            value={assetSupply}
                            onChange={handleSupplyChange}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='user-balance' className='nft-create-name'>
                            <br /> <span>Change Description :  </span>
                        </label>
                        <textarea
                            rows={10}
                            cols={30}
                            id='user-balance'
                            placeholder='add description'
                            value={assetDescription}
                            onChange={handleDescriptionChange}
                        />
                    </div>


                    <div className='nft-create-text'>
                        <label htmlFor='file-categories' className='nft-create-desc'>
                            Categories
                        </label>
                        <select id='file-categories' placeholder='change Category' value={assetCategory} onChange={handleCategoryChange}>
                            <option key="">change Categories</option>
                            <option value="Ai art" >Ai Art</option>
                            <option value="NFTs" >NFTs</option>
                            <option value="Digital Art">Digital Art</option>
                        </select>
                        <label htmlFor='file-blockchain' className='nft-create-desc' >
                            Blockchain
                        </label>
                        <select id='file-blockchain' placeholder='select network' onChange={handleNetworkChange} value={assetNetwork}>
                            <option  >Select Blockchain</option>
                            <option value="Binance Smart Chain" >BNB Chain</option>
                            <option value="Ethereum">Ethereum</option>
                        </select>

                    </div>

                    {authLoading && <button onClick={e => e.preventDefault()}>  <FontAwesomeIcon icon={faSpinner} spin style={{color: "#c7d2e5", fontSize : '18px'}} /> </button>}

                    {!authLoading && <>
                    <button onClick={handleAssetUpdate}> Save Changes </button>

<button style={{ marginLeft: '10px' }} onClick={handleAssetDelete}> Delete Asset</button>
                    </>}
                </form>
            </div>

        </section>
    )
}

export default UserEditAsset