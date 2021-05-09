import React from 'react'
import Axios from 'axios'
import Follower from './Follower'


class Followers extends React.Component {
    state = {
        followers: []
    }
    componentDidMount() {
        Axios.get('https://api.github.com/users/aburn7577/followers')
            .then(res => {
                // console.log('ab: FollowersCard.js:CDM: res', res.data)
                this.setState({
                    followers: res.data
                })
            })
            .catch(err => console.log('can find followers urls', err))
    }


    render() {
        return (
            <div className='follower-card'>
                {this.state.followers.length === 0 ? <div>There is no followers</div> :
                    this.state.followers.map(follower => (
                        <Follower follower={follower} key={follower.id} />
                    ))
                }
            </div>
        )
    }
}
export default Followers