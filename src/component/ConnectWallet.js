import React from 'react'
import Web3 from 'web3';

const ConnectWallet = () => {

    async function connectToMetaMask() {
        if (window.ethereum) {
          // Create a new Web3 instance
          const web3 = new Web3(window.ethereum);
  
          try {
            // Request access to the MetaMask accounts
            await window.ethereum.enable();
  
            // You can now use the web3 instance to interact with the blockchain
            // For example, you can get the current account address
            const accounts = await web3.eth.getAccounts();
            console.log('Connected account:', accounts[0]);
            window.alert('Connected account:', accounts[0]);
          } catch (error) {
            console.error('Error connecting to MetaMask:', error);
          }
        } else {
          console.warn('MetaMask not found');
        }
      }
  return (
    <div>

        <button className='login--btn' onClick={connectToMetaMask}> connect wallet</button>
    </div>
  )
}

export default ConnectWallet