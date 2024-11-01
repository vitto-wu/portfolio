import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { JetBrains_Mono, Schibsted_Grotesk } from 'next/font/google'
import SmoothScroll from './components/animationUtils/smoothScroll'

import { TooltipProvider } from './components/animationsUI/tooltip'
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
					'selection:text-offwhite relative bg-[#c9c9be] font-sans selection:bg-gray-800',
					schibstedGrotesk.variable,
					jetBrainsMono.variable
				)}
			>
				<SmoothScroll />
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	)
}

//TODO - desable cache for development on network
