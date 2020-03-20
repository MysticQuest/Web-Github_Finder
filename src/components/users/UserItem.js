import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        id: 'id',
        login: 'Mystic Quest',
        avatar_url: 'https://avatars2.githubusercontent.com/u/9077026?s=400&v=4',
        html_url: 'https://github.com/MysticQuest'
    }

    render() {
        const { id, login, avatar_url, html_url } = this.state;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" style={{ width: '60px' }} className="round-img" />
                <h3>{login}</h3>

                <div><a href={html_url} className="btn-dark btn-sm btn my-1"> More </a>
                </div>
            </div>
        )
    }
}

export default UserItem
