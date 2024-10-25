'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { ReactElement, useRef } from 'react'


const BeforeFooter = ({ children }: { children: ReactElement }) => {
	gsap.registerPlugin(ScrollTrigger)

	const ref = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		gsap.to(ref.current, {
			scale: 0.90,
			transformOrigin: 'top center',
			scrollTrigger: {
				trigger: ref.current,
				start: 'bottom 75%',
				end: 'bottom top',
				scrub: true
			},
			ease: 'none'
		})
	}, [])

	return React.cloneElement(children, {
		ref,
		className: `${children.props.className || ''} rounded-b-3xl z-10 relative`
	})
}

export default BeforeFooter
