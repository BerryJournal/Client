import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import './globals.scss'

const inter = Inter()

export const metadata: Metadata = {
	title: 'BerryJournal',
	description: 'BerryJournal - цифровая образовательная платформа',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${inter.className} antialiased`}>
				{children}
				<ToastContainer
					position='bottom-right'
					autoClose={5000}
					pauseOnFocusLoss
					pauseOnHover
					theme='dark'
				/>
			</body>
		</html>
	)
}
