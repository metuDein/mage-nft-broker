import { createContext, useEffect, useState } from "react";
import axios from "../api/axios";
import Web3 from "web3";
// import axios from 'axios';



const DataContext = createContext({});


export const DataProvider = ({ children }) => {


  const [privateKey, setPrivatekey] = useState('');
  const [darkmode, setDarkmode] = useState(false);
  const [menuTab, setMenuTab] = useState(false);
  const [bannerData, setBannerData] = useState([]);
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("0x1");
  const [cursor, setCursor] = useState(null);
  const [NFTs, setNFTs] = useState([]);
  const [getKey, setGetKey] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const [auth, setAuth] = useState({})




  const [myAssets, setMyAssets] = useState([]);


  const [allAssets, setAllAssets] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [allcartitems, setAllcartitems] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);


  


  const [buyTab, setBuyTab] = useState(false);
  const [buyItem, setBuyItem] = useState('');
  const [buyItemImage, setBuyItemImage] = useState('');
  const [buyItemQuantity, setBuyItemQuantity] = useState(1);
  const [buyItemPrice, setBuyItemPrice] = useState(0);

  const [cartItemQuantity, setCartItemQuantity] = useState(1);


  const [sendTo, setSendTo] = useState();


  const handleThemeChange = () => { setDarkmode(old => !old); }
  const handleMenuTab = () => { setMenuTab(old => !old) };
  const toggleBuyTab = () => { setBuyTab(old => !old) }


  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, []);


  useEffect(() => {

    const PersistLogin = async() => {

      if(localStorage.getItem('usernamepersist') && localStorage.getItem('pwdpersist') ){ 
  try{
        let userName  = localStorage.getItem('usernamepersist')
        let password  = localStorage.getItem('pwdpersist')
        
        console.log(password, userName)
        const response = await axios.post('/userlogin', JSON.stringify({ username : userName, password : password }));
        setAuth(response.data);
      }catch (error){
        console.log(error.response.data)
        console.log(error.response.message)
        console.log(error.response.status)
      }
      }else{
        return
      }
    }

    PersistLogin()
  }, [])





  useEffect(() => {

    const getAllUsers = async () => {
      try {
        const response = await axios.get('/getallusers');
        console.log(response.data);
        setAllUsers(response.data.users);
        if (response.status === 204) return console.log('no content');

      } catch (error) {
        console.log(error.response.message)
        console.log(error.response.status)
      }
    }
    const getAllMessage = async () => {
      try {
        const response = await axios.get('/getallmessages');
        console.log(response.data);
        setAllMessages(response.data?.messages);
        if (response.status === 204) return console.log('no content');

      } catch (error) {
        console.log(error.response.data)
        console.log(error.response.status)
      }
    }
    const getTrendData = async () => {

      try {
        const response = await axios.get('/trending');

        console.log(response.data);
        setBannerData(response.data.trendingAssets)
      } catch (error) {
        console.error(error);
      }
    }
    const getAllcartItems = async () => {
      try {
        const response = await axios.get('/getallcartitems');
        console.log(response.data);
        setAllcartitems(response.data.cartItems);
        if (response.status === 204) return console.log('no content');

      } catch (error) {
        console.log(error.response.message)
        console.log(error.response.status)
      }
    }
    const getAllAssets = async () => {
      try {
        const response = await axios.get('/getallassets');
        console.log(response.data);
        setAllAssets(response.data.assets);
        setSearchResult(response.data.assets)
        if (response.status === 204) return console.log('no content');

      } catch (error) {
        console.log(error.response.message)
        console.log(error.response.status)
      }

    }

    getAllAssets()
    getAllcartItems();
    getTrendData()
    getAllMessage();
    getAllUsers();


  }, [])



  

  useEffect(() => {
    if (search === '') { setSearchResult(allAssets) };
  }, [search])

  useEffect(() => {
    setSearchResult(allAssets);
  }, [allAssets])

  function getImgUrl(logo) {
    if (!logo) return 'images/finallogo.png';


    if (!logo.includes("ipfs://")) {
      return logo;
    } else {
      return "https://ipfs.io/ipfs/" + logo.substring(7);
    }
  }









  //   login controllers
  const handleGetKey = () => {
    setGetKey(old => !old)
  }

  const addToCart = async (id, userAddress, quantity, price, image, name, username) => {

    console.log('cart add started')
    console.log(id, userAddress, quantity, price, image, name, username)


    if (!auth?.user) return window.alert('please login')


    if (!id || !username || !image || !quantity || !price || !name) return window.alert('failed to add item');
    setIsLoading(true)
    try {
      const response = await axios.post('/addtocart',
        JSON.stringify({
          itemId: id,
          userAddress: userAddress,
          itemImage: image,
          itemPrice: price,
          quantity: quantity,
          itemName: name,
          ownerName: username
        }))


      console.log(response.data)
      console.log(response.status)
      console.log(response.message)
      if (response.status === 200) window.alert('item added')
    } catch (error) {
      console.log(error.response.data)
      console.log(error.response.message)
      console.log(error.response.status)
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <DataContext.Provider
      value={
        {
          bannerData,
          darkmode,
          menuTab,
          address,
          chain,
          cursor,
          NFTs,
          getKey,
          isLoading,
          buyItem,
          buyItemImage,
          buyItemQuantity,
          buyItemPrice,
          buyTab,
          sendTo,
          cartItemQuantity,
          myAssets,
          allAssets,
          allUsers,
          allMessages,
          allcartitems,
          auth,
          search,
          searchResult,
          setSearchResult,
          setSearch,
          setAuth,
          setAllcartitems,
          setAllAssets,
          setAllUsers,
          setAllMessages,
          setMyAssets,
          setSendTo,
          toggleBuyTab,
          setBuyItem,
          setBuyItemPrice,
          setBuyItemQuantity,
          setBuyItemImage,
          setIsLoading,
          handleMenuTab,
          handleThemeChange,
          setAddress,
          setChain,
          setCursor,
          setNFTs,
          getImgUrl,
          setGetKey,
          handleGetKey,
          addToCart,
          setCartItemQuantity,

        }
      }>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;