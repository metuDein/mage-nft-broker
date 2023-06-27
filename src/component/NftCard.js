
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FaCheckCircle, FaEthereum } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';



const NftCard = ({ data }) => {
  const auth = useAuth()
  const {user} = auth

  const { setAddress, setNFTs, getImgUrl,  addToCart,  cartItemQuantity} = useContext(DataContext);

  const refreshCollectionData = (data) => {
    setAddress(data)
    setNFTs([])
  }


  const handleCartWork = (id, userAddress, quantity, price, image, name, username) => {


    
    if(!auth?.user) return window.alert('please login')
    

    console.log(id, userAddress, quantity, price, image, name, username);

    addToCart(id, userAddress, quantity, price, image, name, username)
}


  const getNft = (
    data.slice().reverse().map((item, index) => (
      <article className='collection--card'  key={index} style={{color : '#fff', background : '#fff'}} >
      <Link to={`/itempage/${item._id}`} style={{color : '#000', textDecoration : 'none'}}>
              <img src={getImgUrl(item.image)} alt="nft card img" />
              <h2>{`${item.name}`}</h2>
              <span className='category'> {(item.categories).toUpperCase()} </span> 
              <div className='collection--desc'>
                  <h3 style={{textAlign : 'center'}}>{item.price} <FaEthereum /></h3>
                  

              </div>
      </Link>
              <div className='collection--purchase--bar'>
                  <button>buy now</button>
                  <span>
                      <FontAwesomeIcon onClick={() => handleCartWork(item._id, auth?.user?.contractAddress, cartItemQuantity, item.price, item.image, item.name, auth?.user?.userName)} icon={faCartPlus} />
                      {/* (id, userAddress, quantity, price, image, name, username) */}
                  </span>
              </div>
          </article>
    ))
  )



  return (
    <section className='nft--tabs'>
      {getNft}
      {/* <Nfts data={data} /> */}
    </section>
  )
}

export default NftCard


{/* <Link to={`/itempage/${item._id}`}  style={{width : '100%', color : '#000', textDecoration : 'none'}}>
        <article key={index} className='nfts--card' >
          <img src={getImgUrl(item.image)} alt='nft icons' />
          <div className='nft--desc'>
            <h3 className='nft--title'>  {`${(item.name).length > 15 ? `${(item.name).substring(0, 10)}...` : item.name}`} <FaCheckCircle style={{ color: '#547dc4', marginLeft: '5px', fontSize: '13px' }} /> </h3>
            <div className='nft--price'>
              <h3>{item.price} <FaEthereum /></h3>
            </div>
          <div className='collection--purchase--bar'>
                            <button>buy now</button>
                            <span>
                                <FontAwesomeIcon onClick={() => handleCartWork(item._id, user.contractAddress, cartItemQuantity, item.price, item.image, item.name)} icon={faCartPlus} />
                            </span>
                        </div>
          </div>
        </article>
      </Link> */}