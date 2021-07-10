import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: []
    }
  }


  render() {
    return (
      <div className="App">
        <p>My Github card</p>
        <p>Followers card... maped over each follower</p>
      </div>
    );
  }
}
export default App;
