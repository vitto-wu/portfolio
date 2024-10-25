'use client'
import { animatePageOut } from '@/lib/animation'
import { fontSize, lineHeight } from '@/lib/tailwind-utils'
import { cn, splitText } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import TransitionLink from './animationUtils/transitionLink'

interface CustomDivElement extends HTMLDivElement {
	splitText?: Element[]
}

const Navbar = () => {
	gsap.registerPlugin(ScrollTrigger)

	const router = useRouter()
	const pathname = usePathname()

	const componentRef = useRef<HTMLDivElement>(null)
	const nameRef = useRef<CustomDivElement>(null)
	const [windowWidth, setWindowWidth] = useState(0)
	const [showNavbar, setShowNavbar] = useState(true)
	const [desableHomeLink, setDesableHomeLink] = useState(pathname === '/')
	const [clock, setTime] = useState<string>('')
	let lastTime = 0

	const scrollToSection = (sectionId: string, delay: number = 1000) => {
		setTimeout(() => {
			document
				.getElementById(sectionId)
				?.scrollIntoView({ behavior: 'smooth' })
		}, delay)
	}

	const eventDelay = () => {
		const currentTime = new Date().getTime()
		if (currentTime - lastTime > 1000) {
			lastTime = currentTime
			return true
		}
		return false
	}

	useEffect(() => {
		const { clientWidth } = document.documentElement
		setWindowWidth(clientWidth)

		const handleResize = () =>
			setWindowWidth(document.documentElement.clientWidth)
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useGSAP(() => {
		// Navbar hide on scroll down animation
		ScrollTrigger.create({
			trigger: componentRef.current,
			start: 'top top-=100%',
			end: '+=9999',
			onUpdate: (self) => {
				setShowNavbar(true)
				setShowNavbar(self.direction === -1)
			}
		})

		const splitTextArr = splitText(nameRef)

		if (nameRef.current) nameRef.current.splitText = splitTextArr
	}, [])

	// Navbar name on hero page animation
	const applyNameAnimations = (isForward: boolean) => {
		const splitText = nameRef.current?.splitText || null

		if (splitText) {
			gsap.to(splitText, {
				fontSize: isForward ? fontSize['h1'] : fontSize['p'],
				lineHeight: isForward ? lineHeight['h1'] : lineHeight['p'],
				fontWeight: isForward ? 700 : 500,
				duration: 1,
				ease: 'power1.out',
				stagger: {
				  each: 0.03
				}
			  });
		}

		// left : -4rem -> navbar x-padding
		// top : -2rem -> navbar y-padding, -1.1rem -> gap-4 em /home/hero
		gsap.to(nameRef.current, {
			delay: isForward ? 0.1 : 0,
			left: isForward
				? `calc(50vw - ${windowWidth < 768 ? '2rem' : '4rem'})`
				: 0,
			top: isForward ? `calc(50vh - 2rem - 1.1rem)` : 0,
			x: isForward ? '-50%' : 0,
			y: isForward ? '-50%' : 0,
			duration: 1,
			ease: isForward ? 'power2.out' : 'power2.out'
		})
	}

	useEffect(() => {
		if (pathname != '/') return

		// animation trigger for name
		const trigger = ScrollTrigger.create({
			start: '10 top',
			onUpdate: ({ progress }) => {
				if (progress > 0) {
					applyNameAnimations(false)
					setDesableHomeLink(false)
				} else {
					if (!eventDelay()) return
					applyNameAnimations(true)
					setDesableHomeLink(true)
				}
			}
		})

		if (window.scrollY <= 2) applyNameAnimations(true)

		return () => {
			applyNameAnimations(false)
			setTimeout(() => {
				trigger.kill()
			}, 1000)
		}
	}, [pathname])

	useEffect(() => {
		setDesableHomeLink(pathname === '/')
		const hash = window.location.hash
		if (hash === '#contact') {
			scrollToSection('CONTACT')
		} else if (hash === '#about') {
			scrollToSection('ABOUT')
		}
	}, [pathname])

	// Mount Clock
	useEffect(() => {
		const UpdateTime = () => {
			const time = new Date().toLocaleTimeString('pt-BR', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			})
			setTime(time)
		}
		const intervalId = setInterval(UpdateTime)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<div
			ref={componentRef}
			className={cn(
				'fixed top-0 z-50 grid w-screen select-none grid-cols-2 px-8 py-8 font-mono font-bold text-white transition duration-500 md:grid-cols-3 md:px-16',
				showNavbar
					? 'opacity-100'
					: 'pointer-events-none -translate-y-6 opacity-0'
			)}
		>
			<TransitionLink href="/">
				<p
					ref={nameRef}
					className={cn(
						'relative inline-flex h-fit w-fit whitespace-nowrap leading-normal',
						desableHomeLink ? 'pointer-events-none' : ''
					)}
				>
					VICTOR . WU
				</p>
			</TransitionLink>
			<p className="hidden select-none text-center md:block">{clock}</p>
			<div className="flex flex-col items-end gap-1">
				<TransitionLink href="/projects">
					<p className="hover:pointer-events-auto">PROJECTS</p>
				</TransitionLink>

				<p
					onClick={(e) => {
						e.preventDefault()
						const contact = document.getElementById('CONTACT')
						contact
							? contact.scrollIntoView({ behavior: 'smooth' })
							: animatePageOut('/#contact', router)
					}}
					className="cursor-pointer hover:pointer-events-auto"
				>
					CONTACT
				</p>
				<p
					onClick={(e) => {
						e.preventDefault()
						const about = document.getElementById('ABOUT')
						about
							? about.scrollIntoView({ behavior: 'smooth' })
							: animatePageOut('/#about', router)
					}}
					className="cursor-pointer hover:pointer-events-auto"
				>
					ABOUT
				</p>
			</div>
		</div>
	)
}

export default Navbar
