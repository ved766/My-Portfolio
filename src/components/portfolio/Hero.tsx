 import { motion } from 'framer-motion';
 import { ArrowRight, Calendar, Github, Linkedin, Mail } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import HeroBackground from './HeroBackground';
 
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
      {/* Masterpiece background animation */}
      <HeroBackground />
 
       <div className="container-narrow relative z-10 px-4 md:px-8">
         <div className="max-w-4xl">
          {/* Status Badge - Professional */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full glass border border-primary/30 hover:border-primary/50 transition-all group"
          >
            <motion.span 
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <span className="text-xs font-semibold text-foreground/90 uppercase tracking-wide">
              Available for New Projects
            </span>
          </motion.div>
 
          {/* Main Heading - Expert Level */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight text-foreground"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Backend Engineer & Full-Stack Developer
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-2xl md:text-3xl text-foreground/70 font-medium mt-3"
            >
              Building scalable systems for
              <span className="text-primary font-bold"> startups & enterprises</span>
            </motion.span>
          </motion.h1>
 
          {/* Subtitle - Professional */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg text-foreground/70 max-w-3xl mb-10 leading-relaxed font-medium"
          >
            I specialize in architecting high-performance backend systems with Node.js, Express, and modern cloud technologies. Proven expertise in real-time applications, microservices, and database optimization for companies seeking reliable, scalable solutions.
          </motion.p>
 
          {/* CTA Buttons - Professional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group rounded-lg px-8 py-3 text-base font-semibold shadow-lg shadow-primary/25 text-white transition-all border-0">
                <a href="#contact" className="flex items-center">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="border border-foreground/20 hover:border-primary/40 hover:bg-primary/5 rounded-lg px-8 py-3 text-base font-semibold text-foreground transition-all">
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
          </motion.div>
 
          {/* Tech Stack - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <p className="text-sm font-medium text-muted-foreground mb-5 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 0.6 + index * 0.08,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl glass hover:border-primary/40 transition-all cursor-default group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                  <span className="text-sm font-semibold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
 
          {/* Social Links - Premium */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/vedantpalekar', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vedant-palekar', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:vedant@example.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-xl glass hover:border-primary/40 transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
         </div>
       </div>
 
      {/* Scroll Indicator - Premium */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-primary/30 backdrop-blur-sm bg-white/50 flex justify-center pt-3 hover:border-primary/50 transition-colors cursor-pointer"
        >
          <motion.div 
            className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
     </section>
   );
 };
 
 export default Hero;