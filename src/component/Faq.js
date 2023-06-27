import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
    return (
        <main className='help--page'>
            <div className='help-sidebar'>
            <ul className='sidebar-tabs'>
                    <li><Link to={'/support-request'} style={{ background : "#fff", borderRadius : '10px', color : '#000', width : '100%', padding : '10px', textDecoration : 'none'}}> Contact  Us</Link></li>
                    <li> <Link style={{color : '#fff', padding : '10px 0'}}> Whats is an Nft </Link></li>
                    <li> <Link to={'/faq-how-to-create-an-nft'} style={{ color: '#fff' }}> How to Create an NFT </Link></li>
                    <li> <Link to={'/faq-how-to-buy-an-nft'} style={{ color: '#fff' }}> how to Buy an NFT</Link> </li>
                    <li> <Link to={'/faq-who-is-tritonsprime'} style={{color : '#fff'}}> Who is TritonsPrime?</Link></li>
                </ul>
            </div>
            <div className='help--article'>
                <h1 className='help--title-1'>What is an NFT?</h1>
                <img src="https://static.vecteezy.com/system/resources/previews/010/676/830/non_2x/3d-mobile-nft-illustration-free-png.png" alt="" width={'100%'} className='whatisanftt--img' />

                <div className='whats--is--nft'>
                    <h2>What is an NFT?</h2>
                    <p>
                        What is an NFT?
                        An NFT (non-fungible token) is a unique digital item stored on a blockchain. NFTs can represent almost anything, and serve as a digital record of ownership.</p>
                </div>
                <video src="videos/whatisanftt.mp4" controls width={'400px'} className='explaination--video'>
                    <source src="/path/to/video.mp4" type="video/mp4" />
                </video>
                <div className='explain--nft-uses'>
                    <h3>Fungible vs. non-fungible</h3>
                    <p>
                        Before we dive into NFTs, it’s important to understand the “non-fungible” part of “non-fungible token.” When an item is fungible, it means it’s interchangeable with another of the same item. A classic example is a $1 dollar bill: you could swap dollars with someone and you’d both still have $1.
                    </p>
                    <p>
                        Non-fungible, on the other hand, means the item is totally unique, and therefore has its own unique value. For example, two cars of the same make and model might have different values based on how many miles are on the odometer, their accident records, or if it was previously owned by a celebrity.
                    </p>
                </div>
                <div className='explain--nft-uses'>
                    <h3>How do NFTs work?</h3>
                    <p>
                        NFTs operate on blockchain technology. The blockchain is basically a large, digital, public record. The most popular blockchains are distributed across many nodes (read: people’s computers), which is why you’ll hear them described as “decentralized.”
                    </p>
                    <p>
                        So instead of a central company-owned server, the blockchain is distributed across a peer-to-peer network. Not only does this ensure that the blockchain remains immutable, it also allows the node operators to earn money, instead of a single company. Because the blockchain records and preserves history, it is uniquely positioned to transform provable authenticity and digital ownership
                    </p>
                    <p>When someone creates, transfers, buys, sells, or otherwise does something with an NFT, that all gets recorded on the blockchain. This is what enables authentication. </p>
                    <p>
                        This record serves as a permanent statement of authenticity that can be viewed or accessed by anyone. Today, when you buy a piece of art or a collector's item, it typically comes with a paper certificate of authenticity, which you must then keep track of forever. It is easily forgotten, lost or destroyed, creating a very fragile system for authenticity. Blockchain’s offer a simple and more secure solution to this long standing issue of proving authenticity.
                    </p>
                    <p>
                        Let’s say you want to buy a piece of artwork from Tyler Hobbs. With NFTs, you can see the entire history of that piece, all the past owners, every sale, all the way back to Hobbs’ original creation of the piece. Without NFTs, you wouldn’t know if you were buying the real piece or just a really good fake.
                    </p>
                    <img src="https://techcrunch.com/wp-content/uploads/2022/05/image-2.png?w=800" alt="" />
                </div>
                <div className='explain--nft-uses'>
                    <h3>The impact of NFT technology</h3>

                    <p>Blockchain technology is revolutionary for digital items. With NFTs, digital items can be provably scarce, openly transferable, and have authenticated ownership. But you might be thinking…so what?</p>
                    <p>
                        For creators, these new attributes are incredibly powerful. Instead of distributing their artwork, music, or other creations on platforms that are traditionally hard to monetize, they’re able to sell unique and authenticated items on a blockchain-based marketplace. In addition to the initial sales, NFT creators may receive set creator earnings on secondary sales. For example, a developer could make an in-game skin that can be used across a variety of games and has established authenticity and ownership, and that developer may earn money other times that skin is bought or sold.
                    </p>
                    <p>
                        This technology is revolutionary for collectors, too. Imagine you’re about to buy a concert ticket online— with NFTs, you can trust its authenticity, because of the undisputed blockchain history, instead of relying on the reseller’s word.
                    </p>
                </div>
                <div className='explain--nft-uses'>
                    <h3>What are NFTs used for?</h3>

                    <p>
                        An art NFT is a type of NFT that represents a piece of digital art, such as a drawing, painting, or piece of digital artwork. Each art NFT is unique and traceable to the original creator of the NFT, and that connection to the creator may be valuable as well. Art NFTs are a new form of digital art that can be collected and sold, similar to physical artwork. Art NFTs can also have additional utility (for example, owning the NFT may also give you commercial rights to use the underlying artwork).
                    </p>
                    <h4>Art NFTs</h4>
                    <p>
                        Artists are creating incredible and novel pieces with NFTs. Damien Hirst used NFTs in his collection “The Currency”, in which he created digital versions of 10,000 unique physical paintings. Collectors had one year to decide if they wanted the digital or the physical version of the painting— whichever version they did not choose would be destroyed.
                    </p>
                    <p>
                        This technology is revolutionary for collectors, too. Imagine you’re about to buy a concert ticket online— with NFTs, you can trust its authenticity, because of the undisputed blockchain history, instead of relying on the reseller’s word.
                    </p>
                    <h4>Profile picture NFTs (PFPs)</h4>
                    <p>
                        A profile picture, or PFP, NFT is any NFT that's primary purpose is use as a social media profile picture, or avatar. These NFTs are digital items that are authenticated on a blockchain network, making them verifiably unique. Some PFP NFTs also grant access to designated online communities.
                    </p>
                    <p>
                        Profile picture NFTs come in various forms, ranging from static images to animated or interactive designs. They may be based on characters, take the form of animals, look like humans, or be abstract.
                    </p>
                    <p>
                        These are probably the projects you’ve heard the most about: Bored Ape Yacht Club (BAYC), Doodles, World of Women (WoW), and more. For many people on the internet, these PFPs actually become their online identity. Not only do they identify with the group, they strongly identify with their avatar. PFP projects are also centered around holder benefits (like BAYC’s famous yacht party) and community (like WoW, which donates a portion of their creator earnings to women-centric charities).
                    </p>
                    <img src="" alt="" />

                    <h4>Music NFTs</h4>
                    <p>
                        A music NFT is any NFT that represents ownership of music or an experience tied to music, like a live concert event or a virtual fan meet-and-greet. Music NFTs are created by minting a unique token on a blockchain, which can then be collected by music fans.
                    </p>
                    <p>
                        Music NFTs can be created by new artists and musicians with large fanbases. These NFTs can include anything from a recording to a composition to ticketing for a music experience. The content of each music NFT varies based on the creator and the work they decide to create.
                    </p>
                    <p>
                        Any artist can create a single song or audio file as an NFT. For example, omgkirby partnered with Channel Tres to create a collection of 5,550 unique songs, each with its own BPM and key. Each song comes with vocals and production by Channel Tres.
                    </p>
                    <img src="" alt="" />
                    <h4>Trading Card NFTs and Digital Collectibles</h4>

                    <p>NFTs bring some extra oomph to your traditional collectibles. Instead of a physical basketball trading card that sits in a binder under your bed, you can collect dynamic NFTs from the NBA’s collection “The Association,” where each card changes based on that player and team’s performance.</p>
                    <p>
                        You can find digital collectibles NFTs in OpenSea’s Collectibe NFT section on OpenSea.io, and trading cards in OpenSea’s Gaming NFT section.
                    </p>
                    <h4>Domain name NFTs</h4>
                    <p>
                        Think of a domain name NFT like an easy-to-remember shortcut to your wallet. Like other types of NFTs, a domain name NFT is stored on the blockchain. In web2, websites are accessed through DNS (Domain Name System) servers. DNS servers translate website addresses into IP addresses. Similarly, in web3, wallets can be accessed through domain names. These domain names translate into wallet addresses.
                    </p>
                    <p>
                        With growing concern about the ownership of personal data and a desire to avoid third parties like domain registrars, domain name NFTs have become a potential answer to the question of how to retain more control of your data. Domain name NFTs allow users to own and control the data that lives on their domain in contrast to a hosted web2 domain name.
                    </p>
                    <p>NFT domains can have extensions like .eth, .polygon, .nft, .crypto, .bitcoin, .x, and .blockchain.</p>
                    <p>
                        Naming standards like Ethereum Naming Service (ENS) and Bonfida (the equivalent naming service for Solana) have emerged to streamline naming for wallets, websites, and other blockchain applications. These help make using the blockchain more user-friendly, with human-readable names and built-in verification.
                    </p>
                    <h4>Membership NFTs</h4>
                    <p>
                        Access to a physical or digital space is the key utility value proposition for a membership NFT. Some membership NFTs serve as access keys to in-person experiences (like a golf community or networking board), while others operate on platforms like Discord. For example, owning a DayAway Founders Key grants exclusive access and benefits to luxury experiences curated by some of the world’s top brands. Owners are able to access curated in-real-life experiences all over the world.
                    </p>
                    <p>
                        Other NFTs (like NFTs in the gaming or music categories) can also have a membership or community-based component, but aren’t categorized as membership NFTs. The differentiator is that a membership NFT’s main purpose is to belong in the community itself rather than being a side benefit of a larger NFT experience. For example, a VeeFriends PFP NFT is typically used as a profile picture NFT, but as an added benefit it grants access for a set period of time to VeeCon (a VeeFriends in-person conference event).
                    </p>
                    <p>
                        Membership NFTs offer a connection point to passions, hobbies, interest groups, or unique real-life experiences. Brands and events like Coachella have turned to NFTs to implement exclusive tickets and passes. Coachella introduced their NFT marketplace and collections in 2022, including lifetime passes.
                    </p>
                    <p>
                        BFF Friendship Bracelets offers members access to a supportive community for women and nonbinary individuals who want to learn more about the web3 world. While the community’s perks are still evolving, the initial membership offers access to the virtual network, future events, and the possibility of virtual calls with BFF’s founders. Some of BFF’s founding members include Mila Kunis, Tyra Banks, and Gwenyth Paltrow.
                    </p>
                    <img src="https://assets-global.website-files.com/629a2d4e81096c5488a8a581/64598f7f88611160460208c7_5fc3a5b53f9b8efe27ecc8d5efacc575.png" alt="" />

                    <h4>Gaming NFTs</h4>
                    <p>
                        A gaming NFT is an NFT associated with any digital item from the realm of online gaming and the metaverse: in-game items, characters, skins, customizations, maps, modes, tickets, collectibles–any digital creation that one would use in a gaming environment. It is a unique, blockchain-based item representing a specific item or element within a game.
                    </p>
                    <p>
                        For example, if you unlocked a tool while playing an NFT-supported game, you could mint that in-game item and take ownership of it. This ownership is verifiable, so your tool can typically be sold, collected, and used just like a real-world item.
                    </p>
                    <p>
                        Today, purchases or acquisitions made within a game go away the instant the game does. Your “ownership” is contingent on the game developers maintaining the game. Ostensibly, they could choose to take an item away or decommission items you own, causing you to lose them. Additionally, gamers are unable to resell items outside of the closed ecosystem of a given game. With gaming NFTs, digital items can be given provable ownership. Digital items and memorabilia can also have provable scarcity, which gives them a similar supply and demand dynamic to their real-world counterparts.
                    </p>
                    <p>
                        Another benefit of gaming NFTs is the potential of a new era of “interoperability,” or how things from one game or gaming universe can be used in another. Today, a game and all its items are siloed, which means they exist only within that game. You can’t use a weapon from Halo in the Call of Duty universe or play FIFA as Mario. But if more games leverage blockchain technology as an interoperable ledger for proof of ownership and standardize their systems for how to render and display items, NFTs could eventually allow in-game items from one game to be operable in more games.
                    </p>
                    <p>
                        Some of this work is dependent on blockchain technology, while some of it is dependent on how the games of the future are built. Organizations like Metaverse Standards are working to provide cooperation between organizations and companies to foster the development of an open and inclusive metaverse.
                    </p>
                    <p>
                        The sheer quantity of digital items created by both game developers and the billions of fans that play their games dwarfs many other areas of digital items, making gaming NFTs a growing application of blockchain technology.
                    </p>
                    <p>
                        Gaming NFTs are revolutionary because of their utility, ownership, and interoperability. This category is still relatively nascent however many gamers are excited by the possibilities of in-game items being usable across different games and not under the control of a single game studio. Aurory Project is a gaming studio that leverages the Solana blockchain to streamline in-game item ownership.
                    </p>
                    <h5>The metaverse</h5>
                    <p>The metaverse refers to a virtual-and-augmented reality in which users can interact with the digital space, but the definition of “metaverse” is still evolving. It isn’t so much a place, as it is a way of connecting and interacting; it can be home to countless worlds or arenas, each with its own lands, characters, and possibilities.</p>
                    <p>
                    In a future theoretical open metaverse, gaming NFTs could be used to represent a wide range of virtual items, including virtual real estate, clothing, accessories, and other customization options for avatars or in-game characters. These NFTs could potentially be sold on marketplaces like OpenSea, allowing users to buy and sell virtual items that can be used within the metaverse.
                    </p>
                    <p>
                    One of the benefits of blockchains is that they are decentralized systems, meaning, they are not controlled by a single entity. This can help to promote fairness and transparency in the distribution and ownership of NFTs. Decentralization offers a layer of protection and transparency through trustless and permissionless transactions.
                    </p>
                    <p>
                    Interoperability refers to the ability of different systems or components to work together and communicate with each other. Blockchains enable the transfer of NFTs between various virtual worlds or platforms that support them, enabling greater accessibility, flexibility, and utility.
                    </p>
                    <p>
                    While true interoperability is still slightly out of reach, ideally, NFTs will be able to be used across different platforms and virtual worlds within the metaverse in the future, allowing users to bring their digital items with them as they navigate between various experiences. This interoperability could bring new kinds of collaboration and better integrate content from developers and platforms.
                    </p>
                    <p>
                    NFTs also enable users to express themselves creatively by showcasing their unique items, such as avatars, skins, clothing, or art, within the metaverse. This lets users create distinct digital identities, which can enhance social interactions and user engagement in virtual spaces.
                    </p>
                    <p>
                    And finally, NFTs provide creators and collectors a means to monetize their creations within the metaverse by allowing users to buy and sell items.
                    </p>
                    <p>
                    Now, blockchain-based metaverse projects like Otherside, Decentraland, and The Sandbox have emerged, where users can build digital experiences and open economies. In addition to allowing developers to build their own metaverses, NFTs can augment the success of platforms like Roblox by enabling users to actually own their digital items. As these virtual worlds grow and expand users can maintain their sovereignty and ownership, not the platform. 
                    </p>
                    <img src="https://assets-global.website-files.com/629a2d4e81096c5488a8a581/64599003886111983d02a0ba_a8c1f070523934b425043483515cc6a9.jpeg" alt="" />


                </div>
                <div className='explain--nft-uses'>
                <h3>Photography NFTs</h3>
                    <p>
                    A photography NFT is a unique digital asset that represents a specific photograph or artwork. It is stored and recorded on a blockchain, a decentralized, immutable digital ledger technology. 
                    </p>
                    <p>
                    Photography NFTs are stored and transferred digitally, allowing them to be easily shared and displayed online. The ownership and authenticity of a photography NFT is verified and recorded on the blockchain, allowing it to be easily transferred between users.
                    </p>
                    <p>
                    NFTs offer a way for photographers and artists to sell and distribute their work in a digital format, while also providing collectors with a unique and verifiable digital item.
                    </p>
                    <p>
                    Justin Aversano made headlines with his Twin Flames collection, a collection of 100 twin portraits. Aversano drew inspiration from his relationship with his fraternal twin for this collection. The “Twin Flames” collection became known as the first major NFT photography collection of its kind and catapulted Aversano into one of the world's highest-selling photographers.
                    </p>
                    <img src="https://assets-global.website-files.com/629a2d4e81096c5488a8a581/6459908abbc5b1e6e1e2d5ac_Screenshot%202023-05-08%20at%205.14.54%20PM.png" alt="" />
                </div>
                <div className='explain--nft-uses'>
                    <h3>Future applications</h3>
                    <p>
                    New applications for the blockchain are constantly emerging. New use cases include identity verification, intellectual property, and storage solutions, like Courtyard, which holds physical inventory and enables you to safely hold, sell, or claim your item you’re ready to redeem. The possibilities for future applications are endless!
                    </p>
                </div>
                <div className='explain--nft-uses'>
                    <h3>How NFTs are bought and sold</h3>
                    <p>
                    With the growing popularity of NFTs, many marketplaces have cropped up to fill the increasing desire to buy and sell these items. Every marketplace is different— some specialize in only one blockchain, some are exclusive and curated, and some focus on certain kinds of NFTs. OpenSea is the largest NFT marketplace, with the best selection— it supports multiple blockchains and hosts millions of NFTs.
                    </p>
                </div>
                
                <div className='explain--nft-uses'>
                    <h3>How to buy a NFT</h3>
                    <Link to={'/faq-how-to-buy-an-nft'}>
                    <img src="images/howtobuyannft.png" alt="" style={{background : '#000'}} className='next--article'/>
                    </Link>
                </div>

            </div>
        </main>
    )
}

export default Faq