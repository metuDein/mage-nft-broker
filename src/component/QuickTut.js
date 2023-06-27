import React from 'react'
import AssistCard from './AssistCard';
import { Link } from 'react-router-dom';
const QuickTut = () => {
  return (
    <section className='tut--sect'>
      <Link to={'/faq-what-is-an-nft'} style={{ color: '#fff', textDecoration: "none", }}>
        <AssistCard image={'https://static.vecteezy.com/system/resources/previews/010/676/830/non_2x/3d-mobile-nft-illustration-free-png.png'} title={'What is an NFT?'} />
      </Link>
      <Link to={'/faq-how-to-buy-an-nft'} style={{ color: '#fff', textDecoration: "none", }}>

        <AssistCard image={'images/howtobuyannft.png'} title={'How to buy an NFT'} />
      </Link>
      <Link to={'/faq-how-to-create-an-nft'} style={{ color: '#fff', textDecoration: "none", }}>

        <AssistCard image={'images/createannftontritons.png'} title={'How to create an NFT on TritonsPrime'} />
      </Link>
      <Link to={'/faq-who-is-tritonsprime'} style={{ color: '#fff', textDecoration: "none", }}>

        <AssistCard image={'images/tprimelogo.png'} title={'Who is TritonsPrime?'} />
      </Link>
      
    </section>
  )
}

export default QuickTut