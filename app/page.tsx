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
		<main className="w-full">
			<CustomScrollBar />
			<Hero />
			<section className="LAST_PROJECT relative flex h-screen w-full flex-col gap-2 bg-[#f2f2f2] py-10 md:py-32">
				<h1 className="HEDEAR absolute flex w-full select-none flex-row justify-center px-8 font-black uppercase tracking-wider text-gray-200 md:-mt-8 md:justify-between md:px-40 md:text-9xl">
					<span>latest</span>
					<span className="hidden md:inline-block">Project</span>
				</h1>
				<TransitionLink href="/projects">
					<p className="z-10 select-none px-4 text-end font-semibold uppercase md:px-16">
						see all projects +{' '}
					</p>
				</TransitionLink>
				<div
					className="relative z-10 m-8 mx-0 flex-grow cursor-pointer bg-cover bg-center font-mono md:mx-24"
					onClick={() => {
						animatePageOut(`projects/o2t`, router)
					}}
				>
					<div className="absolute z-20 flex w-full flex-col justify-between gap-4 p-8 text-white md:flex-row md:items-center">
						<div className="flex flex-col gap-2">
							<h5 className="whitespace-nowrap">
								Olympic Training Tracker
							</h5>
							<p className="text-gray-300">
								crafted specifically for olympic athletes
							</p>
						</div>
						<Tags.Root className="md:justify-end">
							<Tags.Tag description="description" />
							<Tags.Tag description="description" />
							<Tags.Tag description="description" />
						</Tags.Root>
					</div>

					<FullSizeImage
						src="/images/O2T_HOME.png"
						alt="test"
						className=""
					/>
					<div
						className="OVERLAY absolute inset-0 z-10 bg-black/30"
					></div>
				</div>
			</section>
			<AboutMe />
			<Stack />
			<BeforeFooter>
				<div className="relative flex flex-col gap-8 bg-[#f2f2f2] px-4 py-24 md:flex-row md:gap-24 md:px-24">
					<h1 className="top-24 my-12 h-fit w-fit whitespace-nowrap md:sticky">
						How I can
						<span className="block text-black/20">help you</span>
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
