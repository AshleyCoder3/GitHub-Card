import React from 'react'
import './App.css';
import Axios from 'axios'

import GithubCard from './components/GithubCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/aburn7577')
      .then(res => {
        console.log('ab: app,js: res.data', res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => {
        console.log('ab: app.js:err', err)
      })
  }


  render() {
    return (
      <div className="App">
        <GithubCard user={this.state.user} />
        <p>Followers card... maped over each follower</p>
      </div>
    );
  }
}
export default App;
