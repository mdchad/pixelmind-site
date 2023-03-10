import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { HiPlus } from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';

import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Services from '@/components/services'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials'
import Blog from '@/components/blog'
import Menu from '@components/menu'

function index() {
    return (
        <div className="rounded-xl overflow-hidden flex flex-col gap-5">
            <Hero />
            <Projects />
            <div className="grid grid-cols-3">
                <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-5">
                    <Services />
                </div>
            </div>
            {/* <Testimonials /> */}
            {/* <Team /> */}
            <Blog />
        </div>
    )
}

export default index