'use client';


import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

import { ReactNode } from 'react';

interface LayoutProps extends AppProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    );
}