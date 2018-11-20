import React from 'react';
import { Row, Col, Layout, Menu } from 'antd';
import logo from '../images/logo.jpg';

const { Header} = Layout;

class HeaderArea extends React.Component {
    render() {
        return( 
            <div className="header-area"> 
            <Header>
                <Row type="flex">
                    <Col span={4}><div className="logo"><img src={logo} className="logo" alt="logo" /></div></Col>
                    <Col push={8}>
                        <Menu theme="dark" mode="horizontal"  defaultSelectedKeys={['2']}  style={{ lineHeight: '64px' }} >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>   
            </div>
            );
    }
  }

  export default HeaderArea;       