'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col
        gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a]"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px]
            leading-[36px] text-white"
          >
            Neal Stephenson
          </h4>
        </div>
        <div>
          <p className="mt-2 font-normal sm:text-[18px] text-[18px]
          sm:leading-[22px] leading-[16px] text-white"
          >
            Fundador | Metaverso
          </p>
        </div>
        <p className="mt-6 font-normal sm:text-[24px] text-[18px]
          sm:leading-[45px] leading-[39px] text-white"
        >
          “Com o desenvolvimento da tecnologia atual, o metaverso é muito útil
          para o trabalho atual, ou pode ser chamado de web 3.0. usando o
          metaverso, você pode usá-lo como qualquer coisa”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover
          rounded-[40px] "
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[60px] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
