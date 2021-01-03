import React, { useState } from 'react'
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../views/Dashboard';
import Patient from '../views/PatientAnalysis';
import Prescription from '../views/Prescription';
import Support from '../views/Support';
import useWindowDimensions from '../windowDimensions';

const { Header, Content } = Layout;

const DashboardLayout = () => {
    const {height} = useWindowDimensions;
    const [selectedIndex, setSelectedIndex] = useState(0);
    var content;
    const onChange = (data) => {
        setSelectedIndex(data);
    }

    return (
        <Layout >
            <Sidebar onChange={e => onChange(e)} />
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ background: 'white', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0',height:500 }}>
                    <div style={{ background: 'white', padding: 24, height: 500 }}>
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