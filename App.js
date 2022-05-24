import React, { Component } from 'react'

class TodoApp extends React.Component {
constructor(props) {
super(props)
this.state = {
    render: false
}
this.alertHi = this.alertHi.bind(this);
}

alertHi() {
 this.setState({render: !this.state.render});
}

render() {
  return(
  <div className="App">
    <button onClick={this.alertHi}>Enter</button>
    {this.state.render && <h1>Hi</h1>}
  </div>
  );
 }
