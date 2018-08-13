import React, { Component } from 'react';
import classes from './Counter.css';

class Counter extends Component {
   
    render() {
        let x = false;
        if(this.props.count < 1)
            x = true;

    return (
        <div className=''>
            <div className={'row justify-content-center '+ classes.row}>
                <div className={'col-2 '+ classes.col2}>
                    <p>{this.props.count}</p>
                </div>
                <div className={'col-2 '+ classes.col2}>
                    <button className='btn btn-secondary' onClick={()=>this.props.add(this.props.id)}>+</button>
                </div>
                <div className={'col-2 '+ classes.col2}>
                    <button className='btn btn-secondary' disabled={x} onClick={()=>this.props.minus(this.props.id)}>-</button>
                </div>
                <div className={'col-2 '+ classes.col2}>
                    <button className='btn btn-danger' onClick={()=>this.props.delete(this.props.id)}>delete</button>
                </div>
            </div>
        </div>
    );
    }
}

export default Counter;
