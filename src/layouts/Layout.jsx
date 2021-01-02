import React from 'react'
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';
const { Header, Content } = Layout;

const DashboardLayout = () => {
    return (
        <Layout >
            <Sidebar />
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ background: 'white', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ background: 'white', padding: 24, minHeight: 450 }}>
                        content
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;