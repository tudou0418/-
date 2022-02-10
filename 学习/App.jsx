import React, { Component } from 'react'
import Example from './component/Example'
import FriendStatus from './component/FriendStatus'
export default class App extends Component {
    render() {
        return (
            <div>
                <Example/>
                <FriendStatus/>
            </div>
        )
    }
}
