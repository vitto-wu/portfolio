'use client'
import { useTooltip } from '@/app/components/animationsUI/tooltip'
import FullSizeImage from '@/app/components/fullSizeImage'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const Minimap = ({
	className,
	currentProject,
	changeProject
}: {
	className: string
	currentProject: number
	changeProject: (newProject: number) => void
}) => {
	gsap.registerPlugin(ScrollTrigger)

	const { hideTooltip } = useTooltip()

	const indicatorRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		gsap.to(indicatorRef.current, {
			x: `${currentProject === 0 ? -1 : currentProject * 6 - 0.75}rem`,
			duration: 1,
			ease: 'power2.inOut'
		})
	}, [currentProject])

	return (
		<div
			className={cn(
				'absolute bottom-[5%] left-[50%] z-30 inline-flex -translate-x-[50%] items-center gap-2 [&>*]:cursor-pointer',
				className
			)}
			onMouseEnter={() => hideTooltip()}
		>
			<div
				className="relative aspect-[16/9] w-24"
				onClick={() => changeProject(0)}
			>
				<FullSizeImage
					src="/images/test2.jpg"
					alt="user flow"
					fill={true}
					thumbnail={true}
				/>
			</div>
			<div
				className="text-offwhite grid aspect-[16/9] w-24 select-none place-content-center bg-black font-mono"
				onClick={() => changeProject(1)}
			>
				<label className="cursor-pointer">End...</label>
			</div>
			<div
				ref={indicatorRef}
				className="MINIMAP_INDICATOR pointer-events-none absolute left-0 aspect-[16/9] w-32 -translate-x-4 border-2 border-white"
			></div>
		</div>
	)
}

export default Minimap
