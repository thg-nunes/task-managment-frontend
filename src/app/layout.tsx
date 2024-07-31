import { Poppins } from 'next/font/google'
import { Bounce, ToastContainer } from 'react-toastify'

import { ApolloContextProvider, SessionContextProvider } from '@providers/index'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-screen w-full bg-slate-800 text-gray-200">
      <body className={poppins.className}>
        <SessionContextProvider>
          <ApolloContextProvider>{children}</ApolloContextProvider>
        </SessionContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  )
}
