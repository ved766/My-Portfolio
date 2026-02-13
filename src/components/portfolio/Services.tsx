 import { motion, useInView } from 'framer-motion';
 import { useRef } from 'react';
 import { Server, Zap, Layout, Wrench, ArrowRight } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const services = [
   {
     icon: Server,
     title: 'Backend Development',
     description: 'Scalable APIs, authentication systems, and database architecture that powers your application.',
     features: ['REST & GraphQL APIs', 'JWT/OAuth Authentication', 'Database Design', 'Microservices'],
   },
   {
     icon: Zap,
     title: 'Real-time Applications',
     description: 'Live features that keep your users engaged with instant updates and seamless communication.',
     features: ['WebSocket Integration', 'Chat Systems', 'Live Notifications', 'Collaborative Features'],
   },
   {
     icon: Layout,
     title: 'SaaS Development',
     description: 'Full-stack solutions for SaaS products with admin panels, dashboards, and subscription logic.',
     features: ['Admin Dashboards', 'Multi-tenancy', 'Payment Integration', 'Analytics'],
   },
   {
     icon: Wrench,
     title: 'Fix & Optimize',
     description: 'Debug performance issues, fix bugs, and optimize your existing codebase for better scalability.',
     features: ['Performance Audits', 'Bug Fixing', 'Code Refactoring', 'Scaling Solutions'],
   },
 ];
 
 const Services = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section id="services" className="section-padding relative">
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
       
       <div ref={ref} className="container-narrow relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="text-center mb-10"
         >
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             How I Can <span className="gradient-text">Help You</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             End-to-end backend solutions for startups and businesses looking to build 
             scalable, reliable products.
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-6">
           {services.map((service, index) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: index * 0.15, duration: 0.6 }}
               whileHover={{ y: -6 }}
               className="group p-7 md:p-8 rounded-xl glass hover:glass-strong hover:border-primary/40 transition-all duration-300 cursor-default border-white/15"
             >
               <div className="flex items-start gap-5 mb-6">
                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center group-hover:from-primary/25 group-hover:to-secondary/20 transition-all duration-300 flex-shrink-0">
                   <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold mb-1 text-foreground">{service.title}</h3>
                   <p className="text-foreground/65 text-sm leading-relaxed">{service.description}</p>
                 </div>
               </div>
               
               <ul className="space-y-2.5 mb-6">
                 {service.features.map((feature) => (
                   <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/70">
                     <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1" />
                     {feature}
                   </li>
                 ))}
               </ul>
 
               <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                 Learn More
                 <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
               </Button>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Services;