import Link from 'next/link'

const Contact = () => {
	return (
		// TODO - correct the height of the div and color of text
		<div className="grid place-content-center h-[400px]">
			<div className="flex flex-col items-start justify-center gap-2">
				<h6 className="">For more informations, send me a mensage <span className='text-red-400 font-bold'>*</span></h6>
				<Link href="mailto:victor1668wu@gmail.com">
					<h2 className="font-mono text-h3 md:text-h2">⮡ test@mail.com</h2>
				</Link>
			</div>
		</div>
	)
}

export default Contact
