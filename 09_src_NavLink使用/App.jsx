import React, { Component } from 'react'
import {NavLink,Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'//路由组件
import Header from './component/Header'//一般组件
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header b={2}/>
                    </div>
                   
                    </div>

                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                            {/* 原生中 靠a 来跳转 */}
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* 在react中 靠 路由链接 切换组件 */}
                            {/* to 后经量小写 不加点 */}  
                                <NavLink className="list-group-item" to="/about">About内容</NavLink>
                                <NavLink className="list-group-item" to="/home">Home内容</NavLink>                       
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/* 注册路由 */}
                                    <Routes>
                                        <Route path="/about" element={<About/>} />
                                        <Route path="/home" element={<Home/>}/>
                                    </Routes>
                               
                                                        
                                </div>
                            </div>
                     </div>        
                </div>
                
            </div>
        )
    }
}
