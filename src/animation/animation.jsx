import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FadeIn({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 1.03 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
