'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '16px', // 라벨 폰트 크기 (16px)
          lineHeight: 1.2,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          padding: '12px 24px',
          minWidth: '120px', // 최소 너비 설정
          height: '48px', // 높이 설정
        },
      },
      defaultProps: {
        size: 'large',
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          height: '48px',
          padding: '12px',
        },
        input: {
          fontSize: '16px',
          padding: '12px',
          height: '100%',
        },
      },
    },
  },
});

export default function ClientProviders({ children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
