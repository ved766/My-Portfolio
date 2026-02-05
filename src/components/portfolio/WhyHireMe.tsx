 import { motion, useInView } from 'framer-motion';
 import { useRef } from 'react';
 import { Rocket, Code, Clock, MessageCircle, Globe, CheckCircle } from 'lucide-react';
 
 const reasons = [
   {
     icon: Rocket,
     title: 'Production Experience',
     description: 'Built and deployed real-world applications handling actual users and data.',
   },
   {
     icon: Code,
     title: 'Clean Code',
     description: 'Writing maintainable, well-documented code that your team can easily work with.',
   },
   {
     icon: Clock,
     title: 'Fast Delivery',
     description: 'Efficient development process with clear milestones and realistic timelines.',
   },
   {
     icon: MessageCircle,
     title: 'Great Communication',
     description: 'Regular updates, clear documentation, and responsive to feedback.',
   },
   {
     icon: Globe,
     title: 'Timezone Flexibility',
     description: 'Available for calls across US, Europe, and Asia timezones.',
   },
   {
     icon: Rocket,
     title: 'Startup Mindset',
     description: 'Understanding of MVP development, rapid iteration, and product thinking.',
   },
 ];
 
 const WhyHireMe = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section className="section-padding relative overflow-hidden">
       <div className="absolute inset-0 bg-grid opacity-20" />
       
       <div ref={ref} className="container-narrow relative z-10">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Left Content */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.7 }}
           >
             <span className="text-sm font-mono text-primary mb-4 block">// WHY WORK WITH ME</span>
             <h2 className="text-3xl md:text-5xl font-bold mb-6">
               Your Project in{' '}
               <span className="gradient-text">Expert Hands</span>
             </h2>
             <p className="text-lg text-muted-foreground mb-8">
               When you work with me, you're not just getting a developer—you're getting 
               a partner who cares about your product's success as much as you do.
             </p>
 
             <div className="space-y-4">
               {[
                 'End-to-end project ownership',
                 'Transparent pricing & timeline',
                 'Post-launch support available',
                 'NDA-friendly & confidential',
               ].map((item, index) => (
                 <motion.div
                   key={item}
                   initial={{ opacity: 0, x: -20 }}
                   animate={isInView ? { opacity: 1, x: 0 } : {}}
                   transition={{ delay: 0.3 + index * 0.1 }}
                   className="flex items-center gap-3"
                 >
                   <CheckCircle className="w-5 h-5 text-success" />
                   <span className="text-foreground">{item}</span>
                 </motion.div>
               ))}
             </div>
           </motion.div>
 
           {/* Right Grid */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="grid grid-cols-2 gap-4"
           >
             {reasons.map((reason, index) => (
               <motion.div
                 key={reason.title}
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ delay: 0.3 + index * 0.1 }}
                 whileHover={{ y: -3, scale: 1.02 }}
                 className="p-5 rounded-xl glass hover:border-primary/30 transition-all group cursor-default"
               >
                 <reason.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                 <h3 className="font-semibold text-sm mb-1">{reason.title}</h3>
                 <p className="text-xs text-muted-foreground">{reason.description}</p>
               </motion.div>
             ))}
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default WhyHireMe;