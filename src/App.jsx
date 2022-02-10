import React, { Component } from 'react'
import Header from './component/Header'
import Container from './component/Container'
import Footer from './component/Footer'
import './App.css'
import './assets/fonts/iconfont.css';
export default class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        )
    }
}
