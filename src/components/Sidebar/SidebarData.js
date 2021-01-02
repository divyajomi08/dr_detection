import React from 'react';
import DashboardOutlined from '@ant-design/icons';
import BarChartOutlined from '@ant-design/icons';
import MonitorOutlined from '@ant-design/icons';

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <DashboardOutlined/>
    },
    {
        title: "PatientAnalysis",
        path: "/patient",
        icon: <BarChartOutlined />
    },
    {
        title: "Prescription",
        path: "/prescription",
        icon: <MonitorOutlined />
    },
    {
        title: "Support",
        path: "/support",
        icon: <DashboardOutlined />
    }
];