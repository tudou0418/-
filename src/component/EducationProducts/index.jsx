import React, { Component } from 'react';
import education_bg from '../../assets/education-bg.jpg'
import education_bg1 from '../../assets/education-bg1.jpg'
import education_bg2 from '../../assets/education-bg2.png'
import education_bg3 from '../../assets/education-bg3.png'
import education_bg4 from '../../assets/education-bg4.png'
import education_bg5 from '../../assets/education-bg5.jpg'
import line2 from '../../assets/line2.png'
import './index.css'
export default class EducationProducts extends Component {
  render() {
    return (
        <section className='EducationProducts'>
            <div className='EducationProducts_top'>
                <h1>教育产品</h1>
                <p>教育行业解决方案是以数字化信息和网络为基础，在计算机和网络技术上建立起来的对教学、科研、管理、技术服务、生活服务等校园信息的收集、处
                理、整合、存储、传输和应用，使数字资源得到充分优化利用的一种虚拟教育环境。通过实现从环境(包括设备，教室等)、资源(如图书、讲义、课件
                等)到应用(包括教、学、管理、服务、办公等)的全部数字化，在传统校园基础上构建一个数字空间，以拓展现实教育的时间和空间维度，提升传统教
                育的管理、运行效率，扩展传统校园的业务功能，最终实现教育过程的全面信息化，从而达到提高管理水平、提升就业率的目的。</p>
            </div>
            <div className='EducationProducts_wrap'>
                <ul className='EducationProducts_wrap_left'>
                    <li><img src={education_bg1} alt="#" /></li>
                    <li><img src={education_bg2} alt="#" /></li>
                    <li><img src={education_bg5} alt="#" /></li>
                </ul>
                <ul className='EducationProducts_wrap_right'>
                    <li></li>
                    <li><img src={education_bg4} alt="#" /></li>
                    <li><img src={education_bg3} alt="#" /></li>
                </ul>
            </div>
            <img src={education_bg} className='EducationProducts_bg flotages' alt="" />
            <img src={line2} className='EducationProducts_line flotages' alt="" />
        </section>
    )
  }
}
