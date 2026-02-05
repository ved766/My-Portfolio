 import { motion, useInView } from 'framer-motion';
 import { useRef, useState } from 'react';
 import { Mail, Linkedin, MessageSquare, Calendar, Send, ArrowRight } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Textarea } from '@/components/ui/textarea';
 
 const contactMethods = [
   {
     icon: Mail,
     label: 'Email',
     value: 'vedant@example.com',
     href: 'mailto:vedant@example.com',
   },
   {
     icon: Linkedin,
     label: 'LinkedIn',
     value: '/in/vedantpalekar',
     href: 'https://linkedin.com/in/vedantpalekar',
   },
   {
     icon: MessageSquare,
     label: 'WhatsApp',
     value: '+91 XXXXX XXXXX',
     href: 'https://wa.me/91XXXXXXXXXX',
   },
   {
     icon: Calendar,
     label: 'Schedule Call',
     value: 'Book 30-min call',
     href: 'https://calendly.com',
   },
 ];
 
 const Contact = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     project: '',
     message: '',
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // Handle form submission
     console.log('Form submitted:', formData);
   };
 
   return (
     <section id="contact" className="section-padding relative overflow-hidden">
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
       
       <div ref={ref} className="container-narrow relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="text-center mb-16"
         >
           <span className="text-sm font-mono text-primary mb-4 block">// GET IN TOUCH</span>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Let's Build Your <span className="gradient-text">Next Project</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Have a project in mind? Let's discuss how I can help you build 
             a scalable, production-ready solution.
           </p>
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12">
           {/* Contact Methods */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="space-y-6"
           >
             <h3 className="text-xl font-semibold mb-6">Quick Contact</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {contactMethods.map((method, index) => (
                 <motion.a
                   key={method.label}
                   href={method.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ delay: 0.3 + index * 0.1 }}
                   whileHover={{ y: -3, scale: 1.02 }}
                   className="p-5 rounded-xl glass hover:border-primary/30 transition-all group"
                 >
                   <method.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                   <p className="font-semibold text-sm mb-1">{method.label}</p>
                   <p className="text-xs text-muted-foreground">{method.value}</p>
                 </motion.a>
               ))}
             </div>
 
             <div className="pt-6">
               <p className="text-sm text-muted-foreground mb-4">Response time:</p>
               <p className="text-foreground">
                 Usually within <span className="text-primary font-medium">24 hours</span>
               </p>
             </div>
           </motion.div>
 
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.7, delay: 0.3 }}
           >
             <div className="p-6 md:p-8 rounded-2xl glass-strong">
               <h3 className="text-xl font-semibold mb-6">Start a Project</h3>
               <form onSubmit={handleSubmit} className="space-y-5">
                 <div className="grid sm:grid-cols-2 gap-4">
                   <div>
                     <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                     <Input
                       placeholder="Your name"
                       value={formData.name}
                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                       className="bg-secondary/50 border-border focus:border-primary"
                     />
                   </div>
                   <div>
                     <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                     <Input
                       type="email"
                       placeholder="you@company.com"
                       value={formData.email}
                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       className="bg-secondary/50 border-border focus:border-primary"
                     />
                   </div>
                 </div>
                 <div>
                   <label className="text-sm text-muted-foreground mb-2 block">Project Type</label>
                   <Input
                     placeholder="e.g., SaaS Backend, Real-time App, API Development"
                     value={formData.project}
                     onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                     className="bg-secondary/50 border-border focus:border-primary"
                   />
                 </div>
                 <div>
                   <label className="text-sm text-muted-foreground mb-2 block">Tell me about your project</label>
                   <Textarea
                     placeholder="Describe your project, timeline, and goals..."
                     rows={4}
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                     className="bg-secondary/50 border-border focus:border-primary resize-none"
                   />
                 </div>
                 <Button type="submit" className="w-full bg-primary hover:bg-primary/90 glow-purple group">
                   Send Message
                   <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </Button>
               </form>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Contact;