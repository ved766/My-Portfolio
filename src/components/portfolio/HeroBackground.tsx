import { motion } from 'framer-motion';
import { useMemo } from 'react';

const PARTICLE_COUNT = 60;
const ORB_COUNT = 5;

const HeroBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1.5 + Math.random() * 2,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
        blur: Math.random() > 0.7,
      })),
    []
  );

  const orbs = useMemo(
    () =>
      Array.from({ length: ORB_COUNT }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        size: 300 + Math.random() * 400,
        duration: 25 + Math.random() * 20,
        delay: Math.random() * 10,
        hue: i % 2 === 0 ? 'primary' : 'secondary',
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1: Animated mesh gradient base */}
      <div className="absolute inset-0 hero-mesh-gradient" />

      {/* Layer 2: Large floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-[120px] ${
            orb.hue === 'primary'
              ? 'bg-primary'
              : 'bg-secondary'
          }`}
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: ['-50%', '-30%', '-60%', '-50%'],
            y: ['-50%', '-60%', '-40%', '-50%'],
            scale: [1, 1.25, 0.95, 1],
            opacity: [0.14, 0.22, 0.1, 0.14],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Layer 3: Particle field */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full bg-primary/40 ${
              p.blur ? 'blur-[1px]' : ''
            }`}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              boxShadow: '0 0 6px 2px hsl(var(--primary) / 0.3)',
            }}
            animate={{
              x: [
                0,
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 30,
                0,
              ],
              y: [
                0,
                (Math.random() - 0.5) * 35,
                (Math.random() - 0.5) * 45,
                0,
              ],
              opacity: [0.25, 0.7, 0.35, 0.25],
              scale: [1, 1.4, 1, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Layer 4: Aurora wave overlay */}
      <motion.div
        className="absolute inset-0 hero-aurora"
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Layer 5: Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      {/* Layer 6: Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, hsl(var(--background) / 0.25) 100%)',
        }}
      />

      {/* Layer 7: Subtle grain for depth */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};

export default HeroBackground;
