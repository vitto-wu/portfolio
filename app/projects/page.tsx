'use client'

import { useEffect, useRef, useState } from 'react'
import Minimap from './components/minimap'
import ProjectsTitle from './components/projectsTitle'
import SlideImages from './components/slideImages'

const Projects = () => {
	const [currentProject, setCurrentProject] = useState(0)
	const intervalRef = useRef<NodeJS.Timeout | null>(null)
	const projectsLength = 2
	let lastTime = 0
	const slideDuration = 10000

	const changeProject = (newProject: number, increment = 0) => {
		if (increment) {
			setCurrentProject(
				(prevProject) =>
					(prevProject + 1 * increment + projectsLength) %
					projectsLength
			)
		} else setCurrentProject(newProject)

		if (intervalRef.current) {
			clearInterval(intervalRef.current)

			intervalRef.current = setInterval(() => {
				setCurrentProject((prevProject) =>
					prevProject === projectsLength - 1 ? 0 : prevProject + 1
				)
				eventDelay()
			}, slideDuration)
		}
	}

	const eventDelay = () => {
		const currentTime = new Date().getTime()
        if (currentTime - lastTime > 1000){
			lastTime = currentTime
			return true
		}
		return false
	}

	const handleScroll = (event: WheelEvent) => {
		if(!eventDelay()) return
		event.deltaY > 0 ? changeProject(0, 1) : changeProject(0, -1)
	}
	const handleKeyDown = (event: KeyboardEvent) =>{
		if(!eventDelay()) return

		event.key === 'ArrowRight'
			? changeProject(0, 1)
			: event.key === 'ArrowLeft'
				? changeProject(0, -1)
				: null}

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setCurrentProject((prevProject) =>
				prevProject === projectsLength - 1 ? 0 : prevProject + 1
			)
			eventDelay()
		}, slideDuration)

		window.addEventListener('wheel', handleScroll)
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('wheel', handleScroll)
			window.removeEventListener('keydown', handleKeyDown)
			clearInterval(intervalRef.current as NodeJS.Timeout)
		}
	}, [])

	return (
		<div className="PROJECTS relative grid h-screen w-screen place-content-center">
			<SlideImages currentProject={currentProject} />
			<ProjectsTitle currentProject={currentProject} />
			<Minimap
				className="MINIMAP"
				changeProject={changeProject}
				currentProject={currentProject}
			/>
		</div>
	)
}

export default Projects
