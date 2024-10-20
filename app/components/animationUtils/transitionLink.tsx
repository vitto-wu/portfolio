'use client'

import { animatePageOut } from '@/lib/animation'
import { usePathname, useRouter } from 'next/navigation'
import { cloneElement, ReactElement } from 'react'

const TransitionLink = ({
	href,
	children
}: {
	href: string
	children: ReactElement
}) => {
	const router = useRouter()
	const pathname = usePathname()

	const handleClick = () => {
		if (pathname === href) return
		animatePageOut(href, router)
	}

	return cloneElement(children, {
		onClick: handleClick,
		className: `${children.props.className} cursor-pointer`
	})
}

export default TransitionLink
