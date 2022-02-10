import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class List extends Component {

    search = () => {
        //获取用户输入  要么ref获取虚拟DOM 要么受控组件
        //console.log(this.keyWorldElement.value)
        //连续解构赋值 只能拿到value 加重命名
        const { keyWorldElement: { value:keyword}} = this
        //发送请求前通知List更新状态     
        //this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('tudou',{isFirst:false,isLoading:true})
        //console.log(keyword)
        //发送网络请求  一定要在3000后配置代理
        //`http://localhost:3000/api1/search/users?q=${keyword}` 站在3000给3000发请求 前面可省略
        axios.get(`/api1/search/users?q=${keyword}`).then(
            response => {
                //console.log('成功了', response.data)
                //请求成功通知app更新状态
                // this.props.updateAppState({isLoading:false,users:response.data.items})
                PubSub.publish('tudou',{isLoading:false,users:response.data.items})
             },
            //请求失败通知app更新状态
            error =>{
                 //this.props.updateAppState({isLoading:false,err:error.message})
                 PubSub.publish('tudou',{isLoading:false,err:error.message})
             }
        )
    }

    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">搜搜github用户</h3>
            <div>
                    <input  ref={c =>this.keyWorldElement = c} type="text" placeholder="输入关键字搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
            </div>
            </section>
        )
    }
}
