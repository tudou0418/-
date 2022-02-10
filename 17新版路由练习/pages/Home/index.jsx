import React, { Component } from 'react'
import {NavLink,Outlet} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
         <div>
         <h2>Home组件内容</h2>
            <div>
            <ul className="nav nav-tabs">
                <li>
                    <NavLink className="list-group-item" to="/home/news">News</NavLink>
                </li>
                <li>
                    <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                </li>
            </ul>
            
            <div>
            {/* // ... 自己组件的内容
            // 留给子组件Child的出口 */}
             <Outlet />
            </div>
            
            
            
            </div>
         </div>
        )
    }
}
