'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useRef } from 'react'
import { useTooltip } from '../animationsUI/tooltip'
import FullSizeImage from '../fullSizeImage'
import TextReveal from '../textReveal'

const Hero = () => {
	gsap.registerPlugin(ScrollTrigger)

	const nameRef = useRef<HTMLDivElement>(null)
	const componentRef = useRef<HTMLDivElement>(null)
	const imgRef = useRef<HTMLDivElement>(null)

	const { showTooltip, hideTooltip } = useTooltip()

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: componentRef.current,
			start: 'top top',
			end: 'bottom top',
			pin: true,
			pinSpacing: false,
			scrub: true,
			animation: gsap.to(imgRef.current, {
				opacity: 0.15,
				scale: 1.15,
				ease: 'power3.out'
			}),
			onLeaveBack: () => {
				gsap.to(imgRef.current, {
					opacity: 1,
					scale: 1,
					ease: 'power3.out'
				})
			}
		})

		ScrollTrigger.create({
            start: '10 top',
			onUpdate: ({ progress }) => {!progress ?  showTooltip(`SCROLL DOWN ${' '.repeat(2)} ↓`) :hideTooltip()},
        });

		if (window.scrollY <= 2) showTooltip(`SCROLL DOWN ${' '.repeat(2)} ↓`, 1.5)
	}, [])

	return (
		<section
			ref={componentRef}
			className="hero grid h-screen place-content-center bg-black"
		>
			<FullSizeImage
				ref={imgRef}
				src="/images/test2.jpg"
				alt="user flow"
				overlayOpacity={0.2}
				fill={true}
				className="HERO_IMAGE"
			/>
			<div className="flex flex-col items-center justify-center gap-4">
				<h1
					ref={nameRef}
					className="select-none font-mono uppercase opacity-0"
				>
					Victor.Wu
				</h1>
				<div
					className="flex flex-row justify-between gap-4 uppercase text-white md:justify-end"
				>
					<TextReveal parentRef={componentRef}>
						<Link href="/cv.pdf" target="_blank">
							<p>read.cv</p>
						</Link>
					</TextReveal>
					<TextReveal parentRef={componentRef} delay={0.05}>
						<p className=""> • </p>
					</TextReveal>

					<TextReveal parentRef={componentRef} delay={0.1}>
						<Link
							href="https://github.com/vitto-wu"
							target="_blank"
						>
							<p>github</p>
						</Link>
					</TextReveal>

					<TextReveal parentRef={componentRef} delay={0.15}>
						<p className=""> • </p>
					</TextReveal>
					<TextReveal parentRef={componentRef} delay={0.2}>
						<Link
							href="https://linkedin.com/in/vitto-wu"
							target="_blank"
						>
							<p>linkedin</p>
						</Link>
					</TextReveal>
				</div>
			</div>
		</section>
	)
}

export default Hero
