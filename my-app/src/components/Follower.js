import React from 'react'
import Axios from 'axios'

class Follower extends React.Component {

    state = {
        followerstuff: this.props.follower.login,
        personsInfo: []
    }
    componentDidMount() {
        Axios.get(`https://api.github.com/users/${this.state.followerstuff}`)
            .then(res => {
                console.log('ab: Followerjs:CDM: res', res.data)
                this.setState({
                    personsInfo: res.data
                })
            })
            .catch(err => console.log('can find followers urls', err))
    }



    render() {
        const { follower } = this.props
        return (
            <div key={follower.id}>
                <img alt={follower.login} src={follower.avatar_url} width='60' height='60' />
                <section>
                    <h2><a href={follower.html_url}>{this.state.personsInfo.name}'s GitHub</a></h2>
                    <p>Username: {this.state.personsInfo.login}</p>
                    {this.state.personsInfo.location !== null ? <p>Location: {this.state.personsInfo.location}</p> :
                        <></>}
                    {this.state.personsInfo.bio !== null ? <p>About: {this.state.personsInfo.bio}</p> :
                        <></>}
                    <p>Repos: {this.state.personsInfo.public_repos}</p>
                </section>
            </div>
        )
    }
}

export default Follower