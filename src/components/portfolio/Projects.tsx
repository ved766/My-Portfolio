 import { motion, useInView } from 'framer-motion';
 import { useRef } from 'react';
 import { ExternalLink, Github, Layers, MessageSquare, Shield, Users, Database, Zap } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const projects = [
   {
     id: 'funzo',
     title: 'Funzo',
     subtitle: 'Real-time Social Platform',
     description: 'A full-featured social platform with live chat, rooms, notifications, and admin panel. Built to handle thousands of concurrent connections.',
     problem: 'Users needed a real-time communication platform that could scale while maintaining low latency.',
     solution: 'Implemented WebSocket-based architecture with Redis for pub/sub, enabling instant message delivery across distributed servers.',
     techStack: ['Node.js', 'Express', 'Socket.IO', 'Redis', 'MongoDB', 'AWS S3', 'React'],
     features: [
       { icon: MessageSquare, text: 'Live Chat & Rooms' },
       { icon: Users, text: 'User Management' },
       { icon: Shield, text: 'Admin Panel' },
       { icon: Zap, text: 'Real-time Notifications' },
     ],
     gradient: 'from-primary to-accent',
     accentColor: 'primary',
   },
   {
     id: 'trustline',
     title: 'Trustline',
     subtitle: 'Loan Management System',
     description: 'Enterprise-grade loan workflow system with role-based access, document management, and automated processing pipelines.',
     problem: 'Financial institutions needed a secure, auditable system for managing loan applications and documents.',
     solution: 'Built a RBAC system with encrypted document storage, audit trails, and automated workflow states.',
     techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'AWS S3', 'Multer'],
     features: [
       { icon: Shield, text: 'RBAC Authentication' },
       { icon: Layers, text: 'Document Workflow' },
       { icon: Database, text: 'Secure Storage' },
       { icon: Users, text: 'Multi-role Access' },
     ],
     gradient: 'from-accent to-primary',
     accentColor: 'accent',
   },
 ];
 
 const Projects = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section id="projects" className="section-padding relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
       
       <div ref={ref} className="container-narrow relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="text-center mb-16"
         >
           <span className="text-sm font-mono text-primary mb-4 block">// FEATURED WORK</span>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Projects That <span className="gradient-text">Deliver Results</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Real-world applications built with modern architecture, 
             scalability in mind, and production-ready code.
           </p>
         </motion.div>
 
         <div className="space-y-16">
           {projects.map((project, index) => (
             <motion.div
               key={project.id}
               initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: index * 0.2, duration: 0.7 }}
               className="project-card"
             >
               <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
               
               <div className="relative p-6 md:p-10">
                 <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                   {/* Project Info */}
                   <div className="space-y-6">
                     <div>
                       <span className={`text-sm font-mono text-${project.accentColor} mb-2 block`}>
                         {project.subtitle}
                       </span>
                       <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                     </div>
                     
                     <p className="text-muted-foreground">{project.description}</p>
 
                     <div className="space-y-4">
                       <div>
                         <h4 className="text-sm font-semibold text-primary mb-2">The Problem</h4>
                         <p className="text-sm text-muted-foreground">{project.problem}</p>
                       </div>
                       <div>
                         <h4 className="text-sm font-semibold text-accent mb-2">The Solution</h4>
                         <p className="text-sm text-muted-foreground">{project.solution}</p>
                       </div>
                     </div>
 
                     {/* Tech Stack */}
                     <div className="flex flex-wrap gap-2">
                       {project.techStack.map((tech) => (
                         <span
                           key={tech}
                           className="px-3 py-1 text-xs font-mono rounded-full bg-secondary border border-border"
                         >
                           {tech}
                         </span>
                       ))}
                     </div>
 
                     {/* Buttons */}
                     <div className="flex gap-4 pt-4">
                       <Button variant="outline" size="sm" className="border-border hover:border-primary/50">
                         <Github className="w-4 h-4 mr-2" />
                         View Code
                       </Button>
                       <Button variant="outline" size="sm" className="border-border hover:border-primary/50">
                         <ExternalLink className="w-4 h-4 mr-2" />
                         Live Demo
                       </Button>
                     </div>
                   </div>
 
                   {/* Features Grid */}
                   <div className="grid grid-cols-2 gap-4">
                     {project.features.map((feature, featureIndex) => (
                       <motion.div
                         key={feature.text}
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={isInView ? { opacity: 1, scale: 1 } : {}}
                         transition={{ delay: index * 0.2 + featureIndex * 0.1 + 0.3 }}
                         className="p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all group"
                       >
                         <div className={`w-10 h-10 rounded-lg bg-${project.accentColor}/10 flex items-center justify-center mb-3 group-hover:bg-${project.accentColor}/20 transition-colors`}>
                           <feature.icon className={`w-5 h-5 text-${project.accentColor}`} />
                         </div>
                         <span className="text-sm font-medium">{feature.text}</span>
                       </motion.div>
                     ))}
                   </div>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Projects;