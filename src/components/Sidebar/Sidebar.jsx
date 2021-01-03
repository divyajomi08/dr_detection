import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router';
const { Sider } = Layout;

const Sidebar = (props) => {
    const history = useHistory();
    const [currentSelection, setCurrentSelection] = useState(0+"");

    return (
        <Sider
            style={{
                height: '100vh'
            }}
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
            <Menu theme="dark" mode="inline" selectedKeys={[currentSelection + ""]}>
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