import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'    


export default class Header extends Component {

    //对接受的 props 进行类型 必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // 键盘事件的回调 绑定的元素和操作的元素是同一个元素（给input绑定 拿input值） 这里可以不用用ref
    handleKeyUp = (event) => {
        const { keyCode, target } = event
        //判断是否回车
        if (keyCode !== 13) return
        //添加的todo不能为空
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
         //准备好一个对象
        const todoObj = { id: nanoid(), name: target.value, done: false}
        //addTodo是App通过props传过来的 方法 
        this.props.addTodo(todoObj)
        //清空输入
        target.value = ''
    }

    render() {
        return (
            <div>
                <div className="todo-header">
                            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                    </div>
            </div>
        )
    }
}

