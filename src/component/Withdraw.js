import React, { useState } from 'react'
import { FaEthereum } from 'react-icons/fa'
import axios from '../api/axios'
import useAuth from '../hook/useAuth'

const Withdraw = () => {
  const { auth } = useAuth()

 
  const [amount, setAmount] = useState('')
  const [authLoading, setAuthLoading] = useState(false);
  const userBalance = auth?.user?.balance;

  
  
  const handleWithDraw = async () => {
    setAuthLoading(true)
    if( userBalance < Number(amount) ){
      setAuthLoading(false);

    return window.alert('your balance is too low to withdraw');
    }

    try {
      const response = await axios.post('/')
      
    } catch (error) {
      console.log(error.response.data)
      console.log(error.response.status)
      setAuthLoading(false)
    }

  }

  return (
    <section className='deposit--sect'>
    <div className='connect--wallet'>
        <form className='email--login'>
        <div className='nft-create-text'>
                    <label htmlFor='file-name' className='nft-create-name'>
                        Withdraw Amount
                    </label>
                    <input
                        type="text"
                        name='nftName'
                        id='file-name'
                        placeholder='Withdrawal Amount'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}

                    />
                </div>
                <button className='deposit--btn'> Withdraw </button>
        </form>
    </div>

    <table className='cart--table'>
    <thead>
        <th>Withdraw</th>
        <th>status</th>
        <th>Date</th>
    </thead>
    <tbody>
    <tr>
    <td> 10 <FaEthereum/> </td>
    <td>pending </td>
    <td> {Date.now()}</td>
</tr>
        
    </tbody>
    </table>
</section>
  )
}

export default Withdraw