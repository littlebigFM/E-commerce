import { motion, AnimatePresence } from "framer-motion";
import SidebarContent from "../SidebarContent";

const MobileSidebar = ({ open, onClose, isDark, setIsDark }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="
              fixed top-0 left-0
              h-full w-[280px]
              bg-white dark:bg-[#1f1f1f]
              z-60
              px-6 pt-8
              flex flex-col gap-8
              shadow-xl
            "
          >
            <SidebarContent isDark={isDark} setIsDark={setIsDark} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
