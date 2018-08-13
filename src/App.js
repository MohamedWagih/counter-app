import React, { Component } from 'react';
import CountersList from './components/CountersList/CountersList';
import Navbar from './components/Navbar/Navbar';
import Aux from './components/hoc/Aux';

class App extends Component {
  state = {
    counters:[0,1,100],
    max:0
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

  setMaxHandler = (m) => {
    this.setState({max:m});
  }

  resetHandler= ()=>{
    this.setState({counters:[0,1,100]});
  }

  render() {
    let max = this.state.counters.reduce((a, c) => (c > a) ? c : a, 0);
    return (
      <Aux>
        <Navbar max={max}/>
        <div className='container-fluid'>
          <h1> Hello </h1>
          <CountersList
            counters = {this.state.counters}
            add={this.incHandler}
            minus={this.decHandler}
            create={this.addCounterHandler}
            delete={this.deleteCounterHandler}
            setMax={this.setMaxHandler}
            reset={this.resetHandler}/>
        </div>
      </Aux>
    );
  }
}

export default App;
