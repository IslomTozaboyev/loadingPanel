import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Clock from './components/Clock';
import React from 'react';
import { Component } from 'react';
import Loading from './components/Loading';


class App extends React.Component {
  state = { Loading: false }
   
  loadingPanel = () => {
    this.setState((state) => {
      return { Loading: !state.Loading }
    })
  }
   
  render() {
    return (<div className="App">
      <div className="text-center pt-4">

        <Button color="primary" className="mb-3 button" onClick={this.loadingPanel} >
          {this.state.Loading && "Close" || "Open"}</Button> <br />
        
        {this.state.Loading && <Loading />}
      </div>
    </div>
     
    );
  }
}

export default App;
