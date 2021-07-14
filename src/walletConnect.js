import Web3 from 'web3'
import MemoryToken from './Roulette.json'
async function ConnectWallet(){
    if (window.ethereum) { //check if Metamask is installed
          try {
              window.web3 = new Web3(window.ethereum);
              const address = await window.ethereum.enable(); //connect Metamask
              const token = new window.web3.eth.Contract(MemoryToken, "0x64b425164e3da4fCaCbF081660ca20C2A306C82d")
              const obj = {
                      connectedStatus: true,
                      status: "",
                      address: address,
                      web3: window.web3,
                      token: token
                  }
                  return obj;
               
          } catch (error) {
              console.log(error)
              return {
                  connectedStatus: false,
                  status: "🦊 Connect to Metamask using the button on the top right."
              }
          }
          
    } else {
          return {
              connectedStatus: false,
              status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
          }
        } 
  };
export default ConnectWallet;


