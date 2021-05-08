import React from 'react'

class GithubCard extends React.Component {
    render() {
        const { user } = this.props

        return (
            <div>
                <img alt={user.name} src={user.avatar_url} />
                <section>
                    <p>About: {user.bio}</p>
                    <p>Location: {user.location}</p>
                    <p>Followers: {user.followers} * <span>Following: {user.following}</span></p>

                </section>

            </div>
        )
    }
}

export default GithubCard