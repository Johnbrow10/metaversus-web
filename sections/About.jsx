'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

import { TypingText } from '../components';

import styles from '../styles';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Ajuda Metaverso" textSyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="text-secondary-white
         font-extrabold"
        > Metaverso
        </span> é uma novidade no futuro, onde você pode aproveitar o mundo virtual
        sentindo que é realmente real, você pode sentir o que sente neste
        mundo metaverso, porque esta é realmente a
        <span className="text-secondary-white
        font-extrabold"
        > loucura do metaverso de hoje,
        </span> usando apenas dispositivos
        <span className="text-secondary-white
         font-extrabold"
        > VR
        </span> você pode explorar facilmente o mundo
        do metaverso que deseja, transformar seus sonhos em realidade. Vamos
        <span className="text-secondary-white
        font-extrabold"
        > explorar
        </span> a loucura do metaverso rolando para baixo.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

    </motion.div>
  </section>
);

export default About;
