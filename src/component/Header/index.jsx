
import React, { Component } from 'react'
import imgURL from '../../assets/logo.png';
import './index.css'
export default class Header extends Component {

    state = {
        isChangeStyle : 0
    }

    handleScroll = () =>{
        //拿到视高
       const clientHeight =  document.documentElement.clientHeight
       //拿到滚动高度
       const scrollHight = window.scrollY;
       this.setState({isChangeStyle:scrollHight > 30? 1:0})
    }

    componentDidMount(){
       window.addEventListener("scroll",this.handleScroll)
    }
//  <nav className={`${isChangeStyle} === 1?'nav_main':'nav_main'}`}>
    render() {
        const {isChangeStyle} = this.state
        return (
           <header>
            <nav className={`${isChangeStyle === 1?'sticky':'nav_main'}`}>
                <a  className='header_logo'>
                        <img src={imgURL}/>
                    </a>
                <ul className='header_nav'>
                    <li><a>首页</a></li>
                    <li><a>业务范围</a></li>
                    <li><a>行业优势</a></li>
                    <li><a>案例展示</a></li>
                    <li><a>合作企业</a></li>
                    <li><a>关于纽腾</a></li>
                </ul>
            </nav>
           </header>
           
        )
    }
}
