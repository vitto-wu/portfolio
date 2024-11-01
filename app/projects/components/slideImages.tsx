'use client'
import { useTooltip } from '@/app/components/animationsUI/tooltip'
import FullSizeImage from '@/app/components/fullSizeImage'
import { animatePageOut } from '@/lib/animation'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const SlideImages = ({ currentProject = 0 }: { currentProject: number }) => {
	const ref = useRef<HTMLDivElement>(null)
	gsap.registerPlugin(ScrollTrigger)
	const [lastImage, setLastImage] = useState(1)
	const router = useRouter()

	const { showTooltip, hideTooltip } = useTooltip()

	const projectsPath = ['o2t', ' ']

	useEffect(() => {
		showTooltip(`VIEW ${' '.repeat(2)} ⮠ `, 1.5)
	}, [])

	useGSAP(() => {
		currentProject != projectsPath.length - 1
			? showTooltip('VIEW  ⮠')
			: hideTooltip()

		const imgs = ref.current?.children
		if (imgs) {
			//set the last image to the back
			gsap.to(imgs[lastImage], { zIndex: 0, duration: 0 })
			//set the current image to the front
			gsap.to(imgs[currentProject], {
				zIndex: 10,
				duration: 0,
				x: 0,
				left: 0
			})

			gsap.set(imgs[currentProject].firstChild, { left: -300 })

			gsap.fromTo(
				imgs[currentProject],
				{
					clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
				},
				{
					clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
					duration: 1,
					ease: 'power3.out'
				}
			)

			gsap.to(imgs[currentProject].firstChild, {
				left: 0,
				duration: 1,
				ease: 'power3.out'
			})

			gsap.fromTo(
				imgs[lastImage],
				{ left: 0 },
				{
					left: 300,
					duration: 1,
					ease: 'power3.out',
					onComplete: () => {
						gsap.to(imgs[lastImage], { x: 0, left: 0, duration: 0 })
					}
				}
			)

			setLastImage(currentProject)
		}
	}, [currentProject])

	return (
		<div
			ref={ref}
			className={cn(
				'IMAGES_SLIDE absolute h-full w-full overflow-hidden',
				currentProject != projectsPath.length - 1
					? 'cursor-pointer'
					: 'cursor-auto'
			)}
			onMouseEnter={() => {
				currentProject != projectsPath.length - 1
					? showTooltip('VIEW  ⮠')
					: hideTooltip()
			}}
			onClick={() => {
				hideTooltip()
				currentProject != projectsPath.length - 1 &&
					animatePageOut(
						`projects/${projectsPath[currentProject]}`,
						router
					)
			}}
		>
			<FullSizeImage
				src="/images/testImage.jpg"
				alt="user flow"
				overlayOpacity={0.25}
				fill={true}
				className=""
			/>
			<FullSizeImage
				src="/images/test2.jpg"
				alt="user flow"
				overlayOpacity={0.6}
				fill={true}
				className=""
			/>
		</div>
	)
}

export default SlideImages
