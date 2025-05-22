"use client"

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { useTheme } from "@/context/ThemeContext";
import { Button, ConfigProvider, theme as themeAntd } from "antd";
// import { Metadata } from "next";
import React, { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Basic Table  page for TailAdmin  Tailwind CSS Admin Dashboard Template",
//   // other metadata
// };

export default function BasicTables() {
  const { theme } = useTheme();
  const { defaultAlgorithm, darkAlgorithm } = themeAntd;

  // Tokens de cores personalizados para o Ant Design
  const customTheme = {
    token: {
      colorPrimary: '#3C50E0', // Cor primária da aplicação
      colorBgContainer: theme === 'dark' ? '#1d2939' : '#FFFFFF',
      colorBgElevated: theme === 'dark' ? '#101828' : '#FFFFFF',
      colorText: theme === 'dark' ? '#E2E8F0' : '#101828',
      colorTextSecondary: theme === 'dark' ? '#101828' : '#64748B',
      colorBorder: theme === 'dark' ? '#101828' : '#E2E8F0',
      colorBorderSecondary: theme === 'dark' ? '#101828' : '#F1F5F9',
      colorFill: theme === 'dark' ? '#101828' : '#F8FAFC',
      colorFillSecondary: theme === 'dark' ? '#101828' : '#F1F5F9',
      colorBgLayout: theme === 'dark' ? '#101828' : '#F8FAFC',
      borderRadius: 6,
      // Cores para estados
      colorSuccess: '#10B981',
      colorWarning: '#F59E0B',
      colorError: '#EF4444',
      colorInfo: '#3C50E0',
    },
    components: {
      // Table: {
      //   headerBg: theme === 'dark' ? '#101828' : '#F8FAFC',
      //   headerColor: theme === 'dark' ? '#E2E8F0' : '#101828',
      //   footerBg: theme === 'dark' ? '#101828' : '#F8FAFC',
      //   footerColor: theme === 'dark' ? '#E2E8F0' : '#101828',
      //   rowHoverBg: theme === 'dark' ? '#334155' : '#F1F5F9',
      //   borderColor: theme === 'dark' ? '#334155' : '#E2E8F0', 
      //   paginationBg: theme === 'dark' ? '#101828' : '#F8FAFC',
      //   paginationColor: theme === 'dark' ? '#E2E8F0' : '#101828',
      //   paginationHoverBg: theme === 'dark' ? '#334155' : '#F1F5F9',
      //   paginationActiveBg: theme === 'dark' ? '#3C50E0' : '#3C50E0',
      //   paginationActiveColor: theme === 'dark' ? '#FFFFFF' : '#FFFFFF',
      // },
      // Button: {
      //   primaryColor: '#FFFFFF',
      //   algorithm: true,
      // },
    },
  };

  useEffect(()=>{
console.log('theme :>> ', theme);
  }, [theme])
  
  return (
    <div>
      <ConfigProvider 
        theme={{
          algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
          ...customTheme,
        }}
      >
        <PageBreadcrumb pageTitle="Basic Table" />
        <div className="space-y-6">
          <ComponentCard title="Basic Table 1">
            <BasicTableOne />
          </ComponentCard>
          <Button>Teste</Button>
        </div>
      </ConfigProvider>
    </div>
  );
}
