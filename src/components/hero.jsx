import React, { useEffect } from 'react'
import { useGlitch } from 'react-powerglitch'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function hero() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const glitch = useGlitch();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: .5 }
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section className="h-[94vh] w-full bg-slate-50 flex justify-end flex-col gap-10 p-16 text-black rounded-2xl">
      <div className="w-full xl:w-[50%]">
        <motion.div
          ref={ref}
          // initial={{ opacity: 0, y: 50 }}
          // animate={controls}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" ref={glitch.ref}>Pixelmind Studio</h1>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light w-[100%] md:w-[60%] xl:w-[80%]">
            innovative digital design solutions that capture thee ssence of your message and engage your audience
          </p>
        </motion.div>
      </div>
      <a onClick={scrollToBottom}>Get in touch</a>
    </section >
  )
}

export default hero
