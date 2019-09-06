import React from 'react';
import './App.css';
import DarkMode from './hooks/CustomHook.js';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
      
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
    const { theme, toggleTheme } = useDarkMode()
    return(
      <div className="App">
         <div
      style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      <button type="button" onClick={toggleTheme}>
        Switch theme
      </button>
    </div>

      <UserCard user={this.state.user} />
      </div>
    )
  }

  
}


function UserCard(props) {

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
