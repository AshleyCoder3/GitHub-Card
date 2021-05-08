import React from 'react'
import Axios from 'axios'
import './App.css';
import GithubCard from './components/GithubCard'
import FollowersCard from './components/FollowersCard'

//https://api.github.com/users/<your name>
//https://api.github.com/users/< Your github name >/followers

class App extends React.Component {
  state = {
    user: [],
  }
  componentDidMount() {
    Axios.get('https://api.github.com/users/aburn7577')
      .then(res => {
        console.log('ab: App.js: CDM: res:', res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log('unable to retrieve users:', err))
  }


  render() {
    return (
      <div className="App">
        <h1><a href={this.state.user.html_url}>{this.state.user.name}'s GitHub</a></h1>
        <GithubCard user={this.state.user} />
        <FollowersCard followers={this.state.user.followers_url} />
      </div>
    );
  }
}

export default App;
