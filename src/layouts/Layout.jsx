import React, { useState } from 'react'
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../views/Dashboard';
import Patient from '../views/PatientAnalysis';
import Prescription from '../views/Prescription';
import Support from '../views/Support';
import { Switch,Route, BrowserRouter } from 'react-router-dom';
import { Routes } from "../routes";

const { Header, Content } = Layout;

const DashboardLayout = (props) => {
    return (
        <Layout >
            <Sidebar history={props.history} />
            <Layout >
                <Header className="site-layout-sub-header-background" style={{ background: 'white', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ background: 'white', padding: 24, overflowY: 'auto', maxHeight: '80vh' }}>
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;