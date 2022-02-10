import React, { Component } from 'react'
import { Button } from 'antd';
import {WechatOutlined} from '@ant-design/icons'
import './App.less';
export default class App extends Component {
    render() {
        return (
            <div>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <WechatOutlined/>
            </div>
        )
    }
}
