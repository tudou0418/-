import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {

    state = {
        users:[], //初始化状态 users初始值为数组
        isFirst:true,//是否第一次打开页面
        isLoading:false,    //是否处于加载中
        err:'',//存储请求相关的信息
    }

        //更新APP的 state
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }
 

    render() {
     
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
             <List {...this.state}/>
            </div>
        )
    }
}
