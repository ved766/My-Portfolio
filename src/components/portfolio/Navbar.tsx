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
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           isScrolled ? 'glass-strong py-3' : 'py-5'
         }`}
       >
         <div className="container-narrow flex items-center justify-between px-4 md:px-8">
           <motion.a
             href="#"
             className="text-xl font-bold gradient-text"
             whileHover={{ scale: 1.05 }}
           >
             VP<span className="text-foreground">.</span>
           </motion.a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navLinks.map((link, index) => (
               <motion.a
                 key={link.name}
                 href={link.href}
                 initial={{ opacity: 0, y: -10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 }}
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
               >
                 {link.name}
               </motion.a>
             ))}
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
             >
               <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 glow-purple">
                 <a href="#contact">Hire Me</a>
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
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="fixed inset-0 z-40 md:hidden pt-20 bg-background/95 backdrop-blur-xl"
           >
             <div className="flex flex-col items-center gap-6 p-8">
               {navLinks.map((link, index) => (
                 <motion.a
                   key={link.name}
                   href={link.href}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: index * 0.1 }}
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-xl text-foreground hover:text-primary transition-colors"
                 >
                   {link.name}
                 </motion.a>
               ))}
               <Button asChild className="mt-4 w-full max-w-xs bg-primary hover:bg-primary/90 glow-purple">
                 <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                   Hire Me
                 </a>
               </Button>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
 };
 
 export default Navbar;