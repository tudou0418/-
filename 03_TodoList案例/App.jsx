import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
//状态在哪里。操作状态的方法就在哪里

//初始化状态 并把这个状态通过prpos传递给 List用于遍历
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '学习', done: false },
            { id: '004', name: '撸猫', done: false },
        ]
           
    }
//用于添加 一个tod 接受参素是一个对象
    addTodo = (todoObj) => {
       //获取原todos
        const { todos } = this.state
        //追加数组
        const newTodos = [ todoObj, ...todos ]
        //更新状态
        this.setState({todos:newTodos})
    }
    //勾选的时候 用于更新todo对象 
    updateTodo = (id,done) => {
        //获取状态中的todos
        const { todos } = this.state
        //匹配处理数据
       const newTodos =  todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
       })
        //更新状态
        this.setState({todos:newTodos})
    }

    //用于删除一个todo
    deleteTodo = (id) => {
        //获取原来啊的todos
        const {todos} = this.state
        //删除指定id的todo对象
        const newTodos = todos.filter((todoObj) => {
            //返回 不会为穿过来的id 相当于删除了该id对应的todo
            return todoObj.id !==id

        })
        //更新状态
        this.setState({todos:newTodos})
        
    }

    //用于全选
    checkAlltodo = (done) => {
        //获取原来的todo
       const { todos } = this.state
        //加工
       const newTodos =  todos.map((todoObj) => {
           return { ...todoObj, done:done}
       })
        //更新状态
        this.setState({todos:newTodos})
    }

    //用于清除所有已完成
    clearAllDone = () => {
        //获取原来的todos
        const { todos } = this.state
        //过滤数据
        const newTodos = todos.filter((todoObj) => {
            //筛选条件
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }


    render() {
        const {todos} = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                       <Header addTodo={this.addTodo}/>
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAlltodo={this.checkAlltodo} clearAllDone={this.clearAllDone}/>
                    </div>
                </div>
            </div>
        )
    }
}
