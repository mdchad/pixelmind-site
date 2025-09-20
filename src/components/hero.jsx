import React, { useEffect } from 'react'
import { useGlitch } from 'react-powerglitch'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Spline from '@splinetool/react-spline'

function Hero() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const glitch = useGlitch()

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		})
	}

	const controls = useAnimation()
	const { ref, inView } = useInView({ threshold: 0.5 })

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.5 },
			})
		} else {
			controls.start({ opacity: 0, y: 50 })
		}
	}, [controls, inView])

	return (
		<section
			className="h-[94vh] w-full bg-slate-50 flex text-black rounded-2xl"
			style={{
				backgroundImage:
					'radial-gradient(circle at 1px 1px, #dadada 1px, transparent 0)',
				backgroundSize: '20px 20px',
			}}
		>
			<div className="h-full w-full xl:w-7/12 w-full flex justify-end flex-col gap-10 p-5 md:p-16 ">
				<div className="w-full">
					<motion.div
						ref={ref}
						// initial={{ opacity: 0, y: 50 }}
						// animate={controls}
					>
						<h1
							className="text-4xl md:text-5xl lg:text-6xl font-bold"
							ref={glitch.ref}
						>
							Pixelmind Studio
						</h1>
					</motion.div>

					<motion.div
						ref={ref}
						initial={{ opacity: 0, y: 50 }}
						animate={controls}
					>
						<p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[90%] mt-5">
							{/* innovative digital design solutions that capture thee ssence of your message and engage your audience */}
							Bridging the gap between Business and Technology.
						</p>
					</motion.div>
				</div>
				<a
					onClick={scrollToBottom}
					className="cursor-pointer hover:text-gray-600"
				>
					Get in touch
				</a>
			</div>
			<div className="h-full xl:w-5/12 hidden xl:block">
				{/*<Spline scene="https://prod.spline.design/Xx3GVJIimtGkVwmI/scene.splinecode" />*/}
			</div>
		</section>
	)
}

export default Hero
