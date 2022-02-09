import React, {Component} from 'react'

class App extends Component{
  menssage = () => {
    return ["Olá"]
  };
  math = () =>{
    return [3 *2]
  };
  render(){
    return(
      <div>
        <p>{this.menssage()[0]}</p>
        <p>{this.math(2)[0]}</p>
      </div>
    )
  }
}

export default App