 import { motion, useInView } from 'framer-motion';
 import { useRef } from 'react';
 import { ExternalLink, Github, Layers, MessageSquare, Shield, Users, Database, Zap, ArrowUpRight } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const projects = [
   {
     id: 'funzo',
     title: 'Funzo',
     subtitle: 'Real-time Social Platform',
     description: 'A full-featured social platform with live chat, rooms, notifications, and admin panel. Built to handle thousands of concurrent connections.',
     details: 'Built a complete real-time communication system using WebSocket architecture with Redis pub/sub, enabling instant message delivery across distributed servers. Supports 10K+ concurrent users with zero latency.',
     techStack: ['Node.js', 'Express', 'Socket.IO', 'Redis', 'MongoDB', 'AWS S3', 'React'],
     features: [
       { icon: MessageSquare, text: 'Live Chat & Rooms' },
       { icon: Users, text: 'User Management' },
       { icon: Shield, text: 'Admin Panel' },
       { icon: Zap, text: 'Real-time Notifications' },
     ],
   },
   {
     id: 'trustline',
     title: 'Trustline',
     subtitle: 'Loan Management System',
     description: 'Enterprise-grade loan workflow system with role-based access, document management, and automated processing pipelines.',
     details: 'Implemented a secure, HIPAA-compliant loan management platform with encrypted document storage, comprehensive audit trails, and automated workflow states for enterprise clients.',
     techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'AWS S3', 'Multer'],
     features: [
       { icon: Shield, text: 'RBAC Authentication' },
       { icon: Layers, text: 'Document Workflow' },
       { icon: Database, text: 'Secure Storage' },
       { icon: Users, text: 'Multi-role Access' },
     ],
   },
 ];
 
 const Projects = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section id="projects" className="section-padding relative overflow-hidden">
       <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
       <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
       
       <div ref={ref} className="container-narrow relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="text-center mb-20"
         >
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6">
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             <span className="text-sm font-semibold text-primary uppercase tracking-wide">Notable Work</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
             Projects
           </h2>
           <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
             Carefully crafted solutions that combine technical excellence with strategic thinking
           </p>
         </motion.div>

         <div className="space-y-24">
           {projects.map((project, index) => (
             <motion.div
               key={project.id}
               initial={{ opacity: 0, y: 60 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: index * 0.25, duration: 0.8 }}
               className="group"
             >
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                 {/* Left side - Content */}
                 <motion.div
                   initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                   animate={isInView ? { opacity: 1, x: 0 } : {}}
                   transition={{ delay: index * 0.25 + 0.1, duration: 0.8 }}
                   className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                 >
                   {/* Header */}
                   <div className="mb-8">
                     <div className="inline-block mb-4">
                       <span className="text-sm font-bold text-primary uppercase tracking-widest">
                         {String(index + 1).padStart(2, '0')}
                       </span>
                     </div>
                     <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">{project.title}</h3>
                     <p className="text-lg text-foreground/70 font-medium mb-6">{project.subtitle}</p>
                   </div>

                   {/* Description */}
                   <p className="text-foreground/65 leading-relaxed mb-6 text-base">
                     {project.description}
                   </p>

                   {/* Details */}
                   <div className="bg-gradient-to-br from-primary/8 to-secondary/5 border border-white/10 rounded-xl p-6 mb-8">
                     <p className="text-sm text-foreground/75 leading-relaxed">
                       {project.details}
                     </p>
                   </div>

                   {/* Features Grid */}
                   <div className="grid grid-cols-2 gap-4 mb-8">
                     {project.features.map((feature) => (
                       <motion.div
                         key={feature.text}
                         whileHover={{ x: 6 }}
                         className="flex items-start gap-3 group/feature"
                       >
                         <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mt-1 group-hover/feature:bg-primary/25 transition-colors flex-shrink-0">
                           <feature.icon className="w-5 h-5 text-primary" />
                         </div>
                         <span className="text-sm font-medium text-foreground/80">{feature.text}</span>
                       </motion.div>
                     ))}
                   </div>

                   {/* Tech Stack */}
                   <div className="mb-8">
                     <p className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-4">Tech Stack</p>
                     <div className="flex flex-wrap gap-2">
                       {project.techStack.map((tech) => (
                         <motion.span
                           key={tech}
                           whileHover={{ y: -2 }}
                           className="px-3 py-1.5 text-xs font-medium rounded-lg bg-foreground/5 border border-foreground/10 text-foreground/70 hover:border-primary/30 hover:bg-primary/8 transition-all cursor-default"
                         >
                           {tech}
                         </motion.span>
                       ))}
                     </div>
                   </div>

                   {/* Buttons */}
                   <div className="flex gap-4">
                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                       <Button
                         asChild
                         size="lg"
                         className="gap-2 bg-primary hover:bg-primary/90 text-white border-0 rounded-lg px-6 py-3 font-semibold"
                       >
                         <a href="#">
                           View Project
                           <ArrowUpRight className="w-4 h-4" />
                         </a>
                       </Button>
                     </motion.div>
                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                       <Button
                         variant="outline"
                         size="lg"
                         className="gap-2 border border-foreground/20 hover:border-primary/40 hover:bg-primary/5 text-foreground rounded-lg px-6 py-3 font-semibold"
                       >
                         <Github className="w-4 h-4" />
                         Source Code
                       </Button>
                     </motion.div>
                   </div>
                 </motion.div>

                 {/* Right side - Visual */}
                 <motion.div
                   initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                   animate={isInView ? { opacity: 1, x: 0 } : {}}
                   transition={{ delay: index * 0.25 + 0.2, duration: 0.8 }}
                   className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                   whileHover={{ y: -8 }}
                 >
                   <div className="relative">
                     {/* Gradient background shape */}
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl blur-2xl transform -rotate-1 scale-105" />
                     
                     {/* Main card */}
                     <motion.div
                       whileHover={{ rotate: 2 }}
                       className="relative bg-gradient-to-br from-white to-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-2xl shadow-primary/10"
                     >
                       <div className="space-y-6">
                         <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                           <div className="text-3xl font-bold text-primary">{String(index + 1).padStart(2, '0')}</div>
                         </div>

                         <div>
                           <h4 className="text-sm font-bold text-foreground/50 uppercase tracking-wider mb-2">Project</h4>
                           <p className="text-2xl font-bold text-foreground">{project.title}</p>
                         </div>

                         <div className="space-y-4 pt-4 border-t border-white/20">
                           {project.features.slice(0, 3).map((feature) => (
                             <motion.div
                               key={feature.text}
                               whileHover={{ x: 4 }}
                               className="flex items-center gap-3"
                             >
                               <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                 <feature.icon className="w-4 h-4 text-primary" />
                               </div>
                               <span className="text-sm font-medium text-foreground/70">{feature.text}</span>
                             </motion.div>
                           ))}
                         </div>

                         <div className="pt-4 border-t border-white/20">
                           <p className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-3">Stack</p>
                           <div className="grid grid-cols-3 gap-2">
                             {project.techStack.slice(0, 3).map((tech) => (
                               <div key={tech} className="px-2 py-1 rounded bg-primary/8 border border-primary/20">
                                 <p className="text-xs font-medium text-foreground/60 text-center">{tech.split('.')[0]}</p>
                               </div>
                             ))}
                           </div>
                         </div>
                       </div>
                     </motion.div>
                   </div>
                 </motion.div>
               </div>
             </motion.div>
           ))}
         </div>

         {/* Call to action */}
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.6, duration: 0.7 }}
           className="mt-24 text-center"
         >
           <p className="text-foreground/60 mb-6">Want to see more projects or discuss a collaboration?</p>
           <Button
             asChild
             size="lg"
             className="gap-2 bg-primary hover:bg-primary/90 text-white border-0 rounded-lg px-8 py-3 font-semibold"
           >
             <a href="#contact">
               Get in Touch
               <ArrowUpRight className="w-4 h-4" />
             </a>
           </Button>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default Projects;