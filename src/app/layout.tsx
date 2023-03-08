import { ReactNode } from 'react'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex content-center justify-center items-center bg-background-dark">
        {children}
      </body>
    </html>
  )
}
