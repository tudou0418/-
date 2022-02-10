import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {

    state = {
        todos: [
            {id:'001',name:'火锅',done:false},
            {id:'002',name:'串串',done:true},
            {id:'003',name:'干锅',done:false}
        ]
    }

    //插入数据
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [...todos, todoObj]
        this.setState({todos:newTodos})
    }
    //修改选择框
    updateTodo = (id,done) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            if (id === todo.id) return {...todo,done}
            else  return todo
        })
        this.setState({todos:newTodos})         
    }

    //删除
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => {
            return todo.id !== id
        })
        this.setState({todos:newTodos})
    }

    //全选
    checkAllTodo = (checked) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            return { ...todo, done:checked}
        })
        this.setState({todos:newTodos})
    }

    //清除已完成
    clearTodoDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => {
            console.log(todo.done)
            //return todo.done ==false
            return !todo.done
        })
        this.setState({todos:newTodos})
    }


    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearTodoDone={this.clearTodoDone}/>                   
                </div> 
            </div>
            
        )
    }
}
