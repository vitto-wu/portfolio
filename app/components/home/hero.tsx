'use client'
import Link from 'next/link'
import { useRef } from 'react'

const Hero = () => {
	const nameRef = useRef<HTMLDivElement>(null)

	return (
		<section className="hero grid h-screen place-content-center">
			<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808020_1px,transparent_1px)] bg-[size:20vw_100%]"></div>
			<div className="flex flex-col items-center justify-center gap-4">
				<h1
					ref={nameRef}
					className="select-none font-mono uppercase opacity-0"
				>
					Victor.Wu
				</h1>
				<div className="flex flex-row justify-between gap-4 uppercase md:justify-end">
					<Link href="/cv.pdf" target="_blank">
						<p>read.cv</p>
					</Link>
					<p className=""> • </p>
					<Link href="https://github.com/vitto-wu" target="_blank">
						<p>github</p>
					</Link>
					<p className=""> • </p>
					<Link
						href="https://linkedin.com/in/vitto-wu"
						target="_blank"
					>
						<p>linkedin</p>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
