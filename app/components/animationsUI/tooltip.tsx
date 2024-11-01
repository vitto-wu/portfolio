/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { createContext, ReactNode, useContext, useRef, useState } from 'react'

interface TooltipContextProps {
	showTooltip: (content: string, delay?: number) => void
	hideTooltip: () => void
	changeContent: (content: string) => void
}

const TooltipContext = createContext<TooltipContextProps | undefined>(undefined)

export const TooltipProvider = ({ children }: { children: ReactNode }) => {
	const ref = useRef<HTMLDivElement>(null)
	const refs = useRef<HTMLSpanElement>(null)
	const [content, setContent] = useState<string>('')
	const [show, setShow] = useState<boolean>(false)

	const showTooltip = (content: string, delay = 0) => {
		setContent(content)
		if (!ref.current || !refs.current) return
		gsap.to(ref.current, {
			opacity: 1,
			duration: 0.3,
			scale: 1,
			ease: 'power1.out',
			delay: delay
		})
		gsap.to(refs.current, {
			duration: 0.3,
			scale: 1,
			ease: 'power1.out',
			delay: delay
		})

		setShow(true)
	}

	const hideTooltip = () => {
		gsap.to(ref.current, {
			opacity: 0,
			duration: 0.3,
			scale: 0,
			ease: 'power1.out',
			transformOrigin: 'center'
		})
		gsap.to(refs.current, {
			duration: 0.3,
			scale: 0,
			ease: 'power1.out',
			transformOrigin: 'center'
		})

		setShow(false)
	}

	const changeContent = (content: string) => {
		setContent(content)
		show &&
			gsap.fromTo(
				refs.current,
				{
					duration: 0.4,
					scale: 0,
					ease: 'power2.out',
					transformOrigin: 'center'
				},
				{
					duration: 0.4,
					scale: 1,
					ease: 'power2.out'
				}
			)
	}

	useGSAP(() => {
		if (!ref.current || !refs.current) return

		const xTo = gsap.quickTo(ref.current, 'x', {
			duration: 0.3,
			ease: 'power1.out'
		})
		const yTo = gsap.quickTo(ref.current, 'y', {
			duration: 0.3,
			ease: 'power1.out'
		})
		const xTos = gsap.quickTo(refs.current, 'x', {
			duration: 0.38,
			ease: 'power2.out'
		})
		const yTos = gsap.quickTo(refs.current, 'y', {
			duration: 0.38,
			ease: 'power2.out'
		})

		const mouseMove = (e: MouseEvent) => {
			// +20 shift the center - 200px of origin
			xTo(e.clientX + 220)
			yTo(e.clientY + 220)
			xTos(e.clientX + 220)
			yTos(e.clientY + 220)
		}

		document.addEventListener('mousemove', mouseMove)

		return () => {
			document.removeEventListener('mousemove', mouseMove)
		}
	}, [])

	return (
		<TooltipContext.Provider
			value={{ showTooltip, hideTooltip, changeContent }}
		>
			{children}
			<div className={cn('TOOLTIP hidden md:block')}>
				<div
					ref={ref}
					className="fixed -left-[200px] -top-[200px] z-[40] inline h-[40px] scale-0 rounded-md bg-black/20 backdrop-blur-sm"
				>
					<span className="pointer-events-none relative select-none items-center justify-center whitespace-pre px-8 text-center text-label font-medium text-transparent opacity-0">
						{content}
					</span>
				</div>
				<span
					ref={refs}
					className="text-offwhite pointer-events-none fixed -left-[200px] -top-[200px] z-[40] flex h-[40px] scale-0 select-none items-center justify-center px-8 text-center text-label font-medium"
				>
					<span className="whitespace-pre">{content}</span>
				</span>
			</div>
		</TooltipContext.Provider>
	)
}

export const useTooltip = () => {
	const context = useContext(TooltipContext)
	if (!context) {
		throw new Error('useTooltip must be used within a TooltipProvider')
	}
	return context
}
