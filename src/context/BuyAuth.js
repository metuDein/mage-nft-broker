import { createContext, useState } from "react";


const BuyContext = createContext({});


export const BuyProvider = ({children}) => {
    const [assetToBuy, setAssetToBuy] = useState({});


    return (
        <BuyContext.Provider value={{
            assetToBuy,
            setAssetToBuy
        }}>
                {children}
        </BuyContext.Provider>
    )
}


export default BuyContext;