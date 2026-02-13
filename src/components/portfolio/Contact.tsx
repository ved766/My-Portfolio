import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, MessageSquare, Calendar, Send, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
 
 const contactMethods = [
   {
     icon: Mail,
     label: 'Email',
     value: 'vedantpalekar24@gmail.com',
     href: 'mailto:vedant@example.com',
   },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/vedant-palekar',
    href: 'https://www.linkedin.com/in/vedant-palekar',
  },
   {
     icon: MessageSquare,
     label: 'WhatsApp',
     value: '+91 7666823137',
     href: 'https://wa.me/91XXXXXXXXXX',
   },
   {
     icon: Calendar,
     label: 'Schedule Call',
     value: 'Book 30-min call',
    // href: 'https://calendly.com',
   },
 ];
 
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using EmailJS for real-time email sending
      // IMPORTANT: Replace these with your actual EmailJS credentials
      // Get them from: https://dashboard.emailjs.com/
      
      // Step 1: Go to Email Services and copy your Service ID
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      
      // Step 2: Go to Email Templates and copy your Template ID  
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      
      // Step 3: Go to Account > API Keys and copy your Public Key
      // Make sure you're copying the PUBLIC KEY, not the Private Key!
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
      
      // Validate that credentials are set
      if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('Please configure EmailJS credentials. Check EMAILJS_SETUP.md for instructions.');
      }
      
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY
      );

      if (result.text === 'OK' || result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', project: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error: any) {
      console.error('Email sending failed:', error);
      
      // Provide specific error messages
      let errorMessage = 'Failed to send message. Please try again.';
      if (error?.text?.includes('Public Key is invalid')) {
        errorMessage = 'Invalid Public Key. Please check your EmailJS Public Key in Account > API Keys.';
      } else if (error?.text?.includes('Service ID')) {
        errorMessage = 'Invalid Service ID. Please check your EmailJS Service ID.';
      } else if (error?.text?.includes('Template')) {
        errorMessage = 'Invalid Template ID. Please check your EmailJS Template ID.';
      } else if (error?.message) {
        errorMessage = error.message;
      }
      
      setSubmitStatus('error');
      // Store error message for display
      (window as any).lastEmailError = errorMessage;
      // Reset error message after 8 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        (window as any).lastEmailError = null;
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
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
           className="text-center mb-10"
         >
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Let's Build Your <span className="gradient-text">Next Project</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Have a project in mind? Let's discuss how I can help you build 
             a scalable, production-ready solution.
           </p>
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-8">
           {/* Contact Methods */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="space-y-6"
           >
             <h3 className="text-lg font-bold mb-6 text-foreground">Get in Touch</h3>
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
                   whileHover={{ y: -5, scale: 1.02 }}
                   className="p-5 rounded-lg glass hover:glass-strong hover:border-primary/35 transition-all duration-300 group cursor-pointer"
                 >
                   <method.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-125 transition-transform duration-300" />
                   <p className="font-semibold text-sm mb-1 text-foreground">{method.label}</p>
                   <p className="text-xs text-foreground/65">{method.value}</p>
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
            <div className="p-8 md:p-10 rounded-xl glass-strong border border-white/15">
              <h3 className="text-lg font-bold mb-6 text-foreground">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                 <div className="grid sm:grid-cols-2 gap-4">
                   <div>
                     <label className="text-sm font-medium text-foreground/80 mb-2 block">Name</label>
                    <Input
                      name="user_name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/50 border-white/20 focus:border-primary/50 text-foreground placeholder:text-foreground/40"
                      required
                    />
                   </div>
                   <div>
                     <label className="text-sm font-medium text-foreground/80 mb-2 block">Email</label>
                    <Input
                      name="user_email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                   </div>
                 </div>
                 <div>
                   <label className="text-sm text-muted-foreground mb-2 block">Project Type</label>
                  <Input
                    name="project_type"
                    placeholder="e.g., SaaS Backend, Real-time App, API Development"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                 </div>
                 <div>
                   <label className="text-sm text-muted-foreground mb-2 block">Tell me about your project</label>
                  <Textarea
                    name="message"
                    placeholder="Describe your project, timeline, and goals..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                    required
                  />
                 </div>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-success/10 border border-success/20 text-success"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-2 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive"
                  >
                    <span className="text-sm font-medium">
                      {(window as any).lastEmailError || 'Failed to send message. Please try again or email directly.'}
                    </span>
                    <span className="text-xs opacity-80">
                      Make sure your EmailJS credentials are correct. Check the browser console for details.
                    </span>
                  </motion.div>
                )}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 glow-purple group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
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