import { Poppins } from 'next/font/google'
import './globals.css'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-screen w-full bg-gray-900 text-gray-200">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
