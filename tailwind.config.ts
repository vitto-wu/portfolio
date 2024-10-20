import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-schibsted-grotesk)'],
				mono: ['var(--font-jetbrains-mono)']
			},
			fontSize: {
				h1: 'clamp(4rem, 5vw + 1rem, 5.61rem)',
				h2: 'clamp(3rem, 4vw + 0.6rem, 4.209rem)',
				h3: 'clamp(2.25rem, 3vw + 0.4rem, 3.157rem)',
				h4: 'clamp(1.68rem, 2.5vw + 0.3rem, 2.369rem)',
				h5: 'clamp(1.26rem, 2vw + 0.2rem, 1.777rem)',
				h6: 'clamp(0.945rem, 1.5vw + 0.1rem, 1.333rem)',
				p: 'clamp(0.75rem, 1vw + 0.25rem, 1rem)',
				label: 'clamp(0.60rem, 0.5vw + 0.25rem, 0.8rem)'
			},
			lineHeight: {
				h1: 'clamp(3.6rem, 5vw + 0.9rem, 5.03rem)',
				h2: 'clamp(2.7rem, 4vw + 0.54rem, 3.79rem)',
				h3: 'clamp(2.03rem, 3vw + 0.36rem, 2.84rem)',
				h4: 'clamp(1.51rem, 2.5vw + 0.27rem, 2.13rem)',
				h5: 'clamp(1.13rem, 2vw + 0.18rem, 1.60rem)',
				h6: 'clamp(0.85rem, 1.5vw + 0.09rem, 1.20rem)',
				p: 'clamp(1.325rem, 1vw + 0.575rem, 1.7rem)',
				label: 'clamp(0.84rem, 0.5vw + 0.3rem, 1.125rem)'
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				full: '9999px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'bw120': 'linear-gradient(120deg, #434343, #ffffff)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
