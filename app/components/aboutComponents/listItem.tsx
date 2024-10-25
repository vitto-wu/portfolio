'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const ListItem = ({
	index,
	desc,
	title
}: {
	index: number
	desc: string
	title: string
}) => {
	gsap.registerPlugin(ScrollTrigger)
	const ref = useRef(null)

	useGSAP(() => {
		gsap.to(ref.current, {
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: ref.current,
				start: 'top bottom',
				end: 'top 80%',
				scrub: true
			}
		})
	}, [])

	return (
		<div
			ref={ref}
			className="group grid w-full translate-y-24 grid-cols-2 gap-4 md:grid-cols-4 items-center justify-end md:py-12 font-mono opacity-0 mb-8"
		>
			<h6 className="whitespace-nowrap">
				<span className="text-black/20">[0{index}]</span> {title}
			</h6>
			<p className="col-span-2 md:col-start-3 text-justify">{desc}</p>
			<div className="border-text-black/20 absolute bottom-0 left-0 w-0 border-b-2 transition-all duration-500 ease-in-out group-hover:w-full"></div>
		</div>
	)
}

export default ListItem
