import React, { Component } from 'react';
import Coin from './Coin';
import './CoinToss.css';
import Button from "./Button"
import heads from './hellb.png';
import tails from './hellw.png';
import background from './background.jpg'
import ConnectWallet from '../walletConnect'

import SliderBar from "./SliderBar"
import "rc-slider/assets/index.css";


//import "./AddFunds.css";

class CoinToss extends Component {
    globalObj = {
        obj: null
    }
    state = {
        // the amount to increase the balance is initialized at zero
        amount: 0,
        value: 1
      };
    async componentWillMount(){
        //await this.loadWeb3()
        const obj = await ConnectWallet();
        
        if(obj.status != ""){
            alert(obj.status)
        }
        console.log(obj)
        this.globalObj.obj = obj
        //const response = await obj.token.methods.rollDice(100000000).send({
          //from: '0xdB6D0436a7B8321b55bf5d9543511415BCE4fc90'
        //})
        //console.log(response.events.rolledDice.returnValues[2])

      
      }
    static defaultProps = {
        coinFace: [heads, tails],
    }

    constructor(props){
        super(props);
        this.state = {
            flipAnimaiton: false,
            frontFace: "/static/media/hellb.ff980420.png",
            backFace: "/static/media/hellw.06c6165b.png",
            flips: 0, 
            heads: 0,
            tails: 0,
      
        }
        this.randomCoinFace = this.randomCoinFace.bind(this);
        this.toss = this.toss.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleAmountChange= this.handleAmountChange.bind(this)
    }
       
    randomCoinFace() {
                return this.props.coinFace[Math.floor(Math.random() * this.props.coinFace.length)];
        }  

    async toss() {
        //alert("This will be available after the prelaunch")
        
        this.setState({flipAnimaiton: true});
        console.log(this.state)
        const changeFace = this.state.backFace;
        console.log(this.globalObj)
        const response = await this.globalObj.obj.token.methods.rollDice(100000000).send({
            from: '0xdB6D0436a7B8321b55bf5d9543511415BCE4fc90'
          })
        console.log(response.events.rolledDice.returnValues)
        if(response.events.rolledDice.returnValues[2] === true){
            
            const changeFace = this.state.frontFace;
        }else if(response.events.rolledDice.returnValues[2] === false){
            const changeFace = this.state.backFace;
        }
        
        
        console.log(changeFace);

        setTimeout(()=>{
            this.setState(st=> ({
                frontFace: changeFace === heads ? this.props.coinFace[0] : this.props.coinFace[1], 
                backFace: changeFace === heads ? this.props.coinFace[1] : this.props.coinFace[0], 
                heads: changeFace === heads ? st.heads + 1 : st.heads + 0, 
                tails: changeFace === tails ? st.tails + 1 : st.tails + 0, 
                flips: st.flips + 1, 
            }))
        }, 50)

        setTimeout(()=> {
            this.setState({flipAnimaiton: false});
        }, 500);
        
    }

    reset() {
        this.setState({
            flips: 0,
            heads: 0,
            tails: 0,
        })
       
    }
    // handleAmountChange = event => {
    //     if (event.target.value <= 5000) {
    //       console.log("amount");
    //       this.setState({ amount: event.target.value });
    //     } else {
    //       alert("A maximum of 100 trillion may be tossed at once.");
    //     }
    //   };
    handleChange = event => {
        // const { name, amount } = e.target;
        // console.log(amount)
        // this.setState({
        //   [name]: amount
        // });
        this.setState({
          [event.target.name]: event.target.value
        ,  amount: event.target.value  } );
      };
      onSliderChange = value => {
        this.setState(
          {value},
          () => {
            console.log(this.state.value);
          }
        );
      };

      handleAmountChange = (e) => {
        if (e.target.value <= 5000) {
          console.log(this.state.amount);
          this.setState({ amount: e.target.value });
          } else {
            alert("A maximum of 100 trillion may be tossed at once.");
          }
    }
        
    render() {
          
        let flipCoinInner = 'flip-coin-inner';

        if (this.state.flipAnimaiton === true) {
            flipCoinInner += ' flip-animation'
        }
/*
                        <div className='flip-coin-back'>
                            <Coin face={this.state.backFace} /> 
                        </div>
*/
        return (    
            <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat', width: '100vw',height: '100vh'}}>
            
                <h1 style={{color: "orange"}}>Coin Toss</h1>
                <div className='flip-coin'>
                    <div className={flipCoinInner}>
                        <div className='flip-coin-back'>
                            <Coin face={this.state.backFace} /> 
                        </div>
                        <div className='flip-coin-front'>
                            <Coin face={this.state.frontFace} /> 
                        </div>

                    </div>
                </div>

                <button disabled={this.state.flipAnimaiton} onClick={this.toss}>
                    {this.state.flipAnimaiton === false ? 'Toss it!' : 'Flipping...'}
                    
                </button>


                <button onClick={this.reset}>Reset</button>
                <p style={{color: "gray"}}>Out of {this.state.flips}, there has been {this.state.heads} heads and {this.state.tails} tails.</p>
                <div className="addFundsContainer">
          {/* div to hold the form to change amount value */}
          <div className="addFundsForm">
            {/* description of what to do with this form */}

            <form id="addFunds" onSubmit={this.toss}>

              <Button handleAmountChange={this.handleAmountChange} />
              <SliderBar onSliderChange={this.onSliderChange}  value={this.state.value}/>

              <div >
              <p style={{margin: "auto"}}>{this.state.value}</p>
              </div>

                <input
                type="text"
                name="addValue"
                placeholder="Enter Amount"
                value={this.state.amount}
                onChange={this.handleChange}
              />


              <input
                type="submit"
                value={`Add ${this.state.amount || 0}x to account`}
              />
              

            </form>
          </div>
        </div>
            </div>
        )
    }
}

export default CoinToss;

  //    {/* button to add $50 to account */}
  //    <button
  //    type="button"
  //    value="1"
  //    name="add50"
  //    onClick={this.handleAmountChange}
  //  >
  //    100 million
  //  </button>
  //  {/* button to add $100 to account */}
  //  <button
  //    type="button"
  //    value="10"
  //    name="add100"
  //    onClick={this.handleAmountChange}
  //  >
  //    1 trillion
  //  </button>
  //  {/* button to add $250 to account */}
  //  <button
  //    type="button"
  //    value="100"
  //    name="add250"
  //    onClick={this.handleAmountChange}
  //  >
  //    10 trillion
  //  </button>
  //  {/* button to add $500 to account */}
  //  <button
  //    type="button"
  //    value="1000"
  //    name="add500"
  //    onClick={this.handleAmountChange}
  //  >
  //    100 trillion 
  //  </button>
  //  {/* input to add any amount user selects to account */}
  //  <label>$</label>
  //  <input
  //    type="text"
  //    name="addValue"
  //    placeholder="Enter Amount"
  //    onChange={this.handleAmountChange}
  //  />
  //  <br />
  //  {/* submit button that dynamically renders account amount to */}
  //  {/*increase their account */}


//   <button
//   type="button"
//   value="1"
//   name="add50"
//   onClick={this.handleAmountChange}
// >
//   100 million
// </button>
// {/* button to add $100 to account */}
// <button
//   type="button"
//   value="10"
//   name="add100"
//   onClick={this.handleAmountChange}
// >
//   1 trillion
// </button>
// {/* button to add $250 to account */}
// <button
//   type="button"
//   value="100"
//   name="add250"
//   onClick={this.handleAmountChange}
// >
//   10 trillion
// </button>
// {/* button to add $500 to account */}
// <button
//   type="button"
//   value="1000"
//   name="add500"
//   onClick={this.handleAmountChange}
// >
//   100 trillion 
// </button>  