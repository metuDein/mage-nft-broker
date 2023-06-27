import { faShoppingCart, faCircleXmark, faTriangleExclamation, faCircleCheck, faHeart, faCartPlus, faRotate, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState, useContext, useRef } from 'react'
import { FaCheckCircle, FaEthereum } from 'react-icons/fa'
import { Link, useParams, Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import DataContext from '../context/DataContext';
import useAuth from '../hook/useAuth';
import BuyItem from './BuyItem';


const ItemPage = () => {

    const { getImgUrl, isLoading, setIsLoading, buyItem, setBuyItem, buyItemImage, setBuyItemImage, addToCart, allAssets,  allUsers} = useContext(DataContext)

    const { id } = useParams()

    let  asset = allAssets.find(asset => asset._id === id);

    const buyRef = useRef(null);

    const assetOwner = allUsers.find(user => user.userName === asset.OwnerName); 


    const { auth } = useAuth();
    const {user} = auth
    const location = useLocation()
    const navigate = useNavigate()


    const [assetToBuy, setAssetTobuy] = useState({});
    const [buyTab, setBuyTab] = useState(false);
    const [buyItemQuantity, setBuyItemQuantity] = useState(1);
    const [transactionStatus, setTransactionStatus] = useState(undefined);
    const [buyItemPrice, setBuyItemPrice] = useState(asset?.price)
    const [Total, setTotal] = useState(1);
    const [errMsg, setErrMsg] = useState('');



    const [assetToBuyName, setAssetToBuyName] = useState(assetToBuy)
    const [assetToBuyImage, setAssetTobuyImage] = useState(null)
    const [assetToBuyDescription, setAssetTobuyDescription] = useState(null)

    useEffect(() => {

        setTotal(buyItemPrice * buyItemQuantity)

    }, [buyItemQuantity])

    useEffect(() => {
       
        fetchAsset();

    }, [id])

    const fetchAsset = async() => {
        try {
            setIsLoading(true);
            // Perform API call or fetch data based on the ID
            const response = await axios.get(`/getallassets/${id}`);
            const {data} = response
            asset = data.asset
          } catch (error) {
            console.error('Error fetching data:', error);
          }finally{
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
          }
    }



    const handleBuy = () => {
        setBuyTab(true);

        setTimeout(() => {
            buyRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 1500);


    }

    const toggleBuyTab = () => {
        setBuyTab(old => !old)
    }

    const handleQuantityChange = (e) => {
        let inputValue = parseInt(e.target.value);

        // Check if inputValue is less than zero
        if (inputValue < 0) {
            inputValue = 0; // Set value to zero if it's less than zero
        }

        setBuyItemQuantity(inputValue);

    }
    const handleBuyProcess = async () => {
        setTransactionStatus(null);

        if (!auth.user) return navigate('/walletlogin')              //<Navigate to={'/walletlogin'} state={{from : location}} replace/>

        if (auth.user.balance < Total && auth.user.balance  === 0 ) {
            setErrMsg('balance is too low to complete this purchase')
            setTransactionStatus(500);
            return
        }

        if (!auth?.user?.transactable) {
            setErrMsg('Transaction error...our system was unable to complete this transaction due to a possible fault from the seller\'s end. Not to worry report this issue to our support team and they\'ll resolve this problem');
            setTransactionStatus(500)
            return
        }

       

        try {
            const response = await axios.post('/purchase', JSON.stringify({ itemName: buyItem, quantity: buyItemQuantity, itemId: assetToBuy._id, buyerAddress: auth.user.contractAddress, total : Total}))
            console.log(response.data)
            console.log(response.status)
            console.log(response.message)
            if (response.status === 200) setTransactionStatus(200)
        } catch (error) {
            console.log(error.response.data)
            console.log(error.response.message)
            console.log(error.response.status);
            setTransactionStatus(500);
        }

        setTimeout(() => {
            setBuyTab(false)
        }, 3000);



    }
    const handleTabClose = () => {
        setTransactionStatus(undefined)
        toggleBuyTab()
    }

    const handleCartWork = (id, userAddress, quantity, price, image, name, username ) => {


        if(!auth?.user) return navigate('/walletlogin')

        addToCart(id, userAddress, quantity, price, image, name, username)
    }


    // () => handleCartWork(item._id, user.contractAddress, cartItemQuantity, item.price, item.image, item.name)

    const relatedItems = allAssets.filter( item => item.categories === asset.categories);

    const related = (
        relatedItems.map( (item, index) => (
            <div className='related--card' onClick={() => navigate(`/itempage/${item._id}`)}>
                            <img src={getImgUrl(item.image)} alt="" />
                            <div className='item-page-related'>
                                <p> {item.name} </p>
                                <p>{item.price} <FaEthereum/> ETH</p>
                                <span className='category'> {(item.categories).toUpperCase()} </span> 
                                <div className='related-purchase-bar'>
                                    <button>Buy now</button>
                                    <span> <FontAwesomeIcon icon={faShoppingCart} /></span>
                                </div>
                            </div>
                        </div>
        ))
    )


    return (
        <section className='item--page'>
            {isLoading && <div className='loading--screen'>
          <FontAwesomeIcon icon={faSpinner} spin style={{color: "#c7d2e5", fontSize : '100px'}} />
          </div>}
            
             <div className={`buy--tab ${buyTab ? 'active' : ''}`} ref={buyRef}>
                <div className='buy-details'>
                    <FontAwesomeIcon onClick={handleTabClose} icon={faCircleXmark} style={{ color: "#000000", position: 'absolute', right: '-3px', top: '-3px', fontSize: '28px', cursor: 'pointer' }} />
                    <article className='buy--item--adjust' style={{ display: 'flex' }}>
                        <img src={getImgUrl(asset?.image)} alt="" />
                        <div className='pay--now'>
                            <h1 className='buy--itm'> <span>Name :</span> {asset?.name}</h1>
                            <h1 className='buy--itm'> <span>Price :</span> {asset?.price} <FaEthereum /> </h1>
                            <h2 className='buy--quantity'><span>Quantity :</span> <input type="number" value={buyItemQuantity} onChange={handleQuantityChange} className='buy--tab--quantity' /></h2>
                            <h3 className='buy--fees'><span>Total :</span> {Total} <FaEthereum /></h3>
                            <button className='buy--btn' onClick={handleBuyProcess}> Buy </button>
                        </div>
                    </article>

                    {transactionStatus === 500 && <article className='transaction-failed'>
                        <h1> Transaction Failed!</h1>
                        { errMsg && errMsg !== '' && <p> {errMsg} </p>}
                        <span style={{ margin: '30px 0' }}><FontAwesomeIcon icon={faCircleXmark} style={{ color: "#cc0000", fontSize: '100px' }} /> </span>
                        <span > <Link to={'/support-request'} style={{ padding: '10px', borderRadius: '10px', background: '#000', color: '#fff', textDecoration: 'none' }}> <FontAwesomeIcon icon={faTriangleExclamation} style={{ marginRight: '5px' }} /> Report issue </Link> </span>
                    </article>}
                    {transactionStatus === null && <article className='transaction-failed'>
                        <h1> Transaction pending</h1>
                        <span style={{ margin: '30px 0' }}><FontAwesomeIcon icon={faRotate} style={{ fontSize: '100px' }} spin /></span>
                        <span > </span>
                    </article>}
                    {transactionStatus === 200 && <article className='transaction-failed'>
                        <h1> Transaction Successful!</h1>
                        <span style={{ margin: '30px 0' }}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2d9f40", fontSize: '100px' }} /></span>
                        <span > </span>
                    </article>}
                </div>
            </div>
            {!isLoading && <div className='item-details'>
                <div className='item-details-row-1'>
                    {/* <div className='item--actions--tab'>
                        <span><FaEthereum style={{ color: "#5b5f67", }} /></span>
                        <span><FontAwesomeIcon icon={faHeart} /></span>
                    </div> */}
                    <img src={getImgUrl(asset.image)} alt="" />
                    <div>
                        <h3>Description</h3>
                        <p>
                            <h4>{asset.name}  {assetOwner?.verified && <FaCheckCircle style={{ color: '#547dc4', marginLeft: '2px', marginTop: '2px', fontSize: '13px', background: '#fff', borderRadius: '50%' }} />}</h4>
                            {asset.description !== "" && asset.description}
                            {asset.description === "" && `Owned by ${asset.name}`}
                        </p>
                    </div>
                </div>
                <div className='item-details-row-2'>
                    <h3 className='company--title'>#{asset.name} {assetOwner?.verified && <FaCheckCircle style={{ color: '#547dc4', marginLeft: '2px', marginTop: '2px', fontSize: '13px', background: '#fff', borderRadius: '50%' }} />}</h3>
                    <h1 className='name--title'>#{asset.categories} </h1>
                    <div>
                        <small>current price</small>
                        <h1 className='item--price-title'>{asset.price} <FaEthereum /> ETH <small></small></h1>
                        <button className='item--buy-btn' onClick={handleBuy}>Buy now</button>
                        <button className='item--cart-btn' onClick={() => handleCartWork(asset._id, asset?.user?.contractAddress,  buyItemQuantity, asset.price, asset.image, asset.name, auth?.user?.userName)} > <FontAwesomeIcon icon={faShoppingCart} /> </button>
                    </div>
                    <div className='related--items'>

                        
                        
                        {related}


                    </div>
                </div>
            </div>}
        </section>
    )
}

export default ItemPage