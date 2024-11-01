'use client'

import { animatePageOut } from '@/lib/animation'
import { useRouter } from 'next/navigation'
import AboutMe from './components/aboutComponents/aboutMe'
import ListItem from './components/aboutComponents/listItem'
import Stack from './components/aboutComponents/stack'
import BeforeFooter from './components/animationsUI/beforeFotter'
import TransitionLink from './components/animationUtils/transitionLink'
import CustomScrollBar from './components/customScrollbar'
import Footer from './components/footer'
import FullSizeImage from './components/fullSizeImage'
import Hero from './components/home/hero'
import { Tags } from './components/tags'

export default function Home() {
	const router = useRouter()

	return (
		<main className="w-screen overflow-x-hidden">
			<CustomScrollBar />
			<Hero />
			<section className="LAST_PROJECT text-offwhite relative flex w-full flex-col gap-2 bg-black py-24 md:py-52">
				<h1 className="HEDEAR absolute top-0 mt-20 flex w-full select-none flex-wrap justify-center px-8 font-black uppercase tracking-wider opacity-15 sm:text-9xl md:mt-40 md:px-40">
					<span>latest</span>
					<span className="ml-16">Project</span>
				</h1>
				<TransitionLink href="/projects">
					<p className="group z-10 inline-block select-none self-end px-4 font-semibold uppercase md:px-16">
						see all projects{' '}
						<span className="inline-block transform transition duration-500 group-hover:rotate-[315deg]">
							+
						</span>
					</p>
				</TransitionLink>
				<div
					className="relative z-10 mx-0 flex flex-grow cursor-pointer flex-col items-center bg-cover bg-center pb-28 font-mono lg:mx-24"
					onClick={() => {
						animatePageOut(`projects/o2t`, router)
					}}
				>
					<FullSizeImage
						src="/images/test2.jpg"
						alt="test"
						className="BACKGROUND"
						overlayOpacity={0.3}
						fill={true}
					/>
					<div className="text-offwhite relative z-20 flex w-full flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
						<div className="flex flex-col gap-2">
							<h5 className="whitespace-nowrap">
								Olympic Training Tracker
							</h5>
							<p className="text-gray-300">
								crafted specifically for olympic athletes
							</p>
						</div>
						<Tags.Root className="md:justify-end">
							<Tags.Tag description="design" />
							<Tags.Tag description="development" />
							<Tags.Tag description="2024" />
						</Tags.Root>
					</div>
					<div className="relative z-20 w-full md:w-[80%]">
						<FullSizeImage src="/images/O2T_HOME.png" alt="test" />
					</div>
				</div>
			</section>
			<div className="bg-black z-10 relative">
				<AboutMe />
				<Stack />
			</div>
			<BeforeFooter>
				<div className="text-offwhite relative flex flex-col gap-8 bg-black px-4 py-24 md:px-8 lg:flex-row lg:gap-24 lg:px-24">
					<h1 className="top-24 my-12 h-fit w-fit whitespace-nowrap">
						How I can
						<span className="block opacity-40">help you</span>
					</h1>
					<div className="w-full">
						<ListItem
							index={1}
							desc="A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation"
							title="Web Development"
						/>
						<ListItem
							index={2}
							desc={`Amplify your online presence with a website that truly connects with your audience's feelings and desires. I design stunning, high-converting sites that align with your business goals, helping you stand out and scale effectively.`}
							title="Web Design"
						/>
						<ListItem
							index={3}
							desc="Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results, helping your business attract the right audience and stand out in the digital landscape."
							title="SEO"
						/>
					</div>
				</div>
			</BeforeFooter>
			<Footer />
		</main>
	)
}

//TODO remover listitem props
