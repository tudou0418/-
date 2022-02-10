import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import {nanoid} from 'nanoid'
export default class Header extends Component {

    //类型判断 必须要是方法不能为空
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const { keyCode, target } = event
        if (keyCode !== 13) return
        console.log("target===" + target.value)
        //不能为空 掉字符串两端的多余的空格
        if (target.value.trim() === '') {
            alert('输入不能为空') 
            return
        } 
        


        //创建一个传入的 todo
        const todoObj = { id: nanoid(), name: target.value, done: true }
        console.log("nanoid==" + nanoid())
        if(!window.confirm('是否需要添加')) return
        target.value = ''
        this.props.addTodo(todoObj)
    }

    render() {
        return (
               <div className="todo-header">
                        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                    </div>
        )
    }
}
