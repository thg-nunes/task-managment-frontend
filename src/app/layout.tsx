import { Poppins } from 'next/font/google'

import { ApolloContextProvider } from '@providers/apollo'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

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
      </body>
    </html>
  )
}
