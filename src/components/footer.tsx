import Link from 'next/link'
import React from 'react'

function footer() {
    return (
        <footer id="footer">
            <div className="w-full bg-slate-50 flex flex-col lg:flex-row justify-between gap-12 p-16 text-black rounded-2xl">
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Pixelmind Studio</h1>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
                        Let's get in touch
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <address>
                            10 Montgomery
                            San Francisco
                            CA, United States
                        </address>
                        <a href="#">Map</a>
                    </div>

                    <div className="flex-1 flex flex-col gap-5">
                        <div className="flex flex-col">
                            <a href="mailto:#">hello@gmail.com</a>
                            <a href="tel:#">+1 (123) 456 7890</a>
                        </div>

                        <div className="flex flex-col">
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-5 pt-3">
                <div className="flex items-center justify-center">
                    <p className="text-sm text-gray-400">©HelloStudio 2023</p>
                </div>

                <div className="">
                    <ul className="flex gap-4">
                        <li className="text-sm text-gray-400">
                            <Link href="/about"> Privacy Policy </Link>
                        </li>
                        <li className="text-sm text-gray-400">
                            <Link href="/about"> Terms & Condition </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default footer