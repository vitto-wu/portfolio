import BeforeFooter from '@/app/components/animationsUI/beforeFotter'
import FullSizeImage from '@/app/components/fullSizeImage'

// TODO - add next version
const ProjectRelated = () => {
	return (
		<BeforeFooter>
			<div className="flex flex-col gap-8 bg-[#f2f2f2] p-8 py-16 lg:p-16">
				<h6 className="font-mono">Next Project</h6>
				<div className='flex flex-col lg:flex-row gap-8'>
					<FullSizeImage
						src="/images/test2.jpg"
						className="blur-sm rounded-sm"

						alt="test"
					/>
					<FullSizeImage
						src="/images/test2.jpg"
						className="blur-sm rounded-sm hidden lg:inline-block"
						alt="test"
					/>
					<FullSizeImage
						src="/images/test2.jpg"
						className="blur-sm rounded-sm hidden lg:inline-block"
						alt="test"
					/>
				</div>
			</div>
		</BeforeFooter>
	)
}

export default ProjectRelated
