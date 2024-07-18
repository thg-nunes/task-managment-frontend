import { Poppins } from 'next/font/google'
import { Bounce, ToastContainer } from 'react-toastify'

import { ApolloContextProvider } from '@providers/apollo'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-screen w-full bg-gray-900 text-gray-200">
      <body className={poppins.className}>
        <ApolloContextProvider>{children}</ApolloContextProvider>
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
