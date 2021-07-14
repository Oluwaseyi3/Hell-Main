// import React from "react";
// import ReactDOM from "react-dom";
// //import Slider, { Rail, Handles, Tracks, Ticks } from "react-compound-slider";
// import Slider, { createSliderWithTooltip } from "rc-slider";

// import "rc-slider/assets/index.css";
// //import "./styles.css";



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0
//     };
//   }
//   onSliderChange = value => {
//     this.setState(
//       {
//         value
//       },
//       () => {
//         console.log(this.state.value);
//       }
//     );
//   };

//   render() {
//     return (
//       <div style={{ margin: 50 }}>
//         <p>{this.state.value}</p>
//         <p>Basic Slider</p>
//         <Slider
//           min={0}
//           max={10}
//           value={this.state.value}
//           onChange={this.onSliderChange}
//           railStyle={{
//             height: 2
//           }}
//           handleStyle={{
//             height: 28,
//             width: 28,
//             marginLeft: -14,
//             marginTop: -14,
//             backgroundColor: "red",
//             border: 0
//           }}
//           trackStyle={{
//             background: "none"
//           }}
//         />
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
