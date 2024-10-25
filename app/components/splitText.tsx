import React, { Children, ReactNode } from 'react'

interface SplitTextProps {
	children: ReactNode
	splitType?: 'char' | 'line'
	className?: string
}

const SplitText = ({
	children,
	splitType = 'char',
	className
}: SplitTextProps) => {
	const splitContent = (text: string) => {
		if (splitType === 'char') {
			return text.split('').map((char, index) => (
				<span key={index} className={className}>
					{char}
				</span>
			))
		} else if (splitType === 'line') {
			return text.split('\n').map((line, index) => (
				<div key={index} className={className}>
					{line}
				</div>
			))
		}
		return null
	}

	const renderChildren = () => {
		return Children.map(children, (child) => {
			if (
				React.isValidElement(child) &&
				typeof child.props.children === 'string'
			) {
				return React.cloneElement(child as React.ReactElement, {
					children: splitContent(child.props.children)
				})
			}
			return child
		})
	}

	return <div>{renderChildren()}</div>
}

export default SplitText
