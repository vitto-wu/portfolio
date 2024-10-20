import Footer from '@/app/components/footer'
import BeforeFooter from '../components/animationsUI/beforeFotter'
import CustomScrollBar from '../components/customScrollbar'
import AboutMe from './aboutComponents/aboutMe'
import ListItem from './aboutComponents/listItem'
import Stack from './aboutComponents/stack'

const About = () => {
	return (
		<div>
			<CustomScrollBar />
			<div className="grid h-screen w-full grid-cols-3 items-center p-16 lg:grid-cols-5">
				<div className="absolute inset-0"></div>
				<h2 className="relative col-span-3 text-center lg:col-start-2">
					Enthusiastic about the dynamic areas of motion and web-based
					animation.
				</h2>
			</div>
			<AboutMe />
			<Stack />
			<BeforeFooter>
				<div className="relative flex flex-col md:flex-row gap-8 md:gap-24 bg-red-50 px-8 py-24 md:px-24">
					<h1 className="md:sticky top-24 my-12 h-fit w-fit whitespace-nowrap">
						How I can{' '}
						<span className="block text-green-400">help you</span>{' '}
					</h1>
					<div className="w-full">
						<ListItem />
						<ListItem />
						<ListItem />
						<ListItem />
						<ListItem />
					</div>
				</div>
			</BeforeFooter>
			<Footer />
		</div>
	)
}

export default About
