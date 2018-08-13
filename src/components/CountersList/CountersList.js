import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import classes from './CountersList.css';

class CountersList extends Component {
    state = {
        counters:[0,1,5]
    }

    constructor(props){
        super(props);
        // let m = this.state.counters.reduce((a, c) => (c > a) ? c : a, 0);
        // this.props.setMax(m);
        console.log('constructor');
    }

    componentDidMount(){
        let m = this.state.counters.reduce((a, c) => (c > a) ? c : a, 0);
        console.log('did mount' ,m);
        // this.props.setMax(m);
    }

    incHandler = (id) =>{
        let tmp = this.state.counters;
        tmp[id] += 1;
        this.setState({counters: tmp});
    }

    decHandler = (id) =>{
        let tmp = this.state.counters;
        tmp[id] -= 1;
        this.setState({counters: tmp});
    }

    deleteCounterHandler = (id) => {
        let tmp = this.state.counters;
        tmp.splice(id,1);
        this.setState({counters: tmp});
    }

    addCounterHandler = () => {
        let tmp = this.state.counters;
        tmp.push(1);
        this.setState({counters: tmp});
    }



    render() {
    
    return (
        <div className='row justify-content-center'>
            <div className={'col-12 col-sm-12 col-md-6 ' + classes.container}>
                {this.props.counters.map( (n,i) =>
                    <Counter key={i} count={n} id={i} add={this.props.add} minus={this.props.minus} delete={this.props.delete}/>
                )}
                <div className='row justify-content-center mb-2'>
                    <div className='col-3'>
                        <button className={'btn btn-secondary ' + classes.resetBtn} onClick={this.props.create}>Add</button>
                    </div>
                    <div className='col-3'>
                        <button className={'btn btn-primary ' + classes.resetBtn} onClick={this.props.reset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default CountersList;
