import {useContext} from 'react';
import DataContext from '../context/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { faTriangleExclamation, faRotate, faCircleCheck } from '@fortawesome/free-solid-svg-icons';



const BuyItem = ({image, quantity, price, handleBuyProcess, buyTab, setBuyTab, Total, transactionStatus})=> {

const {getImgUrl} =  useContext(DataContext)


const toggleBuyTab = () => {
  setBuyTab(old => !old)
}


  return (
    <div className={`buy--tab ${buyTab ? 'active' : ''}`}>
                <div className='buy-details'>
                    <FontAwesomeIcon  onClick={toggleBuyTab} icon={faCircleXmark} style={{ color: "#000000", position: 'absolute', right: '-3px', top: '-3px', fontSize: '28px', cursor: 'pointer' }} />
                    <article className='buy--item--adjust' style={{ display: 'flex' }}>
                        <img src={getImgUrl(image)} alt="" />
                        <div className='pay--now'>
                            <h1 className='buy--itm'> <span>Name :</span> {}</h1>
                            <h1 className='buy--itm'> <span>Price :</span> {} <FaEthereum /> </h1>
                            <h2 className='buy--quantity'><span>Quantity :</span> <input type="number"  className='buy--tab--quantity' /></h2>
                            <h3 className='buy--fees'><span>Total :</span> {} <FaEthereum /></h3>
                            <button className='buy--btn' > Buy </button>
                        </div>
                    </article>

                    {transactionStatus === 500 && 
                    <article className='transaction-failed'>
                        <h1> Transaction Failed!</h1>
                        <span onClick={toggleBuyTab} style={{ margin: '30px 0' }}><FontAwesomeIcon  icon={faCircleXmark} style={{ color: "#cc0000", fontSize: '100px' }} /> </span>
                        <span > <Link to={'/support-request'} style={{ padding: '10px', borderRadius: '10px', background: '#000', color: '#fff', textDecoration: 'none' }}> <FontAwesomeIcon icon={faTriangleExclamation} style={{ marginRight: '5px' }} /> Report issue </Link> </span>
                    </article>}
                    {transactionStatus === null && 
                    <article className='transaction-failed'>
                        <h1> Transaction pending</h1>
                        <span style={{ margin: '30px 0' }}><FontAwesomeIcon icon={faRotate} style={{ fontSize: '100px' }} spin /></span>
                        <span > </span>
                    </article>}
                    {transactionStatus === 200 && 
                    <article className='transaction-failed'>
                        <h1> Transaction Successful!</h1>
                        <span style={{ margin: '30px 0' }}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "#2d9f40", fontSize: '100px' }} /></span>
                        <span > </span>
                    </article>}
                </div>
            </div>
  )
}

export default BuyItem