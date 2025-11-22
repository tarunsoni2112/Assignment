import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AppWithLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onReady = () => setLoaded(true);
    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady);
      return () => window.removeEventListener("load", onReady);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              className="w-16 h-16 rounded-full bg-[#1958ac]"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <LandingPage />
    </>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AppWithLoader />
  </StrictMode>,
);

