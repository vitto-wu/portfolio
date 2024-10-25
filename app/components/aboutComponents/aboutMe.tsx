'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const AboutMe = () => {
	gsap.registerPlugin(ScrollTrigger)

	const aboutRef = useRef<HTMLDivElement>(null)
	const experencieRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		const mediaQuery = window.matchMedia('(min-width: 1024px)')
		if (!mediaQuery.matches || !experencieRef.current || !aboutRef.current)
			return

		gsap.to(aboutRef.current, {
			y: 100,
			scrollTrigger: {
				trigger: aboutRef.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			}
		})
		gsap.to(experencieRef.current, {
			y: 48,
			scrollTrigger: {
				trigger: experencieRef.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			}
		})
	}, [])

	// TODO change color
	return (
		<div id='ABOUT' className="grid grid-cols-1 gap-2 pt-20 pb-32 lg:mt-0 -mt-2 lg:py-64 lg:grid-cols-9 lg:gap-0 relative bg-[#f2f2f2]">
			<div
				ref={aboutRef}
				className="mt-12 flex flex-col gap-12 lg:col-span-4 lg:col-start-2 lg:-translate-y-[100px] lg:items-start"
			>
				<h1 className='text-center lg:text-start'>About Me</h1>
				<p className="px-4 lg:p-0 lg:w-3/4 text-justify font-mono font-medium">
					Hello, I&apos;m Victor Wu, a fullstack developer and web
					designer graduate in Computer Science from UNICAMP
					(Universidade Estadual de Campinas). Passionated about
					crafting immersive experiences, captivating micro
					interactions. Enthusiastic about the dynamic areas of motion and web-based
					animation.
				</p>
			</div>
			<div
				ref={experencieRef}
				className="mt-24 flex flex-col gap-12 lg:col-span-4 lg:col-start-6 lg:translate-y-[100px]"
			>
				<h1 className='text-center lg:text-start'>Exprencies</h1>
				<div className="px-4 lg:p-0 text-center lg:text-start flex flex-col font-mono">
					<p className="mb-1">
						<span className="text-yellow-500">01-</span> IC/Unicamp -
						Lead Media & Brand Designer
					</p>
					<p className="mb-4 font-normal text-gray-400">
						07/2023 – 08/2023 – Campinas/SP (Remote)
					</p>
					<p className="mb-1">
						<span className="text-yellow-500">02-</span> Funcamp -
						Logo Designer
					</p>
					<p className="mb-4 font-normal text-gray-400">
						08/2023 – 10/2023 – Campinas/SP (Remote)
					</p>
					<p className="mb-1">
						<span className="text-yellow-500">03-</span> Academic
						Project - Front-End Developer
					</p>
					<p className="mb-4 font-normal text-gray-400">
						04/2024 – 06/2024 - Campinas/SP (Remote)
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
