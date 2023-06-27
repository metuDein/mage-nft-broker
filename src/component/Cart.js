import { useState, useEffect, useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import axios from '../api/axios';
import DataContext from '../context/DataContext';
import useAuth from '../hook/useAuth';
import { Link, useNavigate } from 'react-router-dom';

import { FaEthereum } from 'react-icons/fa';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


import { faTriangleExclamation, faRotate, faCircleCheck } from '@fortawesome/free-solid-svg-icons';





const Cart = () => {
    const buyRef = useRef();
    const navigate = useNavigate();

    const {auth, setAuth} = useAuth()

    const { getImgUrl, isLoading, setIsLoading, allcartitems, setAllcartitems} = useContext(DataContext);

    const checkoutRef = useRef(null);


    const myCartItems = allcartitems.filter(item => item.cartOwnerName
        === auth.user?.userName  && item.paid === false );

    console.log(myCartItems);

    const [cartItems, setCartItems] = useState([]);
    let cartlist;
    console.log(cartlist)
    const [toDelete, setToDelete] = useState(null);
    
    const [itemQuantity, setItemQuantity] = useState(1)
    const [transactionStatus, setTransactionStatus] = useState(undefined)
    const [initiate, setInitiate] = useState(false)
    const [errMsg, setErrMsg] = useState(null)

    const totalPrice = myCartItems.reduce((acc, product) => acc + product.price, 0);
    const [itemPrice, setItemPrice] = useState(cartItems.price)
    
    const { user } = auth;

    const handlePriceChange = (e) => {
        setItemQuantity(e.target.value);
        setItemPrice(itemQuantity * cartItem.price)
    }

    const scrolltocheckout = () => {
        // topRef.current.scrollIntoView({ behavior: 'smooth' });
        checkoutRef.current.scrollIntoView({ behavior: 'smooth' });
    }



    const startBuy = async () => {

        if(!myCartItems.length) return
        setInitiate(true);
        
        setTimeout(() => {
            scrolltocheckout();
            
        }, 700);



        setTransactionStatus(null);

        if (!auth.user) return navigate('/walletlogin')

        if (auth.user.balance < totalPrice) {
            console.log('balance is too low to complete this purchase')
            setTransactionStatus(500);
            setErrMsg('balance is too low to complete this purchase')
            return
        }
        console.log(auth)

        if (!auth?.user?.transactable) {
            console.log('transaction error')
            setTransactionStatus(500)
            setErrMsg('Transaction error...our system was unable to complete this transaction due to a possible fault from the seller\'s end. Not to worry report the issue to our support team and they\'ll resolve this problem')
            return
        }

        for (let i = 0; i < cartItems.length; i++) {
            console.log(cartItems[i].itemId);
           

            try {
                const response = await axios.post('/purchase', JSON.stringify({ id : cartItems[i]._id }))
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
        }
        setTimeout(() => {
            setInitiate(false)
        }, 3000);
        // try {
        //     const response = await axios.post('/purchase', JSON.stringify({ itemName: buyItem, quantity: buyItemQuantity, itemId: assetToBuy._id, buyerAddress: auth.user.contractAddress, Total : Total}))
        //     console.log(response.data)
        //     console.log(response.status)
        //     console.log(response.message)
        //     if (response.status === 200) setTransactionStatus(200)
        // } catch (error) {
        //     console.log(error.response.data)
        //     console.log(error.response.message)
        //     console.log(error.response.status);
        //     setTransactionStatus(500);
        // }

    }

    // const handleBuyProcess = async () => {
    //     setTransactionStatus(null);

    //     if (!auth.user) return navigate('/walletlogin')              //<Navigate to={'/walletlogin'} state={{from : location}} replace/>

    //     if (auth.user.balance < Total && auth.user.balance  === 0 ) {
    //         setErrMsg('balance is too low to complete this purchase')
    //         setTransactionStatus(500);
    //         return
    //     }

    //     if (!auth?.user?.transactable) {
    //         setErrMsg('Transaction error...our system was unable to complete this transaction due to a possible fault from the seller\'s end. Not to worry report the issue to our support team and they\'ll resolve this problem');
    //         setTransactionStatus(500)
    //         return
    //     }

       

    //     try {
    //         const response = await axios.post('/purchase', JSON.stringify({ itemName: buyItem, quantity: buyItemQuantity, itemId: assetToBuy._id, buyerAddress: auth.user.contractAddress, total : Total}))
    //         console.log(response.data)
    //         console.log(response.status)
    //         console.log(response.message)
    //         if (response.status === 200) setTransactionStatus(200)
    //     } catch (error) {
    //         console.log(error.response.data)
    //         console.log(error.response.message)
    //         console.log(error.response.status);
    //         setTransactionStatus(500);
    //     }

    //     setTimeout(() => {
    //         setBuyTab(false)
    //     }, 3000);



    // }

    const deleteItem = async(id) => {
        

        try {
            const response = await axios.post('/deletefromcart', JSON.stringify({id : id}));
            
            if(response.status === 200){
                const newAllCart = allcartitems.filter( item => item._id !== id);
                setAllcartitems(newAllCart)
                window.alert('item removed');
            }

        } catch (error) {
            console.log(error.response.message)
            console.log(error.response.data)
        }
    }



    const cartItem = (
        myCartItems.slice().reverse().map((item, index) => {
            return <tr className='cart--item--details' key={index}>
                <div className='admin--assets'>
                    <button onClick={() => deleteItem(item._id)}  style={{ textDecoration: 'none', background: "blue", color: '#fff', padding: '5px 30px', borderRadius: '5px' }}> Delete </button>
                </div>
                    <td className='cart--item--image'><img src={getImgUrl(item.itemImage)} alt="" /></td>
                    <td><input style={{ color: '#000' }} type="number" className='cart--item-quantity' value={item.quantity} onChange={e => setItemQuantity(e.target.value)} /></td>
                    <td><FaEthereum /> {item.price}</td>
                </tr>
            
        })
    )

    return (
        <section className='adminusers--section'>


            <FontAwesomeIcon icon={faArrowAltCircleLeft} />

            <div className='collection-settings'>
                <h1 className='tab--select'> My Cart</h1>

            </div>

            {!isLoading && <>
            <table className='cart--table'>
                <thead>
                    <th>image</th>
                    <th>quantity</th>
                    <th>total</th>
                </thead>
                <tbody>
                    {cartItem}
                    <tr className='cart--subtotal'>
                        <td className='sudtotal--1'>Subtotal</td>

                        <td className='sudtotal--2'> <FaEthereum /> {totalPrice} </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={startBuy} style={{ textDecoration: 'none', background: "blue", color: '#fff', padding: '5px 30px', borderRadius: '5px', outline : 'none', border : "none" }}> CheckOut </button></>}
            {initiate && <div className='checkout' ref={checkoutRef} >
                <FontAwesomeIcon style={{ position: 'absolute', right: "3px", top: '15px', fontSize: '29px' }} icon={faCircleXmark} onClick={() => setInitiate(old => !old)} />
                {transactionStatus === 500 && <article className='transaction-failed'>
                    <h1> Transaction Failed!</h1>
                    {errMsg && <p>{errMsg}</p>}
                    <span style={{ margin: '30px 0' }}><FontAwesomeIcon icon={faCircleXmark} style={{ color: "#cc0000", fontSize: '100px' }} /> </span>
                    <span > <Link to={'/support-request'} style={{ padding: '10px', borderRadius: '10px', background: '#000', color: '#fff', textDecoration: 'none' }}> <FontAwesomeIcon icon={faTriangleExclamation} style={{ marginRight: '5px' }} /> Report issue </Link> </span>
                </article>}
                {transactionStatus === null && <article className='transaction-failed'>
                    <h1> Transaction pending</h1>
                    <span style={{ margin: '30px 0', color: '' }}><FontAwesomeIcon icon={faRotate} style={{ fontSize: '100px', color: '#000' }} spin /></span>
                    <span > </span>
                </article>}
                {transactionStatus === 200 && <article className='transaction-failed'>
                    <h1> Transaction Successful!</h1>
                    <span style={{ margin: '30px 0' }}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2d9f40", fontSize: '100px' }} /></span>
                    <span > </span>
                </article>}
            </div>}
        </section>
    )
}

export default Cart