import React, { Component } from 'react';

import Slider, { createSliderWithTooltip } from "rc-slider";

class SliderBar extends Component {
    render(props) {

        return (
            <div>
            
            <div style={{ margin: 50 }}>
          
             <div style={{marginLeft: "40%"}}>

             <Slider min={1} max={10} onChange={this.props.onSliderChange}  style={{width: "40%"}}
                railStyle={{
                  height: 1
                }}
              handleStyle={{height: 18,   width: 18,   marginTop: -7, marginLeft: -7,   backgroundColor: "red",   border: 4}}
              trackStyle={{
               background: "none"
              
          }}
        />
             
           <br/>
            </div>
           </div>
                
            </div>
        );
    }
}

export default SliderBar;