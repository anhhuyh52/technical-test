'use client'

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import AuthProvider from '@/components/AuthProvider';


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
        <AuthProvider>
          {children}
        </AuthProvider>
    </Provider></body>
    </html>
  );
};

export default RootLayout;
