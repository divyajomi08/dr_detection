import React from 'react';
import  {SidebarData}  from './SidebarData';
import { Layout, Menu } from 'antd';
import useWindowDimensions from '../../windowDimensions';
const { Sider } = Layout;

const Sidebar = () => {
    const { height } = useWindowDimensions();
    console.log(SidebarData);
    return (
        <Sider
            style={{ height: height }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                {SidebarData.map((data, index) => {
                    return <Menu.Item key={index + 1} >{data.title}</Menu.Item>
                })}
            </Menu>
        </Sider>
    );
};

export default Sidebar;