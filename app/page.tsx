import Link from 'next/link'
import CustomScrollBar from './components/customScrollbar'
import Footer from './components/footer'
import Hero from './components/home/hero'
import { Tags } from './components/tags'
import AboutMe from './about/aboutComponents/aboutMe'
import ListItem from './about/aboutComponents/listItem'
import Stack from './about/aboutComponents/stack'
import BeforeFooter from './components/animationsUI/beforeFotter'
import MagneticIcon from './components/animationsUI/magneticIcon'
import { Calendar } from 'lucide-react'

export default function Home() {
	return (
		<main className="grid h-screen w-screen grid-rows-3 place-content-center bg-black">
			<h2 className="bg-bw120 row-start-2 w-min select-none bg-clip-text text-center font-mono font-normal leading-tight text-transparent">
				Portfolio Under Construction
			</h2>
			<MagneticIcon className="row-start-3 grid place-content-center">
				<div className="grid py-4">
					<div className="bg-bw120 inline-flex h-fit select-none items-center gap-4 overflow-hidden rounded-full p-[2px]">
						<div className="flex items-center gap-4 rounded-full bg-black p-4 py-2 font-mono text-white">
							<Calendar size={16} />
							<p>Release on 30.10</p>
						</div>
					</div>
				</div>
			</MagneticIcon>
		</main>
	)
}
