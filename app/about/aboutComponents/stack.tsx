import MagneticIcon from '@/app/components/animationsUI/magneticIcon'
import Icons from '@/app/components/svgIcons/icons'

const Stack = () => {
	return (
		<div className="mx-8 grid h-screen grid-cols-2 items-center justify-items-center gap-2 md:grid-cols-3 md:gap-4 lg:mx-24 lg:grid-cols-4">
			<MagneticIcon className="grid h-full w-full place-content-center bg-gray-100/50 md:col-start-2">
				<Icons.js />
			</MagneticIcon>
			<h4 className="uppercase">
				tech <span className="block text-green-400">stacks</span>
			</h4>
			<MagneticIcon className="grid h-full w-full place-content-center bg-gray-100/50">
				<Icons.css />
			</MagneticIcon>
			<MagneticIcon className="grid h-full w-full place-content-center bg-gray-100/50">
				<Icons.python />
			</MagneticIcon>
			<MagneticIcon className="grid h-full w-full place-content-center bg-gray-100/50">
				<Icons.react />
			</MagneticIcon>
			<MagneticIcon className="grid h-full w-full place-content-center bg-gray-100/50 md:col-start-2 lg:col-start-3">
				<Icons.nextJS />
			</MagneticIcon>
			<MagneticIcon className="col-start-2 grid h-full w-full place-content-center bg-gray-100/50 md:col-start-3 lg:col-start-2">
				<Icons.tailwindCSS />
			</MagneticIcon>
			<MagneticIcon className="grid h-full w-full place-content-center bg-gray-100/50">
				<Icons.git />
			</MagneticIcon>
			<MagneticIcon className="grid h-full w-full place-content-center bg-gray-100/50">
				<Icons.gsap />
			</MagneticIcon>
		</div>
	)
}

export default Stack
