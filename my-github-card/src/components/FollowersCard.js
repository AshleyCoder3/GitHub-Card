import axios from 'axios'
import React from 'react'

class FollowersCard extends React.Component {
  state = {
    info: this.props.followers.login,
    personsInfo: []
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.info}`)
      .then(res => {
        console.log('ab: FollowersCard.js: res.data', res.data)
        this.setState({
          personsInfo: res.data
        })
      })
      .catch(err => {
        console.log('ab: FollowersCard.js: err', err)
      })
  }

  render() {
    return (
      <div>
        <img alt={this.state.personsInfo.name}
          src={this.state.personsInfo.avatar_url}
          width='10%' height='10%' />
        <h3><a href={this.state.personsInfo.html_url}>{this.state.personsInfo.name}</a></h3>
        <p>Number of Repos: {this.state.personsInfo.public_repos}</p>
      </div>
    )
  }
}

export default FollowersCard