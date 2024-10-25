'use client'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import Contact from './contact'

const Footer = () => {
	gsap.registerPlugin(ScrollTrigger)

	//background a attractor, tiles or atract particles
	const footerRef = useRef<HTMLDivElement>(null)
	const backToTopRef = useRef<HTMLDivElement>(null)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useGSAP(() => {
		gsap.to(footerRef.current, {
			y: 0,
			scrollTrigger: {
				trigger: footerRef.current,
				start: 'top bottom',
				end: 'bottom bottom',
				scrub: true
			},
			ease: 'none'
		})
		gsap.fromTo(
			//corrigir anamação - power toy anamation
			backToTopRef.current,
			{ y: 10, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.2,
				ease: 'power1.in',
				scrollTrigger: {
					trigger: backToTopRef.current,
					toggleActions: 'play reverse play reverse'
				}
			}
		)
	}, [])

	return (
		<div id='CONTACT' ref={footerRef} className={cn('md:-translate-y-96')}>
			<Contact />
			<div className="mx-4 flex flex-col gap-4 md:mx-12 md:gap-0 border-t">
				<h3 className="select-none text-center font-mono md:text-h2"></h3>
				<div className="grid select-none grid-cols-2 grid-rows-3 py-4 font-mono md:grid-cols-3 md:grid-rows-1 md:py-8">
					<p className="order-3 flex justify-end self-end font-normal text-gray-400 md:order-1 md:justify-start">
						VICTOR.WU © 2024
					</p>
					<div className="order-1 row-span-3 flex flex-col justify-center gap-4 uppercase md:order-2 md:flex-row md:items-center text-gray-400">
						<Link href="/cv.pdf" target="_blank">
							<p className="hover:text-gray-900 font-semibold">read.cv</p>
						</Link>
						<span className="hidden md:block"> • </span>
						<Link
							href="https://github.com/vitto-wu"
							target="_blank"
						>
							<p className="hover:text-gray-900 font-semibold">github</p>
						</Link>
						<span className="hidden md:block"> • </span>
						<Link
							href="https://linkedin.com/in/vitto-wu"
							target="_blank"
						>
							<p className="hover:text-gray-900 font-semibold">linkedin</p>
						</Link>
					</div>
					<div
						ref={backToTopRef}
						onClick={scrollToTop} // clique duplo provavelmente ocorre porque o elemento de footerRef está recebendo a animação
						className={cn(
							'order-2 row-span-2 flex w-fit cursor-pointer flex-row items-center justify-end gap-2 self-end justify-self-end text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-800 md:order-3'
						)}
					>
						<p className="whitespace-nowrap">back to top</p>
						<ArrowUp className="" size={16} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
