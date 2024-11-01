'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import TextReveal from '../../../components/textReveal'

type ProjectHeroProps = {
	role: string[]
	duration: string
	tools: string[]
	company?: string
}

const ProjectHero = ({ role, duration, tools, company }: ProjectHeroProps) => {
	gsap.registerPlugin(ScrollTrigger)

	const ref = useRef<HTMLDivElement>(null)
	const imgRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: ref.current,
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
	}, [])

	return (
		<div
			ref={ref}
			className="grid h-screen grid-rows-5 place-items-center overflow-hidden bg-black p-4 text-center"
		>
			<div ref={imgRef} className="HERO_IMAGE absolute h-full w-full">
				<Image
					src="/images/testImage.jpg"
					alt="PorjectThumbnail"
					layout="fill"
					objectFit="cover"
				/>
				<div className="OVERLAY absolute inset-0 bg-black opacity-30"></div>
			</div>
			<div className="title z-10 row-start-3">
				<TextReveal parentRef={ref} delay={0.05}>
					<p className="text-offwhite mb-2 font-mono">
						PROJECT / NO.01
					</p>
				</TextReveal>
				<TextReveal parentRef={ref}>
					<h5 className="text-offwhite font-bold uppercase">
						olympics training tracker
					</h5>
				</TextReveal>
			</div>
			<div className="description text-offwhite z-10 row-start-4 grid grid-cols-2 gap-8 uppercase xl:grid-cols-4 xl:gap-16">
				<TextReveal parentRef={ref} delay={0.05}>
					<div className="flex flex-col items-start">
						<label className="mb-2 uppercase opacity-60">
							company
						</label>
						{company ? <p>{company}</p> : <p>*personal</p>}
					</div>
				</TextReveal>
				<TextReveal parentRef={ref} delay={0.1}>
					<div className="flex flex-col items-start">
						<label className="mb-2 uppercase opacity-60">
							ROLE
						</label>
						{role.map((e, i) => {
							return <p key={i}>{e}</p>
						})}
					</div>
				</TextReveal>
				<TextReveal parentRef={ref} delay={0.15}>
					<div className="flex flex-col items-start">
						<label className="mb-2 uppercase opacity-60">
							Duration
						</label>
						<p className="">{duration}</p>
					</div>
				</TextReveal>
				<TextReveal parentRef={ref} delay={0.2}>
					<div className="flex flex-col items-start">
						<label className="mb-2 uppercase opacity-60">
							tools
						</label>
						{tools.map((e, i) => {
							return <p key={i}>{e}</p>
						})}
					</div>
				</TextReveal>
			</div>
		</div>
	)
}

export default ProjectHero
