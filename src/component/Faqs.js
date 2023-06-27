import AssistCard from './AssistCard'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../context/DataContext'


const Faqs = () => {

    const { darkmode }  = useContext(DataContext)
  return (
  <>
    <section className='faq--card--sect'>
        <Link to={'/faq-what-is-an-nft'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none', textAlign : 'center'}}>
            <AssistCard image={'https://static.vecteezy.com/system/resources/previews/010/676/830/non_2x/3d-mobile-nft-illustration-free-png.png'} title={'What is an NFT?'}/>
        </Link>
        <Link to={'/faq-how-to-buy-an-nft'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none', textAlign : 'center'}}>
            <AssistCard image={'images/howtobuyannft.png'} title={'How to buy an NFT?'}/>
        </Link>
        <Link to={'/faq-how-to-create-an-nft'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none', textAlign : 'center'}}>
            <AssistCard image={'images/createannftontritons.png'} title={'how to create an NFT?'}/>
        </Link>
        <Link to={'/'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none', textAlign : 'center'}}>
            <AssistCard image={'https://images.ctfassets.net/6g6hg01fg28j/2Jl6rjB6VwigiIU0jH07jO/4ee7b3e07cb75117c348490ca826d32f/nft-api-hero-image__2_.svg'} title={'What is Minting?'}/>
        </Link>
        <Link to={'/faq-who-is-tritonsprime'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none', textAlign : 'center'}}>
            <AssistCard image={'images/tprimelogo.png'} title={'Who is TritonsPrime?'}/>
        </Link>

        
    </section>
        <Link style={{margin : '0 0 0 40px', padding : '10px 20px', borderRadius : '10px', textDecoration : 'none', background : "blue", color : "#fff"}}> Contact Us</Link>   
  </>
  )
}

export default Faqs