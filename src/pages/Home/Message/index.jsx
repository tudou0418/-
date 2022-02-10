import React, { Component } from 'react'
import { Outlet,Link} from 'react-router-dom'


export default class Message extends Component {
    state = {
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'}
        ]
    }
    render() {
        return (
            <div>
                <ul>
                {
                    this.state.messageArr.map(ele=>{
                        return(
                            <li key={ele.id}>
                            {/* 向路由组件传递参数（路由组件就需要接受） */}
                                <Link to={`/home/message/detail/${ele.id}/${ele.title}`}>{ele.title}</Link>
                            </li>
                        )
                    })
                  
                }
                </ul>
                <Outlet/>
            </div>
        )
    }
}
