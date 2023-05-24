import './globals.css'
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
	subsets: ['latin'],
	weight: ['500', '700', '900'],
	variable: '--font-red-hat-display',
})

export const metadata = {
	title: 'Order Summary Component',
	description:
		'Frontend Mentor Challenge | Order Summary Component | Created using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${redHatDisplay.variable} bg-paleBlue font-sans md:bg-desktop md:bg-repeat-x`}>
				{children}
			</body>
		</html>
	)
}
