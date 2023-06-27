import React, { useEffect, useState, useContext, useRef} from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import axios from '../api/axios';
import DataContext from '../context/DataContext';
import ExploreCard from './ExploreCard';


const ExplorePage = () => {

  const {allAssets, searchResult} = useContext(DataContext)

  // const [allAssets, setAllAssets] = useState([]);
  const [allCollections, setAllCollections] = useState([]);

  const [searchWeb, setSearchWeb] = useState('');
  const [displayData, setDisplayData] = useState([]);

  const pageRef = useRef(null);

useEffect(() => {
  pageRef.current.scrollIntoView({ behavior: 'smooth' });
}, [])
 

 

  


  return (
    <section className='explore--page' ref={pageRef}>

      <ExploreCard displayData={searchResult}/>
              
    </section>
  )
}

export default ExplorePage