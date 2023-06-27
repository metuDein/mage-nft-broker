import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FaCheckCircle } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import DataContext from '../context/DataContext';
import { Link, useParams } from 'react-router-dom';
import axios from '../api/axios';
import AssetsCard from './AssetsCard';



const CollectionPage = () => {
    const { loadMore } = useContext(DataContext);

    const { contractAddress } = useParams()



    const [address, setAddress] = useState(contractAddress);
    const [chain, setChain] = useState("0x1");
    const [cursor, setCursor] = useState(null);
    const [NFTs, setNFTs] = useState([]);


    async function fetchNFTs() {
        try {
            let res;
            if (cursor) {
                res = await axios.get(`/getmoralisnft`, {
                    params: { address: address, chain: chain, cursor: cursor },
                });
            } else {
                res = await axios.get(`/getmoralisnft`, {
                    params: { address: address, chain: chain },
                });
            }
    
            console.log(res);
    
            let n = NFTs;
            let old = assetsData;
            setNFTs(n.concat(res.data.result.result));
            setCursor(res.data.result.cursor);
            console.log(res);
            
        } catch (error) {
            console.log(error.res.data)
            console.log(error.res.status)
        }
       
    }


    const createAsset =  async () => {
        const assets = NFTs;
        await axios.post('/assetsget', JSON.stringify({assets}), {
            headers : {
                "Content-Type" : 'application/json'
            }
        })
    }



    const displayMoreData = async () => {
        setAddress(contractAddress)
        await fetchNFTs();
        await createAsset()

        
    }

    const [collectonData, setCollectionData] = useState([]);
    const [assetsData, setAssetsData] = useState([]);



    console.log(contractAddress, typeof (contractAddress))

    useEffect(() => {

        const setContractAddress = () => {
            if (!address) {
                setAddress(contractAddress)
            }

        }



        const getCollection = async () => {
            try {
                const response = await axios.post('/getcollection', JSON.stringify({ contractAddress }))
                console.log(response.data);
                setCollectionData(response.data.collection)

            } catch (error) {
                console.log(error.response.data)
            }

        }
        const getAssets = async () => {
            try {
                const response = await axios.post('/getcollectionassets', JSON.stringify({ contractAddress }))
                console.log(response.data);
                setAssetsData(response.data.assets)

            } catch (error) {
                console.log(error.response.data)
            }

        }

        getAssets()
        getCollection()
        setContractAddress()

        console.log('i ran')
        console.log(assetsData);

    }, [contractAddress, setAssetsData])

    return (
        <section className='profile-section'>
            <div className='profile--banner' style={{ background: `url(${collectonData.logo})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', objectFit: 'contain' }}>
                <img src={`${collectonData.logo}`} style={{ objectFit: "cover" }} className='profile-pic' />
                <span>{collectonData && <FontAwesomeIcon icon={faPencil} />}</span>
            </div>
            <div className='profile-desc'>
                <h1 style={{ display: 'inline-block', width: '15%', textAlign: 'center' }}>{collectonData.name} {collectonData.verified && <FaCheckCircle style={{ color: '#547dc4', marginLeft: '5px', fontSize: '13px', background: '#fff', borderRadius: "50%" }} />} </h1>
                <div className='profile--details'>
                    {/* <span> <span style={{ marginLeft: '9px' }}>Joined-{new Date().getFullYear()}</span></span> */}
                    <span>{contractAddress}</span>
                </div>
            </div>
            <div className='collection-settings'>
                <span className='tab--select active'> Collection</span>
                <form>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    <input type="text" className='collection--search' />
                </form>
            </div>
            <div className='user-collections'>

                <div className='collection--sect'>
                    {
                        assetsData.length &&
                        <>
                            <AssetsCard assetsData={assetsData} />
                            <button onClick={displayMoreData}> Load more</button>
                        </>
                    }
                    {
                        !assetsData.length &&
                        <>
                            <button onClick={fetchNFTs}> view assets</button>
                            <button onClick={loadMore}> Load more</button>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default CollectionPage