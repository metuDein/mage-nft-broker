import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssetList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.opensea.io/api/v1/assets?order_direction=desc&limit=200'
        );
        const assetsData = response.data.assets;
        console.log(assetsData)
        setAssets(assetsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {assets.map((asset) => (
        <div key={asset.id}>
          <img src={asset.image_url} alt={asset.name} />
          <p>{asset.name}</p>s
          <p>Token ID: {asset.token_id}</p>
          <p>Contract Address: {asset.asset_contract.address}</p>
          <p>Price: {asset.sell_orders && asset.sell_orders[0]?.current_price} {!asset.sell_orders && 'not for sale'}</p>
        </div>
      ))}
    </div>
  );
};

export default AssetList;
