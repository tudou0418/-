import React, { Component } from 'react';
import './index.css'
import cooperation1 from '../../assets/cooperation1.png'
import cooperation2 from '../../assets/cooperation2.png'
import cooperation3 from '../../assets/cooperation3.png'
import cooperation4 from '../../assets/cooperation4.png'
import cooperation5 from '../../assets/cooperation5.png'
import cooperation6 from '../../assets/cooperation6.png'
import cooperation7 from '../../assets/cooperation7.png'
import cooperation8 from '../../assets/cooperation8.png'
export default class CooperativeEnterprise extends Component {
  render() {
    return (
        <section className='CooperativeEnterprise'>
                <div className='CooperativeEnterprise_top'>
                    <h1>合作企业</h1>
                    <p>Cooperative enterprise</p>
                </div>
                <div className='CooperativeEnterprise_wrap'>
                    <ul>
                        <li><img src={cooperation1} alt="#" /></li>
                        <li><img src={cooperation2} alt="#" /></li>
                        <li><img src={cooperation3} alt="#" /></li>
                        <li><img src={cooperation4} alt="#" /></li>
                        <li><img src={cooperation5} alt="#" /></li>
                        <li><img src={cooperation6} alt="#" /></li>
                        <li><img src={cooperation7} alt="#" /></li>
                        <li><img src={cooperation8} alt="#" /></li>
                    </ul>
                </div>
        </section>
    );
  }
}
