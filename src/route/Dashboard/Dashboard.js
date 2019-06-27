import React, { Component } from 'react';

import { Menu, Icon } from 'antd';

const menuStyles = {
    width: 256, 
    position: 'relative', 
    minHeight: 'calc(100vh - 71px)',
    paddingTop: '25px',
    zIndex: 1 
}

class Dashboard extends Component {

    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={menuStyles}
                defaultSelectedKeys={['1']}
                mode="inline"
            >
                <Menu.Item key="1"><Icon type="container" />Tests</Menu.Item>
                <Menu.Item key="2"><Icon type="mail" />Option 2</Menu.Item>
          </Menu>
        );
    }
}
export default Dashboard;