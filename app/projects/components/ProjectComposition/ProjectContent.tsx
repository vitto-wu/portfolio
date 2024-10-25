import { Tags } from '@/app/components/tags'

type HeaderContentProps = {
	children: React.ReactNode
	tags: string[]
	projectName: string
}

//TODO - add live site link
const Header = ({ children, tags, projectName }: HeaderContentProps) => {
	return (
		<div className="top-0 flex flex-col justify-end gap-8 px-4 pt-24 xl:sticky xl:h-screen xl:w-1/3 xl:py-24 xl:pr-8">
			{/* <p className="-mb-6 font-mono text-gray-500">
				visit : <span className="text-green-400">live site ↗</span>
			</p> */}
			<h3 className="title font-sans font-bold uppercase">
				{projectName}
			</h3>
			<Tags.Root className="-mt-4">
				{tags?.map((e, i) => <Tags.Tag key={i} description={e} />)}
			</Tags.Root>
			<p className="mb-4 text-justify">{children}</p>
		</div>
	)
}

const Content = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative mt-8 xl:mt-16 flex w-full flex-col gap-16 xl:gap-24">
			{children}
		</div>
	)
}

// TODO - add live site link
const Wrap = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative flex flex-col bg-[#f2f2f2] pb-8 font-mono xl:flex-row xl:p-8">
			{children}
		</div>
	)
}

export const ProjectContent = {
	Wrap,
	Content,
	Header
}
