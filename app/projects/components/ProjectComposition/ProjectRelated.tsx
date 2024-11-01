import BeforeFooter from '@/app/components/animationsUI/beforeFotter'

// TODO - add next version
const ProjectRelated = () => {
	return (
		<BeforeFooter>
			<div className="text-offwhite flex flex-col gap-16 bg-black p-16 pt-32 md:p-32 md:pt-64">
				<h5 className="font-mono">Next Project</h5>
				<div className="grid place-content-center md:px-24">
					{/* <FullSizeImage
						src="/images/test2.jpg"
						className="blur-sm rounded-sm hidden lg:inline-block"
						alt="test"
					/> */}
					<h2 className="select-none text-center uppercase opacity-15 md:text-9xl">
						There are no more projects...
					</h2>
				</div>
			</div>
		</BeforeFooter>
	)
}

export default ProjectRelated
