import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

    checkAll = (event) => {
        //根据全选是否选择 来更新item的选择
            this.props.checkAllTodo(event.target.checked)     
    }

    clearAllDone = () => {
        this.props.clearTodoDone()
    }
    render() {
        const { todos } = this.props
        //长度
        const nums = todos.length
        //选择的个数
        const sum = todos.reduce((pre,current) => {
            return pre + (current.done?1:0)
        }, 0)


        
        return (
            <div className="todo-footer">
                        <label>
                            <input type="checkbox" onChange={this.checkAll}  checked={nums===sum && nums!=0 ? true:false}/>
                        </label>
                        <span>
                            <span>已完成{sum}</span> / 全部{nums}
                        </span>
                        <button onClick={this.clearAllDone} className="btn btn-danger">清除已完成任务</button>
                    </div>
        )
    }
}
