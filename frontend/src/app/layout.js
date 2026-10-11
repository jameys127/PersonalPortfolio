import Script from 'next/script';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Providers from './providers';
import '../index.css';
import '../components/Layout.css';

export const metadata = {
  title: 'Jeremiah Sheehy',
  description: 'Personal portfolio to show my projects',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/android-chrome-192x192.png',
  },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Script src='https://kit.fontawesome.com/b801b71581.js' crossOrigin='anonymous' />
        <AppRouterCacheProvider>
          <Providers>
            <div>
              <div className='constant-background-container'>
                <div className='constant-background'></div>
              </div>
              {children}
            </div>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
