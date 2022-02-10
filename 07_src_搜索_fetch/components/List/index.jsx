import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class Search extends Component {
    state = {
        users:[], //初始化状态 users初始值为数组
        isFirst:true,//是否第一次打开页面
        isLoading:false,    //是否处于加载中
        err:'',//存储请求相关的信息
    }

     componentDidMount(){
        //挂载就订阅
        this.token = PubSub.subscribe('tudou',(_,stateObj)=>{
            //收到数据
            //console.log("list收到",stateObj)
            this.setState(stateObj)
        })
    }
    //组件将要卸载
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,isLoading,err} =this.state
        return (
            <div className="row">
                {
                    isFirst?<h2>欢迎使用，请输入</h2>:
                    isLoading?<h2>加载中。。。。。</h2>:
                    err?<h2 style={{color:'red'}}>{err}</h2>:
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                <img alt='head_portrait ' src={userObj.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
            }
        </div>
        )
    }
}
