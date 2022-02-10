/* eslint-disable */
import React, { Component } from 'react';
import './index.css'
import advantage_1 from '../../assets/advantage-1.png'
import advantage_2 from '../../assets/advantage-2.png'
import advantage_3 from '../../assets/advantage-3.png'
import advantage_4 from '../../assets/advantage-4.png'
import flotage17 from '../../assets/flotage17.png'
export default class IndustrialAdvantage extends Component {
  render() {
    return (
        <section className='IndustrialAdvantage'>
            <div className='IndustrialAdvantage_wrap'>
                <div className='IndustrialAdvantage_top'>
                    <h3>行业优势</h3>
                    <p>Our Advantage</p>
                </div>
                <div className='IndustrialAdvantage_bottom'>
                    <ul>
                        <li>
                            <img src={advantage_1} alt='#'/>
                            <h3>管理项目</h3>
                            <p>PMP标准化管理, 提供高效率全方面的项目执行力。</p>
                        </li>
                        <li>
                            <img src={advantage_2} alt='#'/>
                            <h3>交互设计</h3>
                            <p>PMP标准化管理, 提供高效率全方面的项目执行力。</p>
                        </li>
                        <li>
                            <img src={advantage_3} alt='#'/>
                            <h3>技术开发</h3>
                            <p>8年精湛开发经验, 铸就专注专业专心的技术服务商。</p>
                        </li>
                        <li>
                            <img src={advantage_4} alt='#'/>
                            <h3>客户服务</h3>
                            <p>5S项目全程服务, 贯通客户利益导向的沟通协调力。</p>
                        </li>
                       
                    </ul>
                    <img src={flotage17} className='IndustrialAdvantage_flotage17'/>
                </div>
            </div>
            
        </section>
    );
  }
}
