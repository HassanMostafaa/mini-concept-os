'use client';

import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/social-links';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-24"
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-4 ">Web Developer</h1>
            <h2 className="text-4xl font-light text-primary">&amp; Designer</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono"
          >
            Crafting exceptional digital experiences that elevate brands and
            drive business growth through innovative web solutions.
          </motion.p>
        </div>

        <SocialLinks />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="glass-effect p-12 rounded-3xl text-left space-y-8"
        >
          <h3 className="text-3xl font-semibold">
            Transforming Ideas into Reality
          </h3>
          <p className="text-xl leading-relaxed text-muted-foreground">
            With over 3 years of expertise in crafting seamless digital
            experiences, I specialize in building modern web applications that
            combine cutting-edge technology with intuitive design. From concept
            to deployment, I deliver solutions that help businesses thrive in
            the digital landscape.
          </p>
          <p className="text-xl leading-relaxed text-muted-foreground">
            My approach focuses on creating performant, scalable applications
            that not only look beautiful but also drive real business results
            through optimized user experiences and search engine visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            <h3 className="text-2xl font-semibold">Technical Expertise</h3>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li>Modern Frontend Architecture</li>
              <li>Performance Optimization</li>
              <li>Responsive Design Systems</li>
              <li>SEO & Web Vitals</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            <h3 className="text-2xl font-semibold">Recent Achievement</h3>
            <p className="text-lg text-muted-foreground">
              Led frontend development at caisy.io, implementing innovative
              features and optimizing performance for a cutting-edge headless
              CMS platform.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
