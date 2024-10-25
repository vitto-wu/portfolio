import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const animatePageIn = () => {
	const elements = document.querySelectorAll('.pageTransition > div')

	gsap.fromTo(
		elements,
		{ y: 0 },
		{
			y: '100%',
			stagger: 0.05,
			duration: 0.8,
			ease: 'power4.in'
		}
	)
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
	const elements = document.querySelectorAll('.pageTransition > div')
	/* const main = document.querySelector('main')

	gsap.to(main, {
		scale: 0.8,
		ease: 'power4.in',
		duration: 1,
		transformOrigin: 'center'
	}) */
	gsap.fromTo(
		elements,
		{ y: '200%' },
		{
			y: 0,
			stagger: 0.05,
			duration: 0.8,
			ease: 'power4.out',
			onComplete: () => {
				router.push(href)
			}
		}
	)
}
