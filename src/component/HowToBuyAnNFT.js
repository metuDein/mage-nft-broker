import React from 'react'
import { Link } from 'react-router-dom'

const HowToBuyAnNFT = () => {
    return (
        <main className='help--page'>
            <div className='help-sidebar'>
                
                <ul className='sidebar-tabs'>
                    <li><Link to={'/support-request'} style={{ background: "#fff", borderRadius: '10px', color: '#000', width: '100%', padding: '10px', textDecoration: 'none' }}> Contact  Us</Link></li>
                    <li> <Link to={'/faq-what-is-an-nft'} style={{ color: '#fff', padding: '10px 0' }}> Whats is an Nft </Link></li>
                    <li> <Link to={'/faq-how-to-create-an-nft'} style={{ color: '#fff' }}> How to Create an NFT </Link></li>
                    <li> <Link to={'/faq-who-is-tritonsprime'} style={{color : '#fff'}}> Who is TritonsPrime?</Link></li>

                </ul>
            </div>

            <div className='help--article'>
                <h1 className='help--title-1' style={{color : '#fff'}}>How to buy an NFT?</h1>
                <img src="images/howtobuyannft.png" alt="" width={'100%'} className='howtobuyanftt--img' />

                <div className='whats--is--nft'>
                    <h2>How to buy an NFT</h2>
                    <p>
                        In order to buy an NFT, you'll need a crypto wallet (Metamask) and cryptocurrency. Using TritonsPrime, you can buy items listed for sale instantly.</p>
                </div>
                
                <div className='explain--nft-uses'>
                    <h3>What do you need in order to buy an NFT?</h3>
                    <p>
                    To buy NFTs, you’ll need to set up a crypto wallet. A crypto wallet helps to store cryptocurrency.
                    </p>
                    <p>
                    There are custodial (“hosted”) wallets and non-custodial wallets. Custodial wallets are managed by a third party company, whereas a non-custodial wallet is not. Custodial wallets are like keeping your valuables in a storage facility, and non-custodial wallets are like keeping them in your safe at home. Custodial wallets therefore require less responsibility, but have risks related to the third party (like, if the storage facility was robbed). Non-custodial wallets give you full control, but also mean you have to be extra careful (like, not losing your key or accidentally throwing away something valuable when you reorganize your closet). 
                    </p>
                    <p>
                    Non-custodial wallets include software and hardware wallets. 
                    </p>
                    <p>A software wallet is a program that lives on your computer or on your internet browser. This makes software wallets a great option for quickly and conveniently buying, selling, and transferring NFTs and cryptocurrency. </p>
                    <p>
                    A hardware wallet is a physical device that you plug into your computer to use. Because it’s not always connected to your computer or browser, it’s a great option for long-term secure storage, but is a bit less convenient for fast or frequent transactions.
                    </p>
                    <p>Metamask is a great software with full secure intergration with TritonsPrime</p>
                </div>
                <div className='explain--nft-uses'>
                    <h3>Step 1: Decide where to buy your NFT</h3>
                    <p>A great way to buy nft is via Nft digital marketplace like <Link to={'/'}> TritonsPrime</Link></p>
                    <p>You can pick from a variety of different Nft assets on TritonsPrime</p>
                    <img src="images/howtobuy1.png" alt="" />
                    <p>NFT marketplaces support primary sales or mints, but they are also a major driver of secondary sales. Marketplaces can differ by the blockchains they support, their fee structure, the types of NFTs they specialize in, and more.</p>
                    <img src="images/howtobuy2.png" alt="" />

                    
                </div>
                <div className='explain--nft-uses'>
                    <h3>Step 2: Find an NFT you like</h3>
                    <p>If you want to get into NFTs but don’t know how to find something you like, here are some good places to start exploring:</p>
                    <h5>Marketplaces (TritonsPrime)</h5>
                    <h5>Creators you already follow</h5>
                    <h5>Twitter</h5>
                    <img src="" alt="" />
                </div>
                <div className='explain--nft-uses'>
                    <h3>Step 3: Purchase your NFT</h3>
                    <p>Once you’ve found an NFT you like, how do you actually purchase it? You can buy NFTs for a fixed price instantly or you can add to cart and continue shopping</p>
                    <img src={'images/howtobuy3.png'} alt="" />

                </div>

                <div className='explain--nft-uses'>
                    <h3>How to create an NFT</h3>
                    <Link to={'/faq-how-to-create-an-nft'} >
                        <img src="images/createannftontritons.png" alt="" className='next--article' />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default HowToBuyAnNFT