import React from 'react'

const Deposit = () => {
  return (
    <section className='wallet--sect'>
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
                                placeholder='Email'
                               
                            />
                        </div>
                </form>
            </div>
        </section>
  )
}

export default Deposit