 import { motion } from 'framer-motion';
 import { ArrowRight, Github, Linkedin, Mail, Heart } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const Footer = () => {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="relative overflow-hidden">
       {/* CTA Section */}
       <div className="section-padding border-t border-border">
         <div className="container-narrow">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="text-center max-w-3xl mx-auto"
           >
             <h2 className="text-3xl md:text-5xl font-bold mb-6">
               Ready to Build Something{' '}
               <span className="gradient-text">Amazing?</span>
             </h2>
             <p className="text-lg text-muted-foreground mb-10">
               Let's create a scalable, production-ready solution for your next project.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
               <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-purple group">
                 <a href="#contact">
                   Hire Me
                   <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </a>
               </Button>
               <Button asChild variant="outline" size="lg" className="border-border hover:border-primary/50">
                 <a href="#contact">Start a Project</a>
               </Button>
               <Button asChild variant="ghost" size="lg" className="hover:bg-accent/10">
                 <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                   Book a Call
                 </a>
               </Button>
             </div>
           </motion.div>
         </div>
       </div>
 
       {/* Footer Bottom */}
       <div className="py-8 border-t border-border">
         <div className="container-narrow">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
               <span>© {currentYear} Vedant Palekar. Built with</span>
               <Heart className="w-4 h-4 text-primary" />
             </div>
 
             <div className="flex items-center gap-4">
               <a
                 href="https://github.com/vedantpalekar"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 rounded-lg hover:bg-secondary transition-colors"
               >
                 <Github className="w-5 h-5" />
               </a>
              <a
                href="https://www.linkedin.com/in/vedant-palekar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
               <a
                 href="mailto:vedant@example.com"
                 className="p-2 rounded-lg hover:bg-secondary transition-colors"
               >
                 <Mail className="w-5 h-5" />
               </a>
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;