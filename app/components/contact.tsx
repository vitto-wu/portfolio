import Link from 'next/link'

const Contact = () => {
	return (
		// TODO - correct the height of the div
		<div className="grid place-content-center h-[400px]">
			<div className="flex flex-col items-start justify-center gap-2">
				<h6 className="">For more informations, send me a mensage</h6>
				<Link href="mailto:hello@wu.com">
					<h2 className="font-mono">⮡ hello@wu.com</h2>
				</Link>
			</div>
		</div>
	)
}

export default Contact
