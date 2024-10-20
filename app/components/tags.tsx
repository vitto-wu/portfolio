import { cn } from '@/lib/utils'

import { ReactNode } from 'react'
import MagneticIcon from './animationsUI/magneticIcon'

const TagWrapper = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	return (
		<div className={cn('flex flex-wrap gap-2 md:gap-4', className)}>
			{children}
		</div>
	)
}

const Tag = ({ description }: { description: string }) => {
	return (
		<MagneticIcon className='grid h-fit'>
			<label className="select-none rounded-sm bg-black/10 p-2 font-mono uppercase">
				{description}
			</label>
		</MagneticIcon>
	)
}

export const Tags = {
	Root: TagWrapper,
	Tag: Tag
}
