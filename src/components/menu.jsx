import React, { useState } from 'react'
// import "./styles.css";
import { motion } from 'framer-motion'
import { HiPlus } from 'react-icons/hi'
import Link from 'next/link'

export default function Menu() {
	const [isHover, toggleHover] = useState(false)

	const toggleHoverMenu = () => {
		toggleHover(!isHover)
	}

	const onMouseEnterMenu = () => {
		toggleHover(true)
	}

	const onMouseLeaveMenu = () => {
		toggleHover(false)
	}

	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			transition: {
				duration: 0.2,
			},
			display: 'block',
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			transition: {
				duration: 0.2,
				// delay: 0.3
			},
			transitionEnd: {
				display: 'none',
			},
		},
	}

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth',
		})
	}

	return (
		<div className="fixed right-0 top-0 rounded-b-full z-20">
			<motion.div
				className="menu-item"
				onMouseEnter={onMouseEnterMenu}
				onMouseLeave={onMouseLeaveMenu}
			>
				<div className="menu-item-icon">
					<div className="w-20 h-20 flex items-center justify-center">
						<HiPlus className="text-5xl" />
					</div>
				</div>

				<motion.div
					className="menu-item-submenu"
					initial="exit"
					animate={isHover ? 'enter' : 'exit'}
					variants={subMenuAnimate}
				>
					<div className="menu-item-submenu-con">
						<Link href="/" className="menu-item-submenu-con-item">
							Home
						</Link>
						<Link href="/about" className="menu-item-submenu-con-item">
							About
						</Link>
						<Link href="/projects" className="menu-item-submenu-con-item">
							Projects
						</Link>
						<Link href="/blogs" className="menu-item-submenu-con-item">
							Blogs
						</Link>
						<a onClick={scrollToBottom} className="menu-item-submenu-con-item">
							Contact
						</a>
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}
