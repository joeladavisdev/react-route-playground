import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    //const [stateName, stateUpdateFunctionName] = Initial state
    
    return (
        <div className="wrapper">
            <h1>Counter</h1>
            <button className="btn" onClick={() => setCount(count - 1)}>Count down</button>
            <button className="btn" onClick={() => setCount(count + 1)}>Count up</button>
            <div style={{count}}>{count}</div>
        </div>
    )
    
}

// import React, { Component } from "react";

// class Counter extends Component {
//     constructor() {
//         super();
//         this.state = {
//             number: 0
//         }
//     }

//     handleClick = (count) => {
//         this.setState(prevState => ({number: prevState.number + count}))
//     }

//     render() {
//         return (
//             <div className="wrapper">
//                 <h1>Counter</h1>
//                 <button className="btn" onClick={() => this.handleClick(-1)}>Count down</button>
//                 <button className="btn" onClick={() => this.handleClick(1)}>Count up</button>
//                 <div style={{number: this.state.number}}>{this.state.number}</div>
//             </div>
//         )
//     }
// }
// export default Counter


