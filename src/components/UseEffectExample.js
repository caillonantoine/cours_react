import React, { useEffect, useState } from "react";

const UseEffectExample = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(inc, 1000);
  }, []);

  const inc = () => {
    setCount((currentCount) => currentCount + 1);
    // setCount(count + 1); // FAUX: la valeur de count n'est pas à jour
  };

  return (
    <div>
      <p>Current count: {count}</p>{" "}
    </div>
  );
};

// import React from "react";
// class UseEffectExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     setInterval(this.inc.bind(this), 1000);
//   }

//   inc() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>Current count: {this.state.count}</p>
//       </div>
//     );
//   }
// }

export default UseEffectExample;
