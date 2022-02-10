import React, { Component } from 'react'
import Business from '../Business';
import IndustrialAdvantage from '../IndustrialAdvantage';
import MedicalProduct from '../MedicalProduct';
import EducationProducts from '../EducationProducts';
import EnvironmentalProduct from '../EnvironmentalProduct';
import CooperativeEnterprise from '../CooperativeEnterprise';
import shape_bg1 from '../../assets/shape-bg-1x.png';
import shape_bg2  from '../../assets/shape-bg-2x.png';
import shape_bg3  from '../../assets/shape-bg-3x.png';
import Provide_img  from '../../assets/Provide@3x.png';
import flotage2  from '../../assets/flotage2.png';
import flotage3  from '../../assets/flotage3.png';
import flotage4  from '../../assets/flotage4.png';
import flotage15  from '../../assets/flotage15.png';
import flotage17  from '../../assets/flotage17.png';
import wrap1_shapes1  from '../../assets/wrap1_shapes1.png';
import wrap1_shapes2  from '../../assets/wrap1_shapes2.png';
import wrap1_shapes3  from '../../assets/wrap1_shapes3.png';
import wrap1_shapes4  from '../../assets/wrap1_shapes4.png';
import wrap1_shapes5  from '../../assets/wrap1_shapes5.png';

import './index.css'

export default class Container extends Component {
    render() {
        const title = '“互联网\n+\n智慧行业解决方案”'

        return (
            <div className='content'>
                <div className='slogan'>
                    <img src={Provide_img}  alt='#'/>
                    <h1>{title}</h1>
                    <h3>全方位服务更省心</h3>
                    <p>full services network</p>
                </div>
                <img src={shape_bg3} className='content_bg3' alt='#'/>
                {/* <img src={shape_bg2} className='content_bg2' alt='#'></img>
                <img src={shape_bg1} className='content_bg1' alt='#'></img> */}
                <img src={flotage2} className='content_flotage2' alt='#'/>
                <img src={flotage3} className='content_flotage3' alt='#'/>
                <img src={flotage4} className='content_flotage4' alt='#'/>
                <img src={flotage17} className='content_flotage17' alt='#'/>
                <img src={flotage15} className='content_flotage15_1' alt='#'/>
                <img src={flotage15} className='content_flotage15_2' alt='#'/>
                <img src={flotage15} className='content_flotage15_3' alt='#'/>
                <div className='content_wrap'>
                    <img src={wrap1_shapes1} className='content_wrap1_shapes1' alt='#'/>
                    <img src={wrap1_shapes2} className='content_wrap1_shapes2' alt='#'/>
                    <img src={wrap1_shapes3} className='content_wrap1_shapes3' alt='#'/>
                    <img src={wrap1_shapes4} className='content_wrap1_shapes4' alt='#'/>
                    <img src={wrap1_shapes5} className='content_wrap1_shapes5' alt='#'/>
                </div>
                {/* 业务 */}
                <Business/>
                {/* 行业优势 */}
                <IndustrialAdvantage/>
                {/* 医疗产品 */}
                <MedicalProduct/>
                {/* 教育产品 */}
                <EducationProducts/>
                {/* 环保产品 */}
                <EnvironmentalProduct/>
                {/* 合作企业 */}
                <CooperativeEnterprise/>
                </div>
        )
    }
}
