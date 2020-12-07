import React, { Component } from 'react';
import Counter from '../components/Counter/Counter.js';

class CounterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            parityType: 'Чётное'
        }
    }

    getParityType = () => {

        const parity = this.state.countValue % 2 !== 0 ? 'Чётное' : 'Нечётное';

        this.setState({ parityType: parity });
    }

    handleAdd = () => {

        this.setState({ countValue: this.state.countValue + 1 });

        this.getParityType();
    }

    handleRemove = () => {
        this.setState({ countValue: this.state.countValue - 1 });

        this.getParityType();
    }

    resetCounter = () => {
        this.setState({ countValue: 0 });

        this.setState({ parityType: 'Чётное' });
    }

    render() {
        return (
            <Counter counterValue={this.state.countValue} parityType={this.state.parityType.toLowerCase()} resetCounter={this.resetCounter} handleAdd={this.handleAdd} handleRemove={this.handleRemove} />
        );
    }
}


export default CounterContainer; 