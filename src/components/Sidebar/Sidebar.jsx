import React, { useState } from 'react';
import  {SidebarData}  from './SidebarData';
import { Layout, Menu } from 'antd';
import useWindowDimensions from '../../windowDimensions';
import { useHistory } from 'react-router';
const { Sider } = Layout;

const Sidebar = (props) => {
    const { height } = useWindowDimensions();
    const history = useHistory();
    const [ currentSelection, setCurrentSelection ] = useState(SidebarData.findIndex(i => window.location.pathname.includes(i.path)));

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
            {currentSelection}
            <Menu theme="dark" mode="inline" selectedKeys={[currentSelection+""]}>
                {SidebarData.map((data, index) => {
                    return <Menu.Item key={index} onClick={() => {
                        // history.push(data.path);
                        // window.location.pathname = data.path;
                        setCurrentSelection(index);
                        props.onChange(index);
                    }}>{data.title}</Menu.Item>
                })}
            </Menu>
        </Sider>
    );
};

export default Sidebar;