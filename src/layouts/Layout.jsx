import React, { useState } from 'react'
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../views/Dashboard';
import Patient from '../views/PatientAnalysis';
import Prescription from '../views/Prescription';
import Support from '../views/Support';

const { Header, Content } = Layout;

const DashboardLayout = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const onChange = (data) => {
        setSelectedIndex(data);
    }

    return (
        <Layout >
            <Sidebar onChange={e => onChange(e)} />
            <Layout >
                <Header className="site-layout-sub-header-background" style={{ background: 'white', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0'}}>
                    <div style={{ background: 'white', padding: 24, overflowY:'auto',maxHeight:'80vh' }}>
                        {(() => {
                            switch (selectedIndex) {
                                case 0: return <Dashboard/>;
                                case 1: return <Patient/>;
                                case 2: return <Prescription/>;
                                case 3: return <Support/>;
                                default: return <Dashboard/>;
                            }
                        })()}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;