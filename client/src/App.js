import React from 'react';
import './App.css';
import Button from './Button.js';
import useDarkMode from '../src/hooks/useDarkMode.js';





class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
      Button,
      useDarkMode
      
      
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

      <div className="App" 
      data-testid="testing">         
      
      <Button button = {this.state.Button} />     
      <UserCard user={this.state.user} />
      </div>
    )
  }

  
}


export const UserCard = (props) => {

  return(
    <div>
        
        
        <div className="users">

{props.user.map(users => (
<div key={users.id}>           
  <h3>{users.name}</h3>
  <p> Country: {users.country || "Unknown"} </p>
  <p> Searches: {users.searches || "Unknown"} </p>                          
</div>
))}

              
</div>

        


    </div>
  );    
}



export default App;
