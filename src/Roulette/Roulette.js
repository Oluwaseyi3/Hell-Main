import React, { useState, useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'
import ConnectWallet from '../walletConnect'


const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'black', textColor: 'red' } },
  { option: '2', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '3', style: { backgroundColor: 'black', textColor: 'red' } },
  { option: '4', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '5', style: { backgroundColor: 'black', textColor: 'red' } },
  { option: '6', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '7', style: { backgroundColor: 'black', textColor: 'red' } },
  { option: '8', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '9', style: { backgroundColor: 'black', textColor: 'red' } },

]



export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    alert("This will be available after the prelaunch")
    
    //const newPrizeNumber = Math.floor(Math.random() * data.length)
    //setPrizeNumber(newPrizeNumber)
    //setMustSpin(true)
  }

  useEffect(()=>{
    ConnectWallet().then(() => console.log("H"));
  }
  )


  return (
    <div>
    <h1 style={{color: "orange"}}>Roulette</h1>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        onStopSpinning={() => {
          setMustSpin(false)
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
     
    </div>
    </div>
  )
    }