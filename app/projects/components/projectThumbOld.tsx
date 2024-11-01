import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

// TODO - old idea, with parallax effect on bg image
const ProjectThumbOld = () => {
	gsap.registerPlugin(ScrollTrigger)

	const imageRef = useRef(null)
	const wrapperRef = useRef(null)

	useGSAP(() => {
		gsap.to(imageRef.current, {
			yPercent: 40,
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			}
		})
	}, [])

	return (
		<Link href="/projects/o2t" className="w-full">
			<div
				ref={wrapperRef}
				className="group relative flex h-[800px] w-full items-center justify-center overflow-hidden rounded-lg"
			>
				<div
					ref={imageRef}
					className="absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2 -translate-y-[40%] scale-125"
				>
					<Image
						src="/images/testImage.jpg"
						alt="PorjectThumbnail"
						fill
						objectFit="cover"
						className="" //[ ] grayscale filter transition duration-500 group-hover:grayscale-0
					/>
				</div>
				<div className="text_card text-offwhite absolute flex h-full w-full flex-col justify-between p-8 font-mono font-bold">
					<div className="card_top">
						<p>EXP 001</p>
						<p>2024</p>
					</div>
					<div className="card_bottom flex flex-col gap-2">
						<h5>Olympic Training Tracker</h5>
						<p>FRONT-END • DESIGN</p>
					</div>
				</div>
				<video
					className="h-[70%] rounded-md"
					loop
					muted
					playsInline
					autoPlay
				>
					<source src="/videos/test.mp4" type="video/mp4" />
					Seu navegador não suporta o elemento de vídeo.
				</video>
			</div>
		</Link>
	)
}

export default ProjectThumbOld
