'use client'

import { cn } from '@/lib/utils'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const CustomScrollBar = ({
	trackDisabled = true
}: {
	trackDisabled?: boolean
}) => {
	const scrollTrackRef = useRef<HTMLDivElement>(null)
	const scrollThumbRef = useRef<HTMLDivElement>(null)
	const observer = useRef<ResizeObserver | null>(null)
	const scrollTimeout = useRef<number | null>(null)

	const [thumbHeight, setThumbHeight] = useState(20)
	const [isDragging, setIsDragging] = useState(false)
	const [isThumbMoving, setIsThumbMoving] = useState(false)
	const [scrollStartPosition, setScrollStartPosition] = useState<number>(0)
	const [initialContentScrollTop, setInitialContentScrollTop] =
		useState<number>(0)

	const handleResize = () => {
		if (scrollTrackRef.current) {
			const { clientHeight: trackSize } = scrollTrackRef.current
			const { scrollHeight: pageHeight, clientHeight: contentVisible } =
				document.documentElement
			setThumbHeight(
				Math.max((contentVisible / pageHeight) * trackSize - 8, 20) // 0.5 rem y-margin (8px)
			)
		}
	}

	const handleThumbPosition = useCallback(() => {
		if (!scrollTrackRef.current || !scrollThumbRef.current) return

		const { scrollHeight: pageHeight, scrollTop: contentTop } =
			document.documentElement
		const { clientHeight: trackHeight } = scrollTrackRef.current

		let newTop = (contentTop / pageHeight) * trackHeight
		newTop = Math.min(newTop, trackHeight - thumbHeight)

		const thumb = scrollThumbRef.current
		requestAnimationFrame(() => {
			thumb.style.top = `${newTop}px`
		})

		setIsThumbMoving(true)

		if (scrollTimeout.current) {
			clearTimeout(scrollTimeout.current)
		}

		scrollTimeout.current = window.setTimeout(() => {
			setIsThumbMoving(false)
		}, 50)
	}, [])

	useEffect(() => {
		observer.current = new ResizeObserver(handleResize)
		observer.current.observe(document.body)

		window.addEventListener('scroll', handleThumbPosition)
		return () => {
			observer.current?.disconnect()
			window.removeEventListener('scroll', handleThumbPosition)
		}
	}, [])

	const handleThumbMousedown = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		setScrollStartPosition(e.clientY)
		setInitialContentScrollTop(document.documentElement.scrollTop)
		setIsDragging(true)
	}

	const handleThumbMouseup = (e: MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		if (isDragging) {
			setIsDragging(false)
		}
	}

	const handleThumbMousemove = (e: MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		if (isDragging) {
			const { scrollHeight: pageHeight, clientHeight: contentVisible } =
				document.documentElement

			const deltaY =
				(e.clientY - scrollStartPosition) *
				(contentVisible / thumbHeight)

			const newScrollTop = Math.min(
				initialContentScrollTop + deltaY,
				pageHeight - contentVisible
			)

			document.documentElement.scrollTop = newScrollTop
		}
	}

	const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		const { current: track } = scrollTrackRef
		const { scrollHeight: pageHeight } = document.documentElement
		if (track) {
			const { clientY } = e
			const target = e.target as HTMLDivElement
			const rect = target.getBoundingClientRect()
			const trackTop = rect.top
			const thumbOffset = -(thumbHeight / 2)
			const clickRatio =
				(clientY - trackTop + thumbOffset) / track.clientHeight
			const scrollAmount = Math.floor(clickRatio * pageHeight)
			document.documentElement.scrollTo({
				top: scrollAmount,
				behavior: 'smooth'
			})
		}
	}

	useEffect(() => {
		document.addEventListener('mousemove', handleThumbMousemove)
		document.addEventListener('mouseup', handleThumbMouseup)
		return () => {
			document.removeEventListener('mousemove', handleThumbMousemove)
			document.removeEventListener('mouseup', handleThumbMouseup)
		}
	}, [handleThumbMousemove, handleThumbMouseup])

	useEffect(() => {
		if (isDragging) {
			document.body.classList.add('cursor-grabbing-global')
		} else {
			document.body.classList.remove('cursor-grabbing-global')
		}

		return () => {
			document.body.classList.remove('cursor-grabbing-global')
		}
	}, [isDragging])

	return (
		<div
			className={cn(
				'scrollbar fixed right-1 top-0 z-[99] h-screen w-2 hidden md:block mix-blend-exclusion',
				isDragging ? 'cursor-grabbing' : undefined
			)}
		>
			<div
				ref={scrollTrackRef}
				onClick={trackDisabled ? undefined : handleTrackClick}
				className={cn(
					'track absolute left-0 top-0 h-full w-full',
					!trackDisabled && 'cursor-pointer bg-slate-400/25'
				)}
			></div>
			<div
				ref={scrollThumbRef}
				onMouseDown={handleThumbMousedown}
				className={cn(
					'thumb absolute left-0 my-1 w-full cursor-grab rounded-full bg-white/50 transition-opacity duration-300 ease-in-out hover:opacity-100',
					isDragging || isThumbMoving
						? 'opacity-100 duration-0'
						: 'opacity-0',
					isDragging ? 'cursor-grabbing' : undefined
				)}
				style={{
					height: `${thumbHeight}px`
				}}
			></div>
		</div>
	)
}

export default CustomScrollBar
