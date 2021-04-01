import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Nombre de clics: {count}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>Nombre de clics: {this.state.count}</p>
//         <button onClick={this.handleClick.bind(this)}>click me</button>
//       </div>
//     );
//   }
// }

export default Counter;

