'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { ReactElement, useRef } from 'react'

const TextReveal = ({
	children,
	delay = 0,
	parentRef
}: {
	children: ReactElement
	delay?: number
	parentRef: React.RefObject<HTMLDivElement>
}) => {
	gsap.registerPlugin(ScrollTrigger)

	const ref = useRef<HTMLSpanElement>(null)
	const pageLoadDelay = 1

	useGSAP(() => {
		gsap.fromTo(
			ref.current,
			{ y: '50%', opacity: 0, skewY: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				ease: 'power3.out',
				delay: delay + pageLoadDelay,
				skewY: 0
			}
		)

		ScrollTrigger.create({
			trigger: parentRef.current,
			start: 'top top-=30',
			scrub: true,
			onLeaveBack: () => {
				gsap.to(ref.current, {
					y: 0,
					opacity: 1,
					duration: 0.5,
					skewY: 0,
					ease: 'power2.out',
					delay: delay
				})
			},
			onEnter: () => {
				gsap.to(ref.current, {
					y: '-150%',
					opacity: 1,
					duration: 0.1,
					skewY: -3,
					ease: 'power2.in',
					overwrite: true // impede com que 'OnLeaveBack' sobreescreva essa animação por causa do delay
				})
			}
		})
	})

	return React.cloneElement(
		children,
		{
			className: `${children.props.className} overflow-hidden`
		},
		<span ref={ref} className="block w-full">
			{children.props.children}
		</span>
	)
}

export default TextReveal
