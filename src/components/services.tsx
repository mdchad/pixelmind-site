import React from 'react'

const Shine = () => {
    return (
        <div className="flex-1 relative isolate overflow-hidden rounded-2xl bg-white/10 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent"></div>
    )
}

function services() {
    return (
        <section className="gap-10 flex flex-col">
            <div className="mb-5">
                <h4 className="text-3xl md:text-4xl font-bold">Services</h4>
                <p className="text-xl md:text-xl font-light">Our work spans brand identity, art direction, product design and packaging.</p>
            </div>

            <div className="col-span-2 flex gap-5">
                <p className="text-2xl md:text-3xl font-light">Creative Direction</p>
                <Shine />
            </div>

            <div className="col-span-2 flex gap-5">
                <Shine />
                <p className="text-2xl md:text-3xl font-light">Art Direction</p>
            </div>

            <div className="col-span-2 flex gap-5">
                <p className="text-2xl md:text-3xl font-light">Digital Design</p>
                <Shine />
            </div>

            <div className="col-span-2 flex gap-5">
                <Shine />
                <p className="text-2xl md:text-3xl font-light">Brand Strategy</p>
            </div>
        </section>
    )
}

export default services