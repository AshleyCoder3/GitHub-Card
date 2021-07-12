import React from 'react'
import Axios from 'axios'

import FollowersCard from './FollowersCard'

class Followers extends React.Component {
  state = {
    followers: []
  }
  componentDidMount() {
    Axios.get('https://api.github.com/users/aburn7577/followers')
      .then(res => {
        //console.log('ab: Followers.js: res.data', res.data)
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log('ab: Followers.js: err', err)
      })
  }

  render() {
    return (
      <div>
        {this.state.followers.length === 0 ?
          <div>There are no followers</div> : this.state.followers.map(follower => (
            <FollowersCard followers={follower} key={follower.id} />))
        }
      </div>
    )
  }
}

export default Followers