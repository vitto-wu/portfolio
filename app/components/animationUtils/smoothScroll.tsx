'use client'

import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const SmoothScroll = () => {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.1, // Ajusta a velocidade de interpolação
		})

		// Função para sincronizar Lenis com ScrollTrigger
		function raf(time: number) {
			lenis.raf(time)
			ScrollTrigger.update() // Atualiza o ScrollTrigger
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf) // Inicia o loop de atualização

		return () => {
			lenis.destroy() // Limpa o Lenis ao desmontar o componente
		}
	}, [])

	return null
}

export default SmoothScroll
