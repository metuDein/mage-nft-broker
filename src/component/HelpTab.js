import React from 'react'
import HelpCard from './HelpCard'

const HelpTab = () => {
  return (
    <section className='about-tab'>
            <HelpCard src={'https://trustwallet.com/assets/images/media/assets/vertical_blue.png'} title={'TrustWallet Secure Integration'} body={'This feature allows you to securely connect your Trust wallet, enabling you to interact with blockchain networks and perform transactions Seamlessly.'}/>
            <HelpCard src={'https://cdn.onlinewebfonts.com/svg/img_453163.png'} title={'Readily Available Buyers'} body={'By listing your NFT on TritonsPrime, you gain exposure to a wide network of potential buyers who are ready to appreciate and acquire your digital creations.'}/>
            <HelpCard src={'https://www.svgrepo.com/show/158745/24-hours.svg'} title={'24 Hours Support'} body={'At TritonsPrime, we prioritize the satisfaction and success of our users, which is why we offer 24/7 support to ensure you receive the assistance you need, whenever you need it.'} />    
            <HelpCard src={'https://img.uxwing.com/wp-content/themes/uxwing/download/business-professional-services/affordable-icon.png'} title={'Low Trade Fees'} body={`At TritonsPrime, we understand the importance of cost efficiency when it comes to buying and selling NFTs. That's why we pride ourselves on offering low gas fees, ensuring that you can transact on our platform without breaking the bank. `} />    
            <HelpCard src={'https://cdn.onlinewebfonts.com/svg/img_209082.png'} title={'Prioritize New Assets'} body={`At TritonsPrime, we believe in supporting and promoting new and emerging artists in the NFT space. We prioritize the visibility and exposure of newly uploaded assets on our platform, ensuring that they receive the attention they deserve.`} />    
            <HelpCard src={'https://www.iconpacks.net/icons/2/free-verified-icon-3600-thumb.png'} title={'Verified Sellers'} body={`At TritonsPrime, we understand the importance of trust and authenticity in the NFT marketplace. That's why we have implemented a verification mark to provide added credibility to our users. `} />    
    </section>
  )
}

export default HelpTab