import React, {useState} from 'react'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Button = (props) => {
    const [amount, setAmount] = React.useState(0)

   

   

    return (
        <div>

               <button
                type="button"
                value="1"
                name="add50"
                onClick={props.handleAmountChange}
              >
                100 million
              </button>
              {/* button to add $100 to account */}
              <button
                type="button"
                value="10"
                name="add100"
                onClick={props.handleAmountChange}
              >
                1 trillion
              </button>
              {/* button to add $250 to account */}
              <button
                type="button"
                value="100"
                name="add250"
                onClick={props.handleAmountChange}
              >
                10 trillion
              </button>
              {/* button to add $500 to account */}
              <button
                type="button"
                value="1000"
                name="add500"
                onClick={props.handleAmountChange}
              >
                100 trillion 
              </button>
              {/* input to add any amount user selects to account */}
              <label>$</label>
              {/* <input
                type="text"
                name="addValue"
                placeholder="Enter Amount"
                onChange={handleChange}
              /> */}
              <br />
              {/* submit button that dynamically renders account amount to */}
              {/*increase their account */}
              {/* <input
                type="submit"
                value={`Add ${amount || 0}x to account`}
              /> */}
     
            
        </div>
    )
}

export default Button
