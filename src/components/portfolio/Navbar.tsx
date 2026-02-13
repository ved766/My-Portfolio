 import { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { Menu, X } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const navLinks = [
   { name: 'About', href: '#about' },
   { name: 'Skills', href: '#skills' },
   { name: 'Projects', href: '#projects' },
   { name: 'Services', href: '#services' },
   { name: 'Contact', href: '#contact' },
 ];
 
 const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-strong py-4 shadow-lg shadow-primary/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container-narrow flex items-center justify-between px-4 md:px-8">
          <motion.a
            href="#"
            className="text-xl font-black tracking-tight text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            VEDANT<span className="text-primary">PALEKAR</span>
          </motion.a>

          {/* Desktop Navigation - Expert Level */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, ease: "easeOut" }}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/8 rounded-lg transition-all duration-300 relative"
                whileHover={{ backgroundColor: "rgba(88, 86, 214, 0.12)" }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="w-px h-5 bg-border mx-2" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="sm" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 rounded-lg px-8 py-2 font-semibold text-white border-0 transition-all duration-300">
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          </div>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="md:hidden p-2 text-foreground"
           >
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
         </div>
       </motion.nav>
 
      {/* Mobile Menu - Premium */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden pt-24 glass-strong"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-8 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  whileHover={{ x: 10 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 w-full max-w-xs"
              >
                <Button asChild className="w-full bg-primary hover:bg-primary/90 glow-purple rounded-xl py-6 text-base font-semibold">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Hire Me
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
     </>
   );
 };
 
 export default Navbar;