import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { JetBrains_Mono, Schibsted_Grotesk } from 'next/font/google'
import SmoothScroll from './components/animationUtils/smoothScroll'

import './globals.css'

const schibstedGrotesk = Schibsted_Grotesk({
	subsets: ['latin'],
	variable: '--font-schibsted-grotesk'
})

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Victor Wu - Web Developer & Designer',
	description: "Victor Wu's Portfolio"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'font-sans selection:bg-gray-800 selection:text-white',
					schibstedGrotesk.variable,
					jetBrainsMono.variable
				)}
			>
				<SmoothScroll />
				{children}
			</body>
		</html>
	)
}

//TODO - desable cache for development on network
