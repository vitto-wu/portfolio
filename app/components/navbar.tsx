'use client'
import { fontSize, lineHeight } from '@/lib/tailwind-utils'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap-trial/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import TransitionLink from './animationUtils/transitionLink'
import { animatePageOut } from '@/lib/animation'

interface CustomDivElement extends HTMLDivElement {
	splitText?: SplitText
}

const Navbar = () => {
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(SplitText)

	const router = useRouter()
	const pathname = usePathname()
	const contactHref =
		pathname === '/projects' ? '/#contact' : `${pathname}/#contact`

	const componentRef = useRef<HTMLDivElement>(null)
	const nameRef = useRef<CustomDivElement>(null)
	const [windowWidth, setWindowWidth] = useState(0)
	const [showNavbar, setShowNavbar] = useState(true)
	const [desableHomeLink, setDesableHomeLink] = useState(pathname === '/')
	const [clock, setTime] = useState<string>('')

	useEffect(() => {
		const { clientWidth } = document.documentElement;
		setWindowWidth(clientWidth);


		const handleResize = () => setWindowWidth(document.documentElement.clientWidth);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	  }, []);

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

		const splitText = new SplitText(nameRef.current, { type: 'chars' }) // [ ] SplitText plugin re-do
		gsap.set(splitText.chars, {
			display: 'inline-block'
		})

		if (nameRef.current) nameRef.current.splitText = splitText
	}, [])

	// Navbar name on hero page animation
	const applyNameAnimations = (isForward: boolean) => {
		const splitText = nameRef.current?.splitText || null

		if (splitText) {
			gsap.to(splitText.chars, {
				fontSize: isForward ? fontSize['h1'] : fontSize['p'],
				lineHeight: isForward ? lineHeight['h1'] : lineHeight['p'],
				fontWeight: isForward ? 700 : 500,
				stagger: 0.03,
				duration: 1,
				ease: 'power4.inOut'
			})
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
			ease: 'power4.inOut'
		})
	}

	useEffect(() => {
		if (pathname === '/') return

		// animation trigger for name
		const trigger = ScrollTrigger.create({
			trigger: nameRef.current,
			start: 'top 2',
			onEnter: () => {
				applyNameAnimations(false)
				setDesableHomeLink(false)
			},
			onLeaveBack: () => {
				applyNameAnimations(true)
				setDesableHomeLink(true)
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
		const UpdateTime = () => {
			const time = new Date().toLocaleTimeString('pt-BR', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			})
			setTime(time)
		}
		const intervalId = setInterval(UpdateTime)

		setDesableHomeLink(pathname === '/')

		const hash = window.location.hash
		if (hash === '#contact') {
			// apenas quando sair da página de projetos
			setTimeout(
				// para não dar erro no gsap
				() =>
					document
						.getElementById('contactComponent')
						?.scrollIntoView({ behavior: 'smooth' }),
				1000
			)
		}
		return () => clearInterval(intervalId)
	}, [pathname])

	return (
		<div
			ref={componentRef}
			className={cn(
				'fixed top-0 z-50 grid w-screen grid-cols-2 px-8 py-8 font-mono font-bold transition duration-500 md:grid-cols-3 md:px-16 text-white',
				showNavbar
					? 'opacity-100'
					: 'pointer-events-none -translate-y-6 opacity-0'
			)}
		>
			<TransitionLink href="/">
				<p
					ref={nameRef}
					className={cn(
						'relative inline-block whitespace-nowrap leading-normal',
						desableHomeLink ? 'pointer-events-none' : ''
					)}
				>
					VICTOR.WU
				</p>
			</TransitionLink>
			{/* <p className="hidden select-none text-center md:block">{clock}</p>
			<div className="flex flex-col items-end gap-1">
				<TransitionLink href="/projects">
					<p>PROJECTS</p>
				</TransitionLink>

				<p
					onClick={(e) => {
						e.preventDefault()
						const contact =
							document.getElementById('contactComponent')
						contact
							? contact.scrollIntoView({ behavior: 'smooth' })
							: animatePageOut(contactHref, router)
					}}
					className="cursor-pointer"
				>
					CONTACT
				</p>
				<TransitionLink href="/about">
					<p>ABOUT</p>
				</TransitionLink>
			</div> */}
		</div>
	)
}

export default Navbar
