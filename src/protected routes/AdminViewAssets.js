import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from '../api/axios';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import { FaEthereum } from 'react-icons/fa';



const AdminViewAssets = () => {
    const {getImgUrl, allAssets, setAllAssets} = useContext(DataContext);



    const assetsCell = (
        allAssets.slice().reverse().map(asset => {
            return <tr className='cart--item--details admin-asset' key={asset._id}>
                 <div className='admin--assets'>
                    <Link to={`/admin-panel-edit-asset/${asset._id}`} style={{ textDecoration: 'none', background: "blue", color: '#fff', padding: '5px 30px', borderRadius: '5px' }}> Edit </Link>
                </div>
            <td className='cart--item--image'><img src={getImgUrl(asset.image)} alt="" /></td>
            <td>{asset.name}</td>
            <td> <FaEthereum />{asset.price}</td>
            
        </tr>
        })
    )



  return (
    <section className='adminusers--section'>
            
            <div>
                <span>Total Assets  : {allAssets.length} </span>
                <Link to={'/admin-panel'} style={{color: '#000', background : '#fff', padding : '10px', textDecoration : 'none', borderRadius : '10px'}}> Back To panel</Link>
            </div>

            <div className='collection-settings'>
                <h1 className='tab--select'> All Assets</h1>
               
            </div>

            <table className='cart--table'>
                <thead>
                    <th>image</th>
                    <th>Name</th>
                    <th>price</th>
                    
                </thead>
                <tbody>
                    {assetsCell}
                    
                </tbody>
            </table>
        </section>
  )
}

export default AdminViewAssets