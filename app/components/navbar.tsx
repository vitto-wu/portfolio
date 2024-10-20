'use client'
import { fontSize, lineHeight } from '@/lib/tailwind-utils'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import TransitionLink from './animationUtils/transitionLink'
import { animatePageOut } from '@/lib/animation'


const Navbar = () => {
	gsap.registerPlugin(ScrollTrigger)

	const router = useRouter()
	const pathname = usePathname()
	const contactHref =
		pathname === '/projects' ? '/#contact' : `${pathname}/#contact`

	const componentRef = useRef<HTMLDivElement>(null)
	const nameRef = useRef<HTMLDivElement>(null)
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
	}, [])

	// Navbar name on hero page animation
	const applyNameAnimations = (isForward: boolean) => {

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
		</div>
	)
}

export default Navbar