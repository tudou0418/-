/* eslint-disable */
import React, { Component } from 'react';
import medical_show1 from '../../assets/medical-show1.jpg'
import medical_show2 from '../../assets/medical-show2.jpg'
import medical_show3 from '../../assets/medical-show3.jpg'
import line1 from '../../assets/line1.png'
import './index.css'

export default class MedicalProduct extends Component {
  render() {
    return (
        <section className='MedicalProduct'>
            <div className='MedicalProduct_top'>
                <h1>医疗产品</h1>
                <p>
                通过对医药医疗企业所处大环境的分析，经过与上百家优秀企业的成功实施上线，与最佳企业管理模式进行完美结合，并以信息技术为基础，质
                量管理为保障，流程优化为核心，通过链接专业智能设施设备，优化企业的基础数据、质量管理、业务流程、仓储配送等各个环节配合，从而实
                现医药医疗产品从生产企业、流通渠道、医疗终端与药店连锁到最终消费者的垂直产业链商流、物流、资金流、信息流、票据流的“五流合一”的
                溯管理模式。并且与药监、卫计委、医保等医疗相关部门互联互通，利用大数据分析与应用，让企业在智能信息化的供应链管理体系中，实现高
                效的运营服务。
                </p>

            </div>
            <div className='down'>
                <div className='down_circle'>
                    <div className='down_triangle'>
                    </div>
                </div>
            </div>
            <div className='MedicalProduct_wrap'>
                <ul>
                    <li><img src={medical_show1}/></li>
                    <li><img src={medical_show2}/></li>
                    <li><img src={medical_show3}/></li>
                </ul>
            </div>
            <img src={line1} className='MedicalProduct_line1'/>
        </section>
    )
  }
}
