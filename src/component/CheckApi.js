import { useContext, useEffect, useState } from "react";
import axios from '../api/axios';
import NftCard from "./NftCard";
import Slider from "./Slider";
import AnimateTab from "./AnimateTab";
import DataContext from "../context/DataContext";

const CheckApi = ({bannerData}) => {

 
  const {allAssets} = useContext(DataContext);
  const url = 'homepagedata';
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get(url);
        
        setData(response.data.assets)
      } catch (error) {
        console.error(error);
      }
    }
   
    fetchData();

  }, []);


  return (
      <NftCard data={allAssets} />
   
  )
}

export default CheckApi