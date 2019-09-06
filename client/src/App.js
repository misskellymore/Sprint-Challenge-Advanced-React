import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log("first render - DidMount")

    //fetch
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(data => this.setState({user: data}));

      
  }

  componentDidUpdate() {
    console.log("runs on every rerender -DidUpdate", this.state);
  }


  render() {
    return(
      <div className="App">
      
      </div>
    )
  }

  
}




export default App;
