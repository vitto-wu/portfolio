import Link from 'next/link'

const ProjectThumb = () => {
	return (
		<Link href="/projects/o2t">
			<div className="absolute left-[50%] top-[50%] inline-flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center">
				<div className="text_card text-offwhite absolute flex h-full w-full flex-col justify-between p-8 font-mono font-bold mix-blend-exclusion">
					<div className="card_top">
						<p>EXP 001</p>
						<p>2024</p>
					</div>
					<div className="card_bottom flex flex-col gap-2">
						<h5>Olympic Training Tracker</h5>
						<p>FRONT-END • DESIGN</p>
					</div>
				</div>
				<video
					className="w-full rounded-md border-none"
					loop
					muted
					playsInline
					autoPlay
				>
					<source src="/videos/test.mp4" type="video/mp4" />
					Seu navegador não suporta o elemento de vídeo.
				</video>
			</div>
		</Link>
	)
}

export default ProjectThumb
