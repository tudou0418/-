import React, { Component } from 'react';
import './index.css'
export default class Footer extends Component {
  render() {
    return (
      <footer>
            <div className='footer_top'>
                <h3>关于纽腾</h3>
                <p>Company profile</p>
            </div>
            <div className='footer_wrap'>
                <div className='footer_wrap_left'>
                  <h2>重庆纽腾网络科技有限公司</h2>
                  <p>是一家以技术为核心, 为客户提供高效的商业解决
                  方案, 将互联网解决方案、软件开发、软件运营推广,
                   三大服务合为一体的科技型服务公司。我们用互联网
                   技术、新媒体技术及大数据技术与商业完美的结合在
                   一起, 为客户在快速发展的信息技术时代和大数据时
                   代中快速转型, 在新时代的发展上拥有更强大的核心竞争力。</p>
                </div>
                <div className='footer_wrap_right'>
                  <ul>
                     <li>
                       <i className='iconfont icon-boult-x'></i>
                       <span  className='iconfont icon-youxiang'></span>
                       <p>邮箱：vinnie.tang@newteng.net</p>
                     </li>
                     <li>
                       <i className='iconfont icon-boult-x'></i>
                       <span className='iconfont icon-24gf-telephone2'></span>
                       <p>电话：18581298991</p>
                     </li>
                     <li>
                       <i className='iconfont icon-boult-x'></i>
                       <span className='iconfont icon-dingweixiao'></span>
                       <p>地址：重庆市九龙坡区渝州路50号高创锦业大厦601</p>
                     </li>
                  </ul>
                </div>
            </div>
            <div className='footer_bottom'>
                  <p>版权归“重庆纽腾网络科技有限公司”所有渝ICP备18016145号-1</p>
                </div>
      </footer>
        
    )
  }
}
