import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-20 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-gray-400 font-medium text-sm">
        <div className="flex flex-col md:flex-row items-center gap-2">
           <span>Designed and built with 💖 by</span>
           <span className="text-gray-900 font-bold">Avishkar Bhandare</span>
        </div>

        <div className="tracking-widest uppercase text-xs font-bold">
           © 2025 ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
