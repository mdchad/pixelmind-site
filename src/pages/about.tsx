import React from 'react'
import Services from '@/components/services'

function about() {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col gap-5">
      <section className="h-[94vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-16 text-black rounded-2xl">
        <div className="w-full xl:w-[50%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About</h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
            We specialize in product-focused brand design and offer a comprehensive range of design services
          </p>
        </div>
      </section>

      <div className="py-10 md:p-16">
        <Services />
      </div>

    </div>
  )
}

export default about