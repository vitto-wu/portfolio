import { cn } from '@/lib/utils'
import FullSizeImage from './fullSizeImage'

const ShowCaseImage = ({
	bgSrc,
	imgSrc,
	caption,
	bgAlt,
	imgAlt,
}: {
	bgSrc: string
	imgSrc: string
	caption: string
	bgAlt: string
	imgAlt: string
}) => {
	return (
		<div className={cn("SHOW_CASE_IMAGES relative flex justify-center items-center", caption && 'mb-6')}>
			<FullSizeImage src={bgSrc} alt={bgAlt} className="rounded-sm" />
			<div className="absolute z-10 w-full md:w-[80%]">
				<FullSizeImage src={imgSrc} alt={imgAlt} className='rounded-sm'/>
			</div>
			{caption && (
				<label className="absolute right-0 lg:right-4 -bottom-6 block px-2 font-mono uppercase opacity-80 xl:mt-3 xl:p-0">
					{caption}
				</label>
			)}
		</div>
	)
}

export default ShowCaseImage
