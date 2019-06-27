import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Tests from '../../components/Tests';
import AddNewTest from '../../components/AddNewTest'
import './Dashboard.css';

const menuStyles = {
    width: 256, 
    position: 'relative', 
    minHeight: 'calc(100vh - 71px)',
    paddingTop: '25px',
    zIndex: 1 
}

class Dashboard extends Component {

    state = {
        currentTab: <Tests />
    }

    handleClick = e => {
        const { key } = e;
        switch(key) {
            case 'Tests':
                this.setState({ currentTab: <Tests /> });
                break;
            case 'Add':
                this.setState({ currentTab: <AddNewTest /> });
                break;
            default: 
                this.setState({ currentTab: <Tests /> });
        }
        // console.log('click ', e);
    };

    render() {

        return (
            <div className="dash-container">
                <Menu
                    onClick={this.handleClick}
                    style={menuStyles}
                    defaultSelectedKeys={['Tests']}
                    mode="inline"
                >
                    <Menu.Item key="Tests"><Icon type="container" />Tests</Menu.Item>
                    <Menu.Item key="Add"><Icon type="file-add" />Add test</Menu.Item>
                    {/* <Menu.Item key="Edit"><Icon type="edit" />Edit tests</Menu.Item>
                    <Menu.Item key="Assign"><Icon type="usergroup-add" />Assign users for test</Menu.Item>
                    <Menu.Item key="Level"><Icon type="line-chart" />Level</Menu.Item> */}
            </Menu>
            <div className="main-content">{ this.state.currentTab }</div>
          </div>
        );
    }
}
export default Dashboard;