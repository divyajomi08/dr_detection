import React, { useState, useEffect } from 'react';
import { SidebarData } from './SidebarData';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const Sidebar = (props, { defaultActive, }) => {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);
    const changeActiveIndex = (newIndex) => {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    const getPath = (path) => {
        if (path.charAt(0) !== "/") {
            return "/" + path;
        }
        return path;
    }

    useEffect(() => {
        const activeItem = SidebarData.findIndex(item => getPath(item.path) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

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
                <Menu theme="dark" mode="inline" selectedKeys={[activeIndex + ""]}>
                    {SidebarData.map((data, index) => {
                        return (
                            <Menu.Item key={index} onClick={() => {
                                props.onChange(index);
                            }}><Link to={data.path}>{data.title}</Link></Menu.Item>)
                    })}
                </Menu>

        </Sider>
    );
};

export default Sidebar;