import CustomScrollBar from '@/app/components/customScrollbar'
import Footer from '@/app/components/footer'
import { ReactNode } from 'react'

const ProjectRoot = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	return (
		<div className={className}>
			<CustomScrollBar />
			{children}
			<Footer />
		</div>
	)
}

export default ProjectRoot
