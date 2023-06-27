
import { useEffect, useState, useContext } from "react";
import axios from '../api/axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderMinus } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../context/DataContext";
import { FaEthereum } from "react-icons/fa";





const Trending = () => {

    const { getImgUrl, isLoading, setIsLoading } = useContext(DataContext);
    const [trendingAssets, setTrendingAssets] = useState([])

    useEffect(() => {

        const fetchAssets = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get('/trending');
                console.log(response.data);
                console.log(response.status);
                setTrendingAssets(response.data.trendingAssets)

            } catch (error) {
                console.log(error.response.status);
                console.log(error.response.message);
            } finally {
                setIsLoading(false)
            }
        }

        fetchAssets();
    }, [])

    // useEffect(() => {


    //     axios.get(`/trendingassets`)
    //       .then(response => {
    //         setTrendingAssets(response.data);
    //         console.log(trendingAssets)
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   }, []);

    const item = (
        Object.keys(trendingAssets).slice().reverse().map( item => {
            return <tr key={trendingAssets[item]._id}>
            <td><img src={getImgUrl(trendingAssets[item].image)} /> </td>
            <td>{trendingAssets[item].name} </td>
            <td> <FaEthereum /> {trendingAssets[item].price}</td>
        </tr>
        })
    )

    return (
        <section className='adminusers--section trending'>
            {!trendingAssets.length &&
                <div className="not-trending--assets">

                    <FontAwesomeIcon icon={faFolderMinus} style={{ color: '#fff', fontSize: '60px' }} />
                </div>
            }

            {trendingAssets.length !== 0 && 
            <table className='cart--table'>
            <thead>
                <th>image</th>
                <th>Name</th>
                <th>price</th>
                
            </thead>
            <tbody>
                {item}
                
            </tbody>
        </table>
            }
        </section>
    )
}

export default Trending