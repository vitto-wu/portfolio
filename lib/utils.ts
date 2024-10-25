import { type ClassValue, clsx } from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function splitText(element: React.RefObject<HTMLDivElement>) {
	if (element.current?.children.length) {
		return Array.from(element.current.children)
	}

	const textContent = element.current?.textContent || ''
	const characters = textContent.split(/( )/).map((char, index) => {
		const span = document.createElement('span')
		span.textContent = char
		span.className = 'char'
		span.style.display = 'inline-block'
		span.setAttribute('key', index.toString())
		return span
	})

	if (element.current) {
	  element.current.innerHTML = ''
	}
	characters.forEach((span) => element.current?.appendChild(span))

	return characters
}
