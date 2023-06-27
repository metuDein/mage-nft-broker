
import './App.css';
import axios from './api/axios';
import { Link, Navigate, useLocation} from 'react-router-dom'

import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import HomePage from './component/HomePage';
import { useEffect, useState, useContext } from 'react';
import  { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import DataContext from './context/DataContext';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Faq from './component/Faq';
import HowToBuyAnNFT from './component/HowToBuyAnNFT';
import FaqCreateNft from './component/FaqCreateNft';
import WhoIsTritons from './component/WhoIsTritons';
import UserArea from './component/UserArea';
import Profile from './component/Profile';
import CreateNft from './component/CreateNft';
import ItemPage from './component/ItemPage';
import EditItem from './component/EditItem';
import GetNFTbyContract from './component/GetNFTbyContract';
import FaqDept from './component/FaqDept';
import Faqs from './component/Faqs';
import CollectionPage from './component/CollectionPage';
import Admin from './protected routes/Admin';
import AdminPanel from './protected routes/AdminPanel';
import WalletLogin from './component/WalletLogin';
import AdminUsers from './protected routes/AdminUsers';
import AdminEditUser from './protected routes/AdminEditUser';
import SupportRequest from './component/SupportRequest';
import ExplorePage from './component/ExplorePage';
import Cart from './component/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faTriangleExclamation, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AdminViewUser from './protected routes/AdminViewUser';
import AdminCreateUser from './protected routes/AdminCreateUser';
import AdminViewAssets from './protected routes/AdminViewAssets';
import AdminEditAsset from './protected routes/AdminEditAsset';
import useAuth from './hook/useAuth';
import UserSettings from './component/UserSettings';
import UserEditAsset from './component/UserEditAsset';
import NotFound from './component/NotFound';
import AdminCreateAsset from './protected routes/AdminCreateAsset';
import UserVerification from './component/UserVerification';
import { FaEthereum } from 'react-icons/fa';
import AdminMessages from './protected routes/AdminMessages';
import AdminSendMessage from './protected routes/AdminSendMessage';
import AdminViewMessage from './protected routes/AdminViewMessage';
import PersistLogin from './component/PersistLogin';
import UserMessages from './component/UserMessages';
import UserMessage from './component/UserMessage';
import EmailLogin from './component/EmailLogin';
import Deposit from './component/Deposit';
import ConnectWallet from './component/ConnectWallet';








function App() {

  const { getImgUrl, buyTab, setBuyTab, toggleBuyTab, isLoading, setIsLoading } = useContext(DataContext);
 
 

 


  const {auth} = useAuth()
  const [bannerData, setBannerData] = useState([]);
 
  

  

  return (
    <main className="App">
      <DataProvider>

      
        <AuthProvider>
        {isLoading  && <div className='loading--screen'>
          <FontAwesomeIcon icon={faSpinner} spin style={{color: "#c7d2e5", fontSize : '100px'}} />
          </div>}
          
          <Nav />
          
          <section className='main--display'>
          
            
         
          

        {  !isLoading &&
          <Routes>
             {/* area open to every one */}
              <Route path='/' element={<Layout />}>
              <Route path='/' element={<HomePage bannerData={bannerData} />} />
              <Route path='/support-request' element={<SupportRequest />} />

              <Route path='/collection/:contractAddress' element={<CollectionPage />} />
              <Route path='/itempage/:id' element={<ItemPage toggleBuyTab={toggleBuyTab}/>} />
              <Route path='/walletlogin' element={<WalletLogin />} />
              <Route path='/connecttometamask' element={<ConnectWallet />} />
              <Route path='/auth' element={<EmailLogin />} />
              <Route path='/explore' element={<ExplorePage toggleBuyTab={toggleBuyTab}/>} />

              {/* faq sections */}
              <Route path='/' element={<FaqDept />} >
                <Route path='/faq-quick-answer' element={<Faqs />} />
                <Route path='/faq-what-is-an-nft' element={<Faq />} />
                <Route path='/faq-how-to-buy-an-nft' element={<HowToBuyAnNFT />} />
                    <Route path='/faq-how-to-create-an-nft' element={<FaqCreateNft />} />
                <Route path='/faq-who-is-tritonsprime' element={<WhoIsTritons />} />
              </Route>


              {/* user area to lock */}
             

              <Route path='/' element={<UserArea />}>
                
                {/* <Route path='/checkout' element={<CheckOut />} /> */}
                <Route path='/user-profile' element={<Profile />} />
                <Route path='/user-create' element={<CreateNft />} />
                {/* <Route path='/user-edit-asset/:id' element={<EditItem />} /> */}
                <Route path='/user-edit-asset/:id' element={<UserEditAsset />} />
                <Route path='/user-verification' element={<UserVerification />} />
                <Route path='/user-edit-profile' element={<UserSettings />} />
                <Route path='/user-notifications' element={<UserMessages />} />
                <Route path='/user-notification/:id' element={<UserMessage />} />
                <Route path='/deposit' element={<Deposit />} />
                
              <Route path='/cart' element={<Cart />} />
                <Route path='/getnftassets' element={<GetNFTbyContract />} />

            {/* Admin panel  to lock */}
              <Route path='/' element={<Admin  allowedRoles={5150}/>}>
                <Route path='/admin-panel' element={<AdminPanel />} />
                <Route path='/admin-panel-users' element={<AdminUsers />} />
                <Route path='/admin-panel-assets' element={<AdminViewAssets />} />
                <Route path='/admin-panel-create-user' element={<AdminCreateUser />} />
                <Route path='/admin-panel-create-asset' element={<AdminCreateAsset />} />
                <Route path='/admin-panel-edit-user/:id' element={<AdminEditUser />} />
                <Route path='/admin-panel-edit-asset/:id' element={<AdminEditAsset />} />
                {/* <Route path='/admin-panel-user/:id' element={<AdminViewUser />} /> */}
                <Route path='/admin-panel-messages' element={<AdminMessages />} />
                <Route path='/admin-panel-message/:id' element={<AdminViewMessage />} />
                <Route path='/admin-panel-send-message' element={<AdminSendMessage />} />
              </Route>  
        

              </Route>
            {/* {missing get routes} */}
              <Route path='*' element={<NotFound />} />
 
            </Route>
          </Routes>
        }
        </section>

<Footer />
        </AuthProvider>
        </DataProvider>
        
        </main>
        );
}

export default App;
