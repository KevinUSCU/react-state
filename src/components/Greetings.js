import React, { Component } from 'react';


class Greetings extends Component{
  constructor(props){
    super(props)

    this.state = { greeting: ['Roger']}

    // this.handleClick = this.handleClick.bind(this) //one way to attach the this from the button click to this object
  }

  // handleClick(e) {
  //   this.setState({ greeting: this.state.greeting + '!' })
  // }

  // handleClick = (e) => { //another way to attach the this
  //   this.setState({ greeting: this.state.greeting + '!' })
  // }

  handleSubmit = (e) => { //another way to attach the this
    e.preventDefault()
    this.setState({ greeting: [e.target.personName.value, ...this.state.greeting] })
    e.target.personName.value = '' //clears out the input box after submit
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='personName' />
          <button>Click me!</button>
          {/* <button onClick={this.handleClick}>Click me!</button> */}
          {/* <button onClick={(e) => {this.handleClick(e)}}>Click me!</button> //another way to attach this */}
        </form>
        <div>
          { this.state.greeting }
        </div>
      </div>
    )
  }
}

export default Greetings;
