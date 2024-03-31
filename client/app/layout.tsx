import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import ApolloProviders from '@/apollo/provider';
import { SidebarContextProvider } from '@/context/sidebar-context';

export const metadata: Metadata = {
  title: 'Notes App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarContextProvider>
          <ApolloProviders>
            <Header />
            <main>
              <Sidebar />
              {children}
            </main>
          </ApolloProviders>
        </SidebarContextProvider>
      </body>
    </html>
  );
}
