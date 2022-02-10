//创建外壳组件App
import React,{Component} from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
//创建并暴露app组件
export default class App extends Component{
    render() {
        return (
            <div>
                <Hello />
                <Welcome />              
            </div>
        )
    }
}

//暴露APP组件
//export default App