import type { Metadata } from 'next'
import { JetBrains_Mono, Schibsted_Grotesk } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const schibstedGrotesk = Schibsted_Grotesk({
	subsets: ['latin'],
	variable: '--font-schibsted-grotesk'
})

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains-mono'
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
			<body className={cn('font-sans',schibstedGrotesk.variable, jetBrainsMono.variable)}>{children}</body>
		</html>
	)
}
