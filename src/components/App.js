import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  render() {
    return (
      <form>
        <p>Name</p>
        <input placeholder='Name' type="text" />
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}

export default App;

