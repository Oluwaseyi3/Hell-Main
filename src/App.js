
import React, { Component } from 'react';
import './App.css';
import CoinToss from './Coin/CoinToss';
import Roulette from './Roulette/Roulette'
import Governmental from './Governmental/governmental'
import background from './Coin/background.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




const bets = [];
let contract;
let lastPosition = 0;
let wheelSpinCounter = 0;
let firstBetAfterSpin = true;
let web3Provider = null;
let lastBlockEvent = 0;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "",
      nader: "nader"
    };
    this.coinToss = this.coinToss.bind(this);
  }
  coinToss() {
    this.setState({ nader: "" }, () => {
      if (Math.random() < 0.5) {
        this.setState({ result: "heads" });
        console.log("heads");
      } else {
        this.setState({ result: "tails" });
        console.log("tails");
      }
    });
  }
  async handleSpinClick(){
    //const newPrize = await token.methods.bet(0,1).send({
      //from: accounts[0],
      //value: web3.utils.toWei('0.1', 'ether')
    //})
  }
  render() {
    return (
      <Router>
      <div className="App">
        
      <Switch>
        <Route path='/coin'>
        <div style={{ backgroundImage: `url(${background})` }}>
          <CoinToss/>
        </div>
        </Route>
        <Route path='/roulette'>
        <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat', width: '100vw',height: '100vh'}}>
          <Roulette/>
          </div>
        </Route>
        <Route path='/fate'>
        <Governmental/>
        </Route>
      </Switch>
      
      </div>
      </Router>
    );
  }

}

export default App;
