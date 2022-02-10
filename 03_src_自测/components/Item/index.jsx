import { node } from 'prop-types'
import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

    //鼠标移入移出判断
    state = {
        mouseEnter:false
    }

    //修改状态的回调
    handleChange = (id) => {
        return (event) => {
            this.props.updateTodo(id,event.target.checked)
        }
    }
    //移入
    handleEnter = () => {
        const {mouseEnter} = this.state
        return () => {
             this.setState({mouseEnter:true})
         }
        
    }
    //移除
    handleLeave = () => {
        const {mouseEnter} = this.state
        return () => {
             this.setState({mouseEnter:false})
         }
    }
    //删除
    handleDelete = (id) => {
        if(window.confirm('是否删除'))
          this.props.deleteTodo(id)
    }

    render() {
        const { id, name, done } = this.props
        const {mouseEnter}= this.state
        return (
            <li style={{background:mouseEnter?'skyblue':'none'}} onMouseEnter={this.handleEnter()} onMouseLeave={this.handleLeave()}>
                <label >
                    <input checked={done} onChange={this.handleChange(id)} type="checkbox"/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouseEnter?'block':'none'}}>删除</button>
            </li>
        )
    }
}
