import React, { Component } from 'react';
import './index.css'
import WrapEnvironmental_show1 from '../../assets/WrapEnvironmental-show1.png'
import WrapEnvironmental_show2 from '../../assets/WrapEnvironmental-show2.png'

export default class EnvironmentalProduct extends Component {
  render() {
    return (
        <section className='EnvironmentalProduct'>
            <div className='EnvironmentalProduct_top'>
                <h1>环保产品</h1>
                <p>日益严峻环境问题使得环保需求日益迫切，加之传感器技术本身的不断发展，正推动环境监测有望成为物
                联网（IoT）垂直领域中率先落地的亮点应用之一。纽腾对空气质量监测、气体传感器在有毒可燃易爆二氧化
                碳等气体探测、水环境传感器、土壤传感器等领域有着广泛的应用。充分利用物联网传感器技术体积小、费用
                低、布点灵活、用电方便等特点为传统企业赋能，从而为环境的精细化管理提供技术支持。</p>
                <div className='arrowmark'>
                    <i className='iconfont icon-boult-x'></i><br/>
                    <i className='iconfont icon-boult-x'></i>
                </div>
            </div>
            <div className='EnvironmentalProduct_wrap'>
                <ul>
                    <li><img src={WrapEnvironmental_show1} alt="#" /></li>
                    <li><img src={WrapEnvironmental_show2} alt="#" /></li>
                </ul>
            </div>
        </section>
    );
  }
}
