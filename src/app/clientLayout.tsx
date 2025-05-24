'use client'

import { useTheme } from '@/context/ThemeContext';
import { ConfigProvider, theme as themeAntd } from "antd";
import ptBR from "antd/locale/pt_BR";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const { defaultAlgorithm, darkAlgorithm } = themeAntd;

  const customTheme = {
    token: {
      colorPrimary: '#3C50E0',
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
      colorSuccess: '#10B981',
      colorWarning: '#F59E0B',
      colorError: '#EF4444',
      colorInfo: '#3C50E0',
    },
  };

  return (
    <ConfigProvider
      locale={ptBR}
      theme={{
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        ...customTheme,
      }}
    >
      {children}
    </ConfigProvider>
  );
} 