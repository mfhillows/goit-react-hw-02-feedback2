import React from "react";

import s from "./Counter.module.css"

class Counter extends React.Component {

    state = {
        value:6
}

    handleIncrement = () => {
        console.log("NNN")
        console.log(this)
    }

        handleDecrement = () => {
        console.log("ZZZ")
        console.log(this)
    }

    render() {
        return (<div className={s.Counter}>
            <span className="CounterValue">{ this.state.value}</span>
            <div className={s.CounterControls}>
                <button type="button" onClick={this.handleIncrement}>Increase +1</button>
                <button type="button" onClick={this.handleDecrement}>Decrease -1</button>
            </div>
      </div>)
    }
}

export default Counter;
