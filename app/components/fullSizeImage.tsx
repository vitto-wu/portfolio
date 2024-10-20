import { cn } from '@/lib/utils'
import Image from 'next/image'

const FullSizeImage = ({
	src,
	alt,
	className,
	caption
}: {
	src: string
	alt: string
	className?: string
	caption?: string
}) => {
	return (
		<div>
			<Image
				src={src}
				alt={alt}
				objectFit="cover"
				width={0}
				height={0}
				sizes="100vw"
				className={cn('w-full', className)}
			/>
			{caption && <label className="font-mono text-end block uppercase mt-2 xl:mt-4 text-black/70 px-4 xl:p-0">{caption}</label>}
		</div>
	)
}

export default FullSizeImage
