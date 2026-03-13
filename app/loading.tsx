"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <motion.div
        className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-4 py-2 text-xs text-slate-300 shadow-lg shadow-black/40"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.1s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-400 [animation-delay:0.05s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-400 [animation-delay:0.15s]" />
        </div>
        <span>Preparing your AI portfolio...</span>
      </motion.div>
    </div>
  );
}

