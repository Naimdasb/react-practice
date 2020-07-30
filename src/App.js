import React, { Component } from 'react';
import Validation from './components/ValidationComponent'
import CharComponent from './components/CharComponent'

class App extends Component {

  state = {
    input: '',
   
  }

  changeHandler = (event) => {
    this.setState({
      input: event.target.value,
      
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.input.split('');
    text.splice(index,1)
    const updatedText = text.join('')
    this.setState({input:updatedText})
  }



  render () {
    
   const map = this.state.input.split('').map((c,index) => {
      return <CharComponent 
      clicked={() => this.deleteCharHandler(index)}
      key={index} 
      c={c} 
      
      />
    })

    
    return (
      <div>
        <input 
          type="text" 
          onChange={(event) => this.changeHandler(event)} 
          value={this.state.input} 
        />
        <p>Your input is {this.state.input.length} char long</p>
        <Validation length={this.state.input.length}/>
        {map}
      </div>
    );
  }
}

export default App;
