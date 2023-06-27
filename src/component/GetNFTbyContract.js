import { useState } from "react"
import axios from '../api/axios'
import { useContext } from "react";
import DataContext from "../context/DataContext";




const GetNFTbyContract = () => {
    const { address, setAddress, chain, setChain, cursor, setCursor, NFTs, setNFTs } = useContext(DataContext)

    // const [address, setAddress] = useState("");
    // const [chain, setChain] = useState("0x1");
    // const [cursor, setCursor] = useState(null);
    // const [NFTs, setNFTs] = useState([]);

    function getImgUrl(metadata) {
        if (!metadata) return 'images/finalogo.png';

        let meta = JSON.parse(metadata);

        if (!meta.image) return 'images/finalogo.png';

        if (!meta.image.includes("ipfs://")) {
            return meta.image;
        } else {
            return "https://ipfs.io/ipfs/" + meta.image.substring(7);
        }
    }

    async function fetchNFTs() {
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
        setNFTs(n.concat(res.data.result.result));
        setCursor(res.data.result.cursor);
        console.log(res);

        try {
            const assets = NFTs;
            const response = await axios.post('/assetsget', JSON.stringify({ assets }), {
                headers: {
                    "Content-Type": 'application/json'
                }
            })
        } catch (error) {
            console.log(error.response.status);
            console.log(error.response.message);
        }
    }


    function addressChange(e) {
        setAddress(e.target.value);
        setCursor(null);
        setNFTs([]);
    }

    function chainChange(e) {
        setChain(e.target.value);
        setCursor(null);
        setNFTs([]);
    }



    const createAsset = async () => {
        const assets = NFTs;
        await axios.post('/assetsget', JSON.stringify({ assets }), {
            headers: {
                "Content-Type": 'application/json'
            }
        })
    }



    const loadMore = () => {
        createAsset()
        fetchNFTs()
    }
    return (
        <>
            <img src={'images/finallogo.png'} alt="moralis" className="moralis" />
            <div className="App">
                <div style={{ fontSize: "23px", fontWeight: "700" }}>
                    Get NFTs by contract
                </div>
                <button className="bu" onClick={fetchNFTs}>
                    Get NFT's
                </button>
                <div className="inputs">
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "80px" }}>Contract:</div>
                        <input
                            className="input"
                            value={address}
                            onChange={(e) => addressChange(e)}
                        ></input>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "80px" }}>Chain:</div>
                        <select className="input" onChange={(e) => chainChange(e)}>
                            <option value="0x1">Ethereum</option>
                            <option value="0x38">Bsc</option>
                            <option value="0x89">Polygon</option>
                            <option value="0xa86a">Avalanche</option>
                        </select>
                    </div>
                </div>
                {NFTs.length > 0 && (
                    <>
                        <div className="results">
                            {NFTs?.map((e, i) => {
                                return (
                                    <>
                                        <div style={{ width: "70px" }}>
                                            <img
                                                loading="lazy"
                                                width={70}
                                                src={getImgUrl(e.metadata)}
                                                alt={`${i}image`}
                                                style={{ borderRadius: "5px", marginTop: "10px" }}
                                            />
                                            <div key={i} style={{ fontSize: "10px" }}>
                                                {`${e.name}\n${e.token_id}`}
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        {cursor && (
                            <>
                                <button className="bu" onClick={loadMore}>
                                    Load More
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
}





export default GetNFTbyContract;







 // for (let i = 0; i < NFTs.length; i++) {
        //     let { data } = await axios.get('/assets')
        //     const currentData = data.assets
        //     console.log(currentData);

        //     const duplicate = currentData.find(asset => NFTs[i].token_id === asset.token_id);

        //     if (!duplicate) {
        //         const newAssets = JSON.stringify({
        //             token_address: NFTs[i].token_address,
        //             token_id: NFTs[i].token_id,
        //             block_number_minted: NFTs[i].block_number_minted,
        //             name: NFTs[i].name,
        //             image: NFTs[i].metadata.image
        //         })
        //         const response = await axios.post('/assets',
        //             newAssets,
        //             {
        //                 headers: { "Content-Type": 'application/json', },
        //                 withCredentials: true
        //             }
        //         )

        //     } else {
        //         continue
            // }
