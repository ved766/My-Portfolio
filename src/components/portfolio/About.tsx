 import { motion } from 'framer-motion';
 import { useInView } from 'framer-motion';
 import { useRef } from 'react';
 import { Server, Zap, Database, Globe } from 'lucide-react';
 
 const highlights = [
   {
     icon: Server,
     title: 'Backend Architecture',
     description: 'Designing scalable server-side systems that handle millions of requests',
   },
   {
     icon: Zap,
     title: 'Real-time Systems',
     description: 'Building live features with WebSockets, Redis pub/sub, and event-driven design',
   },
   {
     icon: Database,
     title: 'Database Design',
     description: 'Optimizing data models and queries for maximum performance',
   },
   {
     icon: Globe,
     title: 'API Development',
     description: 'Creating RESTful APIs with authentication, rate limiting, and documentation',
   },
 ];
 
 const About = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section id="about" className="section-padding relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
       
       <div ref={ref} className="container-narrow relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="text-center mb-16"
         >
           <span className="text-sm font-mono text-primary mb-4 block">// ABOUT ME</span>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Backend Specialist with a{' '}
             <span className="gradient-text">Startup Mindset</span>
           </h2>
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Left Content */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="space-y-6"
           >
             <p className="text-lg text-muted-foreground leading-relaxed">
               I'm a <span className="text-foreground font-medium">backend-focused full-stack developer</span> based 
               in Pune, India. I specialize in building robust, scalable systems that power modern web applications.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
               With hands-on experience in <span className="text-foreground font-medium">Node.js, Express, MongoDB, Redis</span>, 
               and <span className="text-foreground font-medium">AWS</span>, I've built everything from real-time chat platforms 
               to complex workflow management systems.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
               I believe in writing <span className="text-foreground font-medium">clean, maintainable code</span> and 
               architecting systems that scale. Whether it's optimizing database queries or designing 
               event-driven architectures, I bring a <span className="text-foreground font-medium">performance-first</span> approach 
               to every project.
             </p>
 
             {/* Stats */}
             <div className="grid grid-cols-3 gap-4 pt-6">
               {[
                 { value: '10+', label: 'Projects' },
                 { value: '1+', label: 'Year Exp' },
                 { value: '100%', label: 'Dedication' },
               ].map((stat, index) => (
                 <motion.div
                   key={stat.label}
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ delay: 0.4 + index * 0.1 }}
                   className="text-center p-4 rounded-xl glass"
                 >
                   <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                   <div className="text-sm text-muted-foreground">{stat.label}</div>
                 </motion.div>
               ))}
             </div>
           </motion.div>
 
           {/* Right - Highlight Cards */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.7, delay: 0.3 }}
             className="grid grid-cols-1 sm:grid-cols-2 gap-4"
           >
             {highlights.map((item, index) => (
               <motion.div
                 key={item.title}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ delay: 0.4 + index * 0.1 }}
                 whileHover={{ y: -5, scale: 1.02 }}
                 className="p-6 rounded-xl glass hover:border-primary/30 transition-all group cursor-default"
               >
                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                   <item.icon className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="font-semibold mb-2">{item.title}</h3>
                 <p className="text-sm text-muted-foreground">{item.description}</p>
               </motion.div>
             ))}
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;