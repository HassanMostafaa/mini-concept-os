'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function MenuBar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-1/2 -translate-1/2"
    >
      <div className="flex items-center gap-1 p-2 glass-effect rounded-full">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative px-4 py-2 rounded-full text-sm font-light transition-colors"
          >
            {pathname === item.href && (
              <motion.div
                layoutId="bubble"
                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span
              className={
                pathname === item.href
                  ? 'text-primary font-normal'
                  : 'text-muted-foreground'
              }
            >
              {item.label}
            </span>
          </Link>
        ))}
        <div className="relative w-8 h-8">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 rounded-full hover:bg-secondary transition-colors absolute inset-0 flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
