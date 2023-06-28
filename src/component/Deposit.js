import React from 'react'
import { FaEthereum } from 'react-icons/fa'

const Deposit = () => {

    const handleDeposit = async() => {
        
    }
  return (
    <section className='deposit--sect'>
            <div className='connect--wallet'>
                <form className='email--login'>
                <div className='nft-create-text'>
                            <label htmlFor='file-name' className='nft-create-name'>
                                Deposit Amount
                            </label>
                            <input
                                type="text"
                                name='nftName'
                                id='file-name'
                                placeholder='Deposit Amount'

                            />
                        </div>
                        <button className='deposit--btn'> deposit </button>
                </form>
            </div>

            <table className='cart--table'>
            <thead>
                <th>Deposit</th>
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

export default Deposit