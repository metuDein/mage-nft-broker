import React from 'react'
import { Link } from 'react-router-dom'

const FaqCreateNft = () => {
    return (
        <main className='help--page'>
            <div className='help-sidebar'>
            <ul className='sidebar-tabs'>
                <li><Link to={'/support-request'} style={{ background : "#fff", borderRadius : '10px', color : '#000', width : '100%', padding : '10px', textDecoration : 'none'}}> Contact  Us</Link></li>
                    <li> <Link to={'/faq-what-is-an-nft'} style={{color : '#fff', padding : '10px 0'}}> Whats is an Nft </Link></li>
                   
                    <li> <Link to={'/faq-how-to-buy-an-nft'} style={{ color: '#fff' }}> how to Buy an NFT</Link> </li>
                    <li> <Link to={'/faq-who-is-tritonsprime'} style={{color : '#fff'}}> Who is TritonsPrime?</Link></li>
                </ul>
            </div>

            <div className='help--article'>
                <h1 className='help--title-1'>How to create an NFT</h1>
                <img src="images/createannftontritons_auto_x2.jpg" height="200px"  style={{ objectFit : 'cover' }}width={'100%'} className='howtobuyanftt--img' />

                <div className='whats--is--nft'>
                    <h2>
                        How to create an NFT
                    </h2>
                    <p>
                        How to Create an NFT on TritonsPrime
                        Creating an NFT on TritonsPrime is intuitive and easy. You just need to decide what the purpose and genre of your collection is, set up a crypto wallet, choose a blockchain, and list your NFT(s). In this article, we’ll walk through the steps one by one and explain exactly what you need to do to create your first NFT.</p>
                </div>

                <div className='explain--nft-uses'>
                    <h3>What do I need to create an NFT?</h3>
                    <p>
                    In addition to the NFT itself, you’ll need a crypto wallet to create and mint your NFT. “Minting” an NFT is the process of writing a digital item to the blockchain. This establishes its immutable record of authenticity and ownership. 
                    </p>
                    <p>As a creator, minting your work allows you to establish provable scarcity and verified ownership. For the first time, creators can publish limited edition digital works, whose authenticity is validated on the blockchain. Ownership is undisputed and public, allowing creators to build special communities and perks for those who hold their NFTs.
                    </p>
                    <p>
                    Crypto wallets are a foundational tool of web3. Your wallet acts as a private key that allows you to interact with decentralized apps, buy NFTs, and navigate the web3 universe. Each blockchain has specific wallets you can use to transact on them. For example, MetaMask is a wallet used to interact with the Ethereum blockchain. TritonsPrime is compatible with Metamask wallet.
                    </p>
                    
                </div>
                <div className='explain--nft-uses'>
                    <h3>Does it cost money to create an NFT?</h3>
                    <p>Yes it does, but here in TritonsPrime we've made it so you'll have to pay little and mint more</p>
                </div>
                <div className='explain--nft-uses'>
                    <h3>What are the step-by-step instructions for creating an NFT using TritonsPrime?</h3>
                    <p>TritonsPrime makes it simple and fast to create an NFT.</p>
                    
                    <img src="" alt="" />
                </div>
                <div className='explain--nft-uses'>
                    <h3>Step 1: You’ll need to create an account with tritonsprime an connect your wallet</h3>
                    <img src="images/howtocreate1_ml_resize_x4.jpg" alt="" />

                </div>

                <div className='explain--nft-uses'>
                    <h3>Step 2: Click on the Create tab in the top right corner on the TritonsPrime website</h3>
                    <img src="images/howtocreate2.jpg" alt="" />
                </div>
                <div className='explain--nft-uses'>
                    <h3>Step 3: Create New Item</h3>
                    <p>Once clicked, you’ll be taken to the NFT item creation page where you can upload the file of your NFT and give it a name and a description. </p>
                    <img src="images/howtocreate3.png" alt="" />
                </div>
                <div className='explain--nft-uses'>
                    <h3>Step 4: Add Information</h3>
                    <p>
                        fill the details and and add information about the item you are creating
                    </p>
                    <img src="images/howtocreate4.png" alt="" />

                </div>
                <div className='explain--nft-uses'>
                    <h3>Step 5: Finalize and Click Create</h3>
                    <p>
                    Finally, we’ll ask you to list the supply, which is the number of items that will be created, and the blockchain you’ll be creating the NFT on. This defaults to the Ethereum blockchain, Once you’re done, just click Create!
                    </p>
                    <img src="images/howtocreate5.png" alt="" />
                    <p>Once completed, your NFT will be added to the HomePage of the TritonsPrime for a few days to add publicity and allow buyer easy access to your assets</p>
                </div>
                <div className='explain--nft-uses'>
                    <h3>Why should I create my NFTs using TritonsPrime?</h3>
                    <p>
                    TritonsPrime gives creators a smooth, simple, and user-friendly creation process that allows them to create collections that help them stand out. And speaking of standing out, we believe that TritonsPrime is the best place creators can list NFTs for sale because it distributes them to the larger audience. At TritonsPrime, we pride ourselves on making the NFT creation and minting process easy, intuitive, and friendly for creators because we love seeing our marketplace grow and diversify with each new collection.
                    </p>
                    
                </div>
                <div className='explain--nft-uses'>
                    <h3>Who is TritonsPrime?</h3>
                    <Link to={'/faq-who-is-tritonsprime'} >
                        <img src="images/tprimelogo.png" alt="" className='next--article' />
                    </Link>
                </div>

            </div>
        </main>
    )
}

export default FaqCreateNft