'use client'
import { fontSize } from '@/lib/tailwind-utils'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const ProjectsTiles = ({ currentProject = 0 }: { currentProject: number }) => {
	gsap.registerPlugin(ScrollTrigger)
	const titleRef = useRef<HTMLDivElement>(null)
	const counterRef = useRef<HTMLDivElement>(null)
	const titles = ['olympics training tracker', 'more projects']

	const textStyle = {
		display: 'block',
		width: '100%'
	}

	const animation = (ref: React.RefObject<HTMLDivElement>, delay = 0) => {
		const children = ref.current?.children

		if (children) {
			// new text
			gsap.fromTo(
				children[1],
				{ y: '50%', opacity: 0, skewY: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: 'power2.out',
					delay: 0.5 + delay,
					skewY: 0
				}
			)
			// old text
			gsap.fromTo(
				children[0],
				{ y: 0, opacity: 1, skewY: 0 },
				{
					y: '-150%',
					opacity: 1,
					duration: 0.5,
					ease: 'power2.in',
					skewY: 0,
					onComplete: () => {
						if (children[0]) {
							ref.current?.removeChild(children[0])
						}
					}
				}
			)
		}
	}

	// TODO verify the bug
	const addChild = () => {
		const newSpanTitle = document.createElement('span')
		Object.assign(newSpanTitle.style, textStyle)
		newSpanTitle.style.marginTop = '0.5rem'
		newSpanTitle.textContent =
			titles[!currentProject ? 1 : currentProject - 1]
		titleRef.current?.appendChild(newSpanTitle)

		const newSpanCounter = document.createElement('span')
		Object.assign(newSpanCounter.style, textStyle)
		newSpanCounter.textContent =
			currentProject != titles.length - 1
				? `PROJECT / NO.0${currentProject + 1}`
				: 'COME SOON'
		counterRef.current?.appendChild(newSpanCounter)
	}

	useGSAP(() => {
		const isFirstRender = titleRef.current?.children.length === 2 ? 0.8 : 0

		if (!titleRef.current?.children.length) addChild()

		if (isFirstRender) {
			titleRef.current?.removeChild(titleRef.current?.children[1])
			counterRef.current?.removeChild(counterRef.current?.children[1])
		}

		//create new span for each subtitle
		const newSpanTitle = document.createElement('span')
		Object.assign(newSpanTitle.style, textStyle)
		newSpanTitle.style.marginTop = '0.5rem'
		newSpanTitle.textContent = titles[currentProject]
		titleRef.current?.appendChild(newSpanTitle)

		const newSpanCounter = document.createElement('span')
		Object.assign(newSpanCounter.style, textStyle)
		newSpanCounter.textContent =
			currentProject != titles.length - 1
				? `PROJECT / NO.0${currentProject + 1}`
				: 'COME SOON'
		counterRef.current?.appendChild(newSpanCounter)

		animation(titleRef, isFirstRender)
		animation(counterRef, isFirstRender + 0.2)
	}, [currentProject])

	return (
		<div
			className={cn(
				'PROJECTS_TITLE relative z-10 select-none text-center',
				currentProject != titles.length - 1
					? 'cursor-pointer'
					: 'cursor-auto'
			)}
		>
			<p
				ref={counterRef}
				className="PROJECT_COUNTER text-offwhite relative overflow-hidden font-mono"
				style={{ height: `calc(${fontSize['p']} + 0.5rem)` }}
			>
				<span className="mt-1 block w-full"></span>
			</p>
			<h5
				ref={titleRef}
				className="TITLE_WRAPPER text-offwhite relative overflow-hidden font-bold uppercase"
				style={{ height: `calc(${fontSize['h5']} + 0.5rem)` }}
			>
				<span className="mt-1 block w-full"></span>
			</h5>
		</div>
	)
}

export default ProjectsTiles
