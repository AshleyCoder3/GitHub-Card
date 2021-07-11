import React from 'react'

class GithubCard extends React.Component {

  render() {
    const { user } = this.props
    return (
      <div>
        <h1><a href={user.html_url}>{user.name}'s Github</a></h1>
        <p>{user.bio}</p>
        <img alt={user.name} src={user.avatar_url} />
        <p>Followers: {user.followers} Following:{user.following}</p>
      </div>
    )
  }
}

export default GithubCard