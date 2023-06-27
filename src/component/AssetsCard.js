import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';



const AssetsCard = ({assetsData}) => {
    const {getImgUrl} = useContext(DataContext);

    const assets = (
        assetsData.map((item, index) => (
            <Link to={`/itempages/${item._id}`} style={{color : '#000', textDecoration : 'none'}}>
            <article className='collection--card' key={index}>
                        <img src={getImgUrl(item.image)} alt="nft card img" />
                        <h2>{`#${item.token_id}`}</h2>
                        <div className='collection--desc'>
                            <h3>0.445 ETH</h3>
                            <h3>$87162</h3>
                        </div>
                        <div className='collection--purchase--bar'>
                            <button>buy now</button>
                            <span>
                                <FontAwesomeIcon onClick={() => console.log('clicked')} icon={faCartPlus} />
                            </span>
                        </div>
                    </article>

                </Link>
        ))
    )
  return assets
}

export default AssetsCard