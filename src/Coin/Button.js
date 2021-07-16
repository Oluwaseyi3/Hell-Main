import React, { Component } from 'react';

class Button extends Component {
    render(props) {
        return (
            <div>
                 <button
     type="button"
     value="1"
     name="add50"
     onClick={this.props.handleAmountChange}
   >
     100 million
   </button>
   {/* button to add $100 to account */}
   <button
     type="button"
     value="10"
     name="add100"
     onClick={this.props.handleAmountChange}
   >
     1 trillion
   </button>
   {/* button to add $250 to account */}
   <button
     type="button"
     value="100"
     name="add250"
     onClick={this.props.handleAmountChange}
   >
     10 trillion
   </button>
   {/* button to add $500 to account */}
   <button
     type="button"
     value="1000"
     name="add500"
     onClick={this.props.handleAmountChange}
   >
     100 trillion 
   </button>
            </div>
        );
    }
}

export default Button;