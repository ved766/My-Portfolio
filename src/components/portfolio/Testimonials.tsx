 import { motion, useInView } from 'framer-motion';
 import { useRef } from 'react';
 import { Quote } from 'lucide-react';
 
 const testimonials = [
   {
     quote: "Vedant delivered our MVP in record time. His backend architecture scaled beautifully as we grew from 100 to 10,000 users.",
     author: "Startup Founder",
     role: "CEO, Tech Startup",
     avatar: "SF",
   },
   {
     quote: "Professional, communicative, and technically excellent. The real-time features he built transformed our user engagement.",
     author: "Product Manager",
     role: "PM, SaaS Company",
     avatar: "PM",
   },
   {
     quote: "Working with Vedant was seamless. He understood our requirements quickly and delivered clean, documented code.",
     author: "Tech Lead",
     role: "CTO, Agency",
     avatar: "TL",
   },
 ];
 
 const Testimonials = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section className="section-padding relative">
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
       
       <div ref={ref} className="container-narrow relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="text-center mb-16"
         >
           <span className="text-sm font-mono text-primary mb-4 block">// TESTIMONIALS</span>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             What Clients <span className="gradient-text">Say</span>
           </h2>
         </motion.div>
 
         <div className="grid md:grid-cols-3 gap-6">
           {testimonials.map((testimonial, index) => (
             <motion.div
               key={testimonial.author}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: index * 0.15, duration: 0.6 }}
               whileHover={{ y: -5 }}
               className="p-6 md:p-8 rounded-2xl glass hover:border-primary/30 transition-all"
             >
               <Quote className="w-8 h-8 text-primary/40 mb-4" />
               <p className="text-muted-foreground mb-6 leading-relaxed">
                 "{testimonial.quote}"
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                   {testimonial.avatar}
                 </div>
                 <div>
                   <p className="font-semibold text-sm">{testimonial.author}</p>
                   <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
 
         {/* Client Logos Placeholder */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.6, duration: 0.6 }}
           className="mt-16 text-center"
         >
           <p className="text-sm text-muted-foreground mb-6">Trusted by teams at</p>
           <div className="flex flex-wrap justify-center gap-8 opacity-40">
             {['Startup', 'Tech Co', 'Agency', 'SaaS Inc', 'Digital'].map((company) => (
               <span key={company} className="text-lg font-semibold tracking-wider">
                 {company}
               </span>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default Testimonials;