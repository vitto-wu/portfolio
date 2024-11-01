import MagneticIcon from '@/app/components/animationsUI/magneticIcon'
import Icons from '@/app/components/svgIcons/icons'

const Stack = () => {
	return (
		<div className="text-offwhite grid h-screen grid-cols-2 items-center justify-items-center gap-2 px-8 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:px-24">
			<div className="grid h-full w-full place-content-center bg-white/5 md:col-start-2">
				<MagneticIcon>
					<Icons.js />
				</MagneticIcon>
			</div>

			<h4 className="uppercase">
				tech <span className="block opacity-20">stacks</span>
			</h4>

			<div className="grid h-full w-full place-content-center bg-white/5">
				<MagneticIcon>
					<Icons.css />
				</MagneticIcon>
			</div>

			<div className="grid h-full w-full place-content-center bg-white/5">
				<MagneticIcon>
					<Icons.python />
				</MagneticIcon>
			</div>

			<div className="grid h-full w-full place-content-center bg-white/5">
				<MagneticIcon>
					<Icons.react />
				</MagneticIcon>
			</div>

			<div className="grid h-full w-full place-content-center bg-white/5 md:col-start-2 xl:col-start-3">
				<MagneticIcon>
					<Icons.nextJS />
				</MagneticIcon>
			</div>

			<div className="col-start-2 grid h-full w-full place-content-center bg-white/5 md:col-start-3 xl:col-start-2">
				<MagneticIcon>
					<Icons.tailwindCSS />
				</MagneticIcon>
			</div>

			<div className="grid h-full w-full place-content-center bg-white/5">
				<MagneticIcon>
					<Icons.git />
				</MagneticIcon>
			</div>

			<div className="grid h-full w-full place-content-center bg-white/5">
				<MagneticIcon>
					<Icons.gsap />
				</MagneticIcon>
			</div>
		</div>
	)
}

export default Stack
