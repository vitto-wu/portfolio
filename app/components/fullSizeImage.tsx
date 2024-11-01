import { cn } from '@/lib/utils'
import Image from 'next/image'
import { forwardRef } from 'react'

interface ImageProps {
	src: string
	alt: string
	className?: string
	caption?: string
	overlayOpacity?: number
	fill?: boolean
	thumbnail?: boolean
}

const FullSizeImage = forwardRef<HTMLDivElement, ImageProps>(
	(
		{
			src,
			alt,
			className,
			caption,
			overlayOpacity = 0,
			fill = false,
			thumbnail = false
		},
		ref
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					fill && 'absolute h-full w-full',
					caption && 'mb-6',
					'overflow-hidden',
					className
				)}
			>
				<div
					className={cn(
						'IMG_WRAPPER select-none',
						fill && 'absolute left-0 top-0 w-full h-full'
					)}
				>
					<Image
						src={src}
						alt={alt}
						width={0}
						height={0}
						fill={fill}
						sizes={thumbnail ? '33vw' : '100vw'}
						priority
						className="left-0 top-0 w-full object-cover"
					/>
					{!!overlayOpacity && (
						<div
							className="OVERLAY absolute inset-0 bg-black"
							style={{ opacity: overlayOpacity }}
						></div>
					)}
				</div>
				{caption && (
					<label className="absolute right-0 lg:right-4 mt-2 block px-2 font-mono uppercase xl:mt-3 opacity-80 xl:p-0">
						{caption}
					</label>
				)}
			</div>
		)
	}
)

export default FullSizeImage
