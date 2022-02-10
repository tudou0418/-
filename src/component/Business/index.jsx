import React, { Component } from 'react';
import business_1  from '../../assets/business-1.png';
import business_2  from '../../assets/business-2.png';
import business_3  from '../../assets/business-3.png';
import business_4  from '../../assets/business-4.png';
import business_5  from '../../assets/business-5.png';
import business_6  from '../../assets/business-6.png';
import business_7  from '../../assets/business-7.png';
import business_8  from '../../assets/business-8.png';
import business_9  from '../../assets/business-9.png';
import business_10  from '../../assets/business-10.png';
import business_11  from '../../assets/business-11.png';
import business_12  from '../../assets/business-12.png';
import './index.css'
export default class index extends Component {
    state ={
        isRotate : 0
    }
    handleScroll = () =>{
        //拿到视高
       const clientHeight =  document.documentElement.clientHeight
       //拿到滚动高度
       const scrollHight = window.scrollY;
       this.setState({isRotate:scrollHight > 593 ? 1:0})
    }
    componentDidMount(){
        //监听滚动事件
       window.addEventListener("scroll",this.handleScroll)
    }
    addClassName = ()=>{
        const business = document.getElementsByClassName('business')
        const listLi = business[0].getElementsByTagName('li')
        for(let i = 0 ;i< 3;i++){
             listLi[i].className='flip'
        }
        for(let i = 3 ;i< 6;i++){
            listLi[i].className='flip1'
        }
       for(let i = 6 ;i< 9;i++){
        listLi[i].className='flip2'
        }
        for(let i = 9 ;i< 12;i++){
            listLi[i].className='flip3'
        }
    }

  render() {
    //   console.log(window.scrollY)
      if(this.state.isRotate === 1){
        this.addClassName()
      }
    return (
        // 业务范围
        <section>
            <div className='lineOfBusiness'>
                <div className='lineOfBusiness_top'>
                    <h3>业务范围</h3>
                    <p>Line of business</p>
                </div>
                <div className='lineOfBusiness_wrap'>
                    <ul className='business'>
                        <li>
                            <img src={business_1} alt='#' />
                            <p>互联网+商业咨询</p>
                        </li>
                        <li>
                        <img src={business_2} alt='#'/>
                            <p>软件产品设计</p>
                        </li>
                  
                        <li>
                            <img src={business_3} alt='#'/>
                            <p>UI/UE设计</p>
                        </li>

                        <li>
                            <img src={business_4} alt='#'/>
                            <p>系统开发与集成</p>
                        </li>
                        <li>
                             <img src={business_5} alt='business_5'/>
                            <p>高端网站定制</p>
                        </li>
                        <li>
                            <img src={business_6} alt='business_6'/>
                            <p>软件项目实施监控</p>
                        </li>
                        <li>
                            <img src={business_7} alt='business_7'/> 
                            <p>APP开发</p>
                        </li>
                        <li>
                            <img src={business_8} alt='business_8'/>
                            <p>微信公众号开发</p>
                        </li>
                        <li>
                            <img src={business_9} alt='business_9'/>
                            <p>微信小程序开发</p>
                        </li>
                        <li>
                            <img src={business_10} alt='business_10'/>
                            <p>软件测试</p>
                        </li>
                        <li>
                            <img src={business_11} alt='business_11'/>
                            <p>营销策划</p>
                        </li>
                        <li>
                            <img src={business_12} alt='business_12'/>
                            <p>运营推广</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>  
    );
  }
}
