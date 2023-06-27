import React from 'react'
import { Link } from 'react-router-dom'

const WhoIsTritons = () => {
    return (
        <main className='help--page'>
            <div className='help-sidebar'>
                <ul className='sidebar-tabs'>
                    <li><Link to={'/support-request'} style={{ background: "#fff", borderRadius: '10px', color: '#000', width: '100%', padding: '10px', textDecoration: 'none' }}> Contact  Us</Link></li>
                    <li> <Link to={'/faq-what-is-an-nft'} style={{ color: '#fff', padding: '10px 0' }}> Whats is an Nft </Link></li>
                    <li> <Link to={'/faq-how-to-create-an-nft'} style={{ color: '#fff' }}> How to Create an NFT </Link></li>
                    <li> <Link to={'/faq-how-to-buy-an-nft'} style={{ color: '#fff' }}> how to Buy an NFT</Link> </li>
                </ul>
            </div>

            <div className='help--article'>
                <h1 className='help--title-1'>Who is TritonsPrime?</h1>
                <img src="images/logo.png" alt="" width={'100%'} className='tritonsprime--img' />

                <div className='whats--is--nft'>
                    <h2>
                        Our Mission
                    </h2>
                    <p>TritonsPrime's Mission is to help you get your nfts to buyers and get paid seamlessly.
                        We believe that one day, nearly everything we own will be accounted for on a blockchain. That’s why our goal is to build a trusted, inclusive, and accessible marketplace that welcomes everyone into the world of NFTs
                    </p>
                </div>

                <div className='explain--nft-uses'>
                    <h3>Why NFTs?</h3>
                    <p>
                        Blockchain technology reimagines the distribution of value, the same way the internet transformed the distribution of information, and NFTs are one of the first major applications of this new technology.
                    </p>
                    <p>Artists can now sell digital 1/1 pieces with the same verifiable ownership and scarcity as a physical artwork, and earn recurring creator earnings for the first time in history. Games can use blockchain technology to facilitate cross-game experiences and economies (like buying gear and being able to use it across multiple games). Events like Coachella can leverage NFTs to make it easier to grant, buy, and sell tickets or issue lifetime passes. Brands can use NFTs to provide exclusive access to perks, communities and events. Inventory can be remotely managed with NFTs, where the NFTs are eventually exchanged for physical goods. And this is only the beginning!
                    </p>
                    <p>
                        NFTs represent the building blocks for new peer to peer economies, where users have greater freedom and ownership over their digital items and data, and developers can build powerful applications to provide real economic value directly to users with fewer middlemen.
                        We believe NFTs will help people realize the broad value and impact of true digital ownership.
                    </p>

                </div>
                <div className='explain--nft-uses'>
                    <h3>Our values</h3>
                    <h4>Trust</h4>
                    <p>We prioritize the trust and safety of all people on TritonsPrime, creators and collectors alike. We’re working hard to make sure everyone is supported by our policies, tools, and customer service. We understand and embrace that since the technology is so early in its development, we have an outsized responsibility to develop safe experiences for our users and protect your digital assets.</p>
                    <h4>Inclusivity</h4>
                    <p>
                        On TritonsPrime, anyone can be an entrepreneur. Independent artists can leverage the same technology and smart contracts as big, established brands. Our platform helps level the playing field for anyone to enter the Web3 space.
                    </p>
                </div>
                <div className='explain--nft-uses'>
                <Link to={'/support-request'} style={{ background: "#fff", borderRadius: '10px', color: '#000', width: '100%', padding: '10px', textDecoration: 'none' }}> Contact  Us</Link>
                </div>

            </div>
        </main>
    )
}

export default WhoIsTritons