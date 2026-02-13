 import { motion, useInView } from 'framer-motion';
 import { useRef } from 'react';
 
 const skillCategories = [
   {
     title: 'Backend',
     color: 'primary',
     skills: [
       { name: 'Node.js', level: 95 },
       { name: 'Express.js', level: 92 },
       { name: 'REST APIs', level: 90 },
       { name: 'JWT Auth', level: 88 },
       { name: 'RBAC', level: 85 },
       { name: 'Socket.IO', level: 90 },
       { name: 'Redis', level: 85 },
     ],
   },
   {
     title: 'Frontend',
     color: 'accent',
     skills: [
       { name: 'React.js', level: 88 },
       { name: 'TypeScript', level: 85 },
       { name: 'JavaScript', level: 85 },
       { name: 'Tailwind CSS', level: 92 },
// { name: 'Next.js', level: 75 },
     ],
   },
   {
     title: 'Cloud & DevOps',
     color: 'success',
     skills: [
      { name: 'AWS S3', level: 85 },
     ],
   },
   {
     title: 'Tools & Database',
     color: 'primary',
     skills: [
       { name: 'MongoDB', level: 90 },
  //     { name: 'PostgreSQL', level: 78 },
       { name: 'Git', level: 92 },
       { name: 'Postman', level: 95 },
     ],
   },
 ];
 
 const Skills = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section id="skills" className="section-padding relative">
       <div className="absolute inset-0 bg-grid opacity-20" />
       
       <div ref={ref} className="container-narrow relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="text-center mb-10"
         >
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Skills & <span className="gradient-text">Technologies</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Specialized in backend technologies with strong frontend capabilities. 
             Always learning and adapting to new tools.
           </p>
         </motion.div>
 
         <div className="grid md:grid-cols-2 gap-8">
           {skillCategories.map((category, catIndex) => (
             <motion.div
               key={category.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: catIndex * 0.15, duration: 0.6 }}
               className="p-6 rounded-2xl glass"
             >
               <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                 <span className={`w-3 h-3 rounded-full bg-${category.color}`} />
                 {category.title}
               </h3>
               <div className="space-y-4">
                 {category.skills.map((skill, skillIndex) => (
                   <motion.div
                     key={skill.name}
                     initial={{ opacity: 0, x: -20 }}
                     animate={isInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ delay: catIndex * 0.15 + skillIndex * 0.05 + 0.2 }}
                   >
                     <div className="flex justify-between mb-2">
                       <span className="text-sm font-medium">{skill.name}</span>
                       <span className="text-sm text-muted-foreground">{skill.level}%</span>
                     </div>
                     <div className="h-2 rounded-full bg-secondary overflow-hidden">
                       <motion.div
                         initial={{ width: 0 }}
                         animate={isInView ? { width: `${skill.level}%` } : {}}
                         transition={{ delay: catIndex * 0.15 + skillIndex * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
                         className={`h-full rounded-full ${
                           category.color === 'primary' 
                             ? 'bg-gradient-to-r from-primary to-primary/70' 
                             : category.color === 'accent'
                             ? 'bg-gradient-to-r from-accent to-accent/70'
                             : 'bg-gradient-to-r from-success to-success/70'
                         }`}
                       />
                     </div>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Skills;