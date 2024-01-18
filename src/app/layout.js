import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EchoScript',
  description: 'EchoScript: Empowering Voices, Enriching Minds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <div className='container mx-auto'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
