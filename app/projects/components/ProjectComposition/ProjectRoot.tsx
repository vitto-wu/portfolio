import CustomScrollBar from '@/app/components/customScrollbar'
import Footer from '@/app/components/footer'
import { ReactNode } from 'react'

const ProjectRoot = ({ children }: { children: ReactNode }) => {
	return (
		<div className="">
			<CustomScrollBar />
			{children}
			<Footer />
		</div>
	)
}

export default ProjectRoot
