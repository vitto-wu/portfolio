import FullSizeImage from '@/app/components/fullSizeImage'
import { Project } from '../components/ProjectComposition/Index'

const O2T = () => {
	return (
		<Project.Root>
			<Project.Hero
				role={['frontend']}
				tools={['figma', 'next.js', 'tailwindcss']}
				duration="apr 2024 - jun 2024"
			/>
			<Project.Content.Wrap>
				<Project.Content.Header
					tags={['react', 'typescript', 'tailwindcss']}
					projectName="olympics training tracker"
				>
					O2T is a web application designed for{' '}
					<b>Olympic athletes</b>, providing essential tools such as{' '}
					<b>
						workout tracking, health metric monitoring, and weekly
						training planning
					</b>
					. Through a streamlined interface, athletes can easily
					access personalized support and resources to enhance their
					performance and well-being.
				</Project.Content.Header>
				<Project.Content.Content>
					<FullSizeImage
						src="/images/O2T_HOME.png"
						alt="test"
						className="rounded-sm"
					/>
					<section className="grid grid-cols-1 gap-4 px-4 xl:grid-cols-5 xl:px-8">
						<h4 className="mb-4 xl:col-span-2">The Problem</h4>
						<div className="text-justify xl:col-span-3">
							<p className="">
								Olympic athletes face the ongoing challenge of
								balancing a packed schedule of training
								sessions, competitions, and personal
								commitments. Maintaining an efficient plan can
								be exhausting, especially when trying to avoid
								overtraining and ensuring peak performance.
							</p>
							<p className="mt-4">
								Additionally, closely monitoring health is
								crucial, as indicators like heart rate, sleep,
								hydration and calories burned directly affect an
								athlete's performance. However, managing all
								these metrics effectively without the right
								tools can be difficult.
							</p>
						</div>
					</section>
					<section className="flex flex-col gap-4">
						<div className="mb-8 grid grid-cols-1 gap-4 px-4 xl:grid-cols-5 xl:px-8">
							<h4 className="mb-4 xl:col-span-2">Conception</h4>
							<p className="text-justify xl:col-span-3">
								Shown in the figure below, the main pain points
								of the problem have been divided into three main
								screens, making navigation more practical for
								athletes.
							</p>
						</div>
						<FullSizeImage
							src="/images/o2tFlow.png"
							className="rounded-lg border border-gray-400"
							alt="user flow"
						/>
						<FullSizeImage
							src="/images/O2T_DASHBOARD.png"
							className="rounded-sm"
							alt="test"
							caption="Dashboard Screen"
						/>
						<FullSizeImage
							src="/images/O2T_Log.png"
							className="rounded-sm"
							alt="test"
							caption="Workout Log Screen"
						/>
						<FullSizeImage
							src="/images/O2T_METRICS.png"
							className="rounded-sm"
							alt="test"
							caption="Health Metrics Screen"
						/>
					</section>
					<section className="mb-8 grid grid-cols-1 gap-4 px-4 xl:grid-cols-5 xl:px-8">
						<h4 className="xl:col-span-2">Improvments</h4>
						<div className="flex flex-col gap-8 xl:col-span-3">
							<p className="text-justify">
								For the second version of the project, the goal
								is to implement improvements in the interface
								and user experience.
							</p>
							<h6>Responsive Layout</h6>
							<p className="-mt-4 text-justify">
								The current version works well on laptop screens
								but has limitations on mobile devices. In a
								future version, I plan to implement a more
								responsive layout, providing a consistent and
								enjoyable user experience.
							</p>
							<h6>Interactive Tutorial</h6>
							<p className="-mt-4 text-justify">
								A guided onboarding process will allow the
								website to introduce the main features, such as
								workout customization and navigation, in a clear
								and helpful way. Including contextual tips on
								screens will also help users explore the site
								more easily, making the learning curve smooth
								and intuitive.
							</p>
							<h6>Health App Integration</h6>
							<p className="-mt-4 text-justify">
								Synchronizing the site with wearable devices and
								health apps adds a layer of personalization and
								convenience. Integrating health apps will allow
								the site to import data such as heart rate,
								daily steps, and sleep quality, providing more
								accurate insights into users' performance and
								well-being.
							</p>
						</div>
					</section>
				</Project.Content.Content>
			</Project.Content.Wrap>
			<Project.Related />
		</Project.Root>
	)
}

export default O2T
