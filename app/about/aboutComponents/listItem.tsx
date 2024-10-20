'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const ListItem = () => {
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
			className="group grid w-full translate-y-24 grid-cols-4 items-center justify-end py-12 font-mono opacity-0"
		>
			<h6 className="whitespace-nowrap">
				<span className="text-green-400">[01]</span> Web Development
			</h6>
			<p className="col-span-2 col-start-3 text-justify">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Consequatur ipsa omnis minima pariatur accusantium, quod
				adipisci odit esse veniam doloribus explicabo excepturi dicta
				dolores voluptates. Sit nulla deleniti qui sapiente?
			</p>
			<div className="absolute bottom-0 left-0 w-0 border-b-2 border-green-400 transition-all duration-500 ease-in-out group-hover:w-full"></div>
		</div>
	)
}

export default ListItem
