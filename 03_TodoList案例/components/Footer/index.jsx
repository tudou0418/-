import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

    //全员checkbox的回调
    handleCheckAll = (event) => {
        this.props.checkAlltodo(event.target.checked)
    }

    //清楚所有已经完成的回调
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props
        //计算已完成个数
        const doneCount = todos.reduce((pre, todo) => {
//箭头函数的函数体只有一句话 可以省略花括号和 return
            return pre + (todo.done?1:0)
        }, 0)
        //总数
        const total = todos.length
        return (
            <div>
                  <div className="todo-footer">
                    <label>
                        <input type="checkbox"  onChange={this.handleCheckAll} checked={doneCount ===total && total!=0?true:false}/>
                    </label>
                    <span>
                      <span>已完成{doneCount}</span> / 全部{total}
                    </span>
                    <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        )
    }
}
