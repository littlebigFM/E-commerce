import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import MobilleNavbar from "./Mobile/MobilleNavbar";

const AnimatedNavbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Scroll down → hide
    if (latest > previous && latest > 80) {
      setHidden(false);
    }
    // Scroll up → show
    else {
      setHidden(true);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-110%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className="
        fixed top-0 left-0 right-0
        bg-[#E7E7E7] dark:bg-[#1f1f1f]
        mx-2 my-2
        rounded-[12px]
        p-2
        z-40
      "
    >
      <div className="py-2">
        <MobilleNavbar />
      </div>
    </motion.div>
  );
};

export default AnimatedNavbar;
