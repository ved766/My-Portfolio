 import { motion } from 'framer-motion';
 import { ArrowRight, Calendar, Github, Linkedin, Mail } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const techStack = [
   { name: 'Node.js', icon: '⬢' },
   { name: 'React', icon: '⚛' },
   { name: 'MongoDB', icon: '🍃' },
   { name: 'AWS', icon: '☁' },
   { name: 'Redis', icon: '◉' },
   { name: 'Socket.IO', icon: '🔌' },
 ];
 
 const codeLines = [
   'const server = express();',
   'io.on("connection", handleSocket);',
   'await redis.set(key, data);',
   'router.post("/api", auth, ctrl);',
   'const pool = new Pool({ max: 20 });',
   'app.use(rateLimiter);',
 ];
 
 const Hero = () => {
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-grid opacity-30" />
       <div className="absolute inset-0 bg-hero-gradient" />
       
       {/* Animated Gradient Orbs */}
       <motion.div
         animate={{ 
           scale: [1, 1.2, 1],
           opacity: [0.3, 0.5, 0.3],
         }}
         transition={{ duration: 8, repeat: Infinity }}
         className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
       />
       <motion.div
         animate={{ 
           scale: [1.2, 1, 1.2],
           opacity: [0.2, 0.4, 0.2],
         }}
         transition={{ duration: 10, repeat: Infinity }}
         className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
       />
 
       {/* Animated Code Background */}
       <div className="absolute right-4 md:right-20 top-1/3 hidden lg:block opacity-30">
         <div className="font-mono text-xs text-muted-foreground space-y-2">
           {codeLines.map((line, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 0.6 }}
               transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
               className="text-right"
             >
               {line}
             </motion.div>
           ))}
         </div>
       </div>
 
       <div className="container-narrow relative z-10 px-4 md:px-8">
         <div className="max-w-4xl">
           {/* Availability Badge */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border-success/30"
           >
             <span className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
             <span className="text-sm text-success">Open for Freelance Projects</span>
           </motion.div>
 
           {/* Main Heading */}
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.1 }}
             className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
           >
             I'm{' '}
             <span className="gradient-text glow-text">Vedant Palekar</span>
             <br />
             <span className="text-muted-foreground">Backend Engineer</span>
           </motion.h1>
 
           {/* Subtitle */}
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
           >
             Backend-focused MERN developer building{' '}
             <span className="text-foreground font-medium">scalable real-time systems</span>{' '}
             for startups and SaaS products. Specializing in APIs, WebSockets, and cloud infrastructure.
           </motion.p>
 
           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.3 }}
             className="flex flex-wrap gap-4 mb-12"
           >
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-purple group">
               <a href="#contact">
                 Hire Me
                 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </a>
             </Button>
             <Button asChild variant="outline" size="lg" className="border-border hover:border-primary/50 hover:bg-primary/5">
               <a href="#projects">View Projects</a>
             </Button>
             <Button asChild variant="ghost" size="lg" className="hover:bg-accent/10">
               <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                 <Calendar className="mr-2 w-4 h-4" />
                 Book a Call
               </a>
             </Button>
           </motion.div>
 
           {/* Tech Stack */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.4 }}
             className="mb-10"
           >
             <p className="text-sm text-muted-foreground mb-4">Tech Stack</p>
             <div className="flex flex-wrap gap-3">
               {techStack.map((tech, index) => (
                 <motion.div
                   key={tech.name}
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.5 + index * 0.1 }}
                   whileHover={{ scale: 1.05, y: -2 }}
                   className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:border-primary/30 transition-all cursor-default"
                 >
                   <span className="text-lg">{tech.icon}</span>
                   <span className="text-sm font-medium">{tech.name}</span>
                 </motion.div>
               ))}
             </div>
           </motion.div>
 
           {/* Social Links */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.7, delay: 0.6 }}
             className="flex gap-4"
           >
             {[
               { icon: Github, href: 'https://github.com/vedantpalekar', label: 'GitHub' },
               { icon: Linkedin, href: 'https://linkedin.com/in/vedantpalekar', label: 'LinkedIn' },
               { icon: Mail, href: 'mailto:vedant@example.com', label: 'Email' },
             ].map((social) => (
               <motion.a
                 key={social.label}
                 href={social.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.1, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 className="p-3 rounded-lg glass hover:border-primary/30 transition-all"
                 aria-label={social.label}
               >
                 <social.icon className="w-5 h-5" />
               </motion.a>
             ))}
           </motion.div>
         </div>
       </div>
 
       {/* Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2"
       >
         <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
         >
           <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
         </motion.div>
       </motion.div>
     </section>
   );
 };
 
 export default Hero;