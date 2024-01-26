import Footer from '@/components/shared/Footer'
// import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar';
import { AuthProvider } from '@/context/authContext';
import { Toaster } from 'react-hot-toast';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EchoScript',
  description: 'EchoScript: Empowering Voices, Enriching Minds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={inter.className}>
      <AuthProvider>
      <div><Toaster/></div>
        <div className="max-w-screen-full mx-auto">
          {/* <Navbar /> */}
          <div className=' mx-auto'>{children}</div>
          {/* <Footer /> */}

        </div>
        </AuthProvider>
      </body>
    </html>
  );
}
