import React from 'react';
import NameList from './NameList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      nameList: []
    }
  }

  handleOnSubmit = (event) =>{
    debugger
    event.preventDefault()
    
    this.setState({
      nameList: this.state.nameList.concat(this.state.name),
      name:event.target.value  
    })
    document.getElementById("name").value = ""

  }
  addName = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleOnSubmit}>
          <input 
            name="name" id="name" 
            type="text" 
            placeholder="Add a name to the list" 
            autocomplete="off" 
            onChange={this.addName} 
            required
          />
          <button onClick={this.handleOnSubmit}>Add To List</button>
        </form>
        <h1>{this.state.name}</h1>
        <NameList nameList = {this.state.nameList}></NameList>
      </div>
    )
  }
}
  



export default App;