'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText, TitleText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText
        title="| Pessoas no Mundo"
        textStyles="text-center"
      />
      <TitleText title={(
        <>
          Acompanhe os amigos ao seu redor e convide-os para jogar juntos no mesmo mundo
        </>
      )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h0-[550px] "
      >
        <img
          src="/map.png"
          alt="Mapa"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px]
          rounded-full bg-[#5d6680]"
        >
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px]
          rounded-full bg-[#5d6680]"
        >
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px]
          rounded-full bg-[#5d6680]"
        >
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        {/* mask group 1 */}
        <div
          className="absolute top-1/2 left-[20%] w-48 h-36 p-[6px]
          rounded-[24px]"
        >
          <img
            src="Mask Group.png"
            alt="mask group Left"
            className="w-full h-full"
          />
          <div className="absolute z-20 bottom-[34%] left-[10%] w-[36px] h-[36px] p-[6px] rounded-full">
            <img
              className="w-full h-full"
              src="/people-01.png"
              alt=""
            />
          </div>
          <div className="absolute z-10 bottom-[34%] left-[16%] w-[36px] h-[36px] p-[6px] rounded-full">
            <img
              className="w-full h-full"
              src="/people-02.png"
              alt=""
            />
          </div>
          <div className="absolute z-0 bottom-[34%] left-[22%] w-[36px] h-[36px] p-[6px] rounded-full">
            <img
              className="w-full h-full"
              src="/people-03.png"
              alt=""
            />
          </div>
          <p
            className="absolute bottom-[40%] left-[38%] font-normal leading-4 text-xs text-white "
          >
            + 264 se juntou
          </p>
          <p className="absolute bottom-[15%] left-[14%] items-center font-bold text-[18px] leading-[22px] text-white">
            Mundo Invertido
          </p>
        </div>
        {/* mask Group 02 */}
        <div
          className="absolute top-20 left-[60%] w-48 h-36 p-[6px]
          rounded-[24px]"
        >
          <img
            src="Mask Group-02.png"
            alt="mask group Left"
            className="w-full h-full object-cover"
          />
          <div className="absolute z-20 bottom-[34%] left-[10%] w-[36px] h-[36px] p-[6px] rounded-full">
            <img
              className="w-full h-full"
              src="/people-01.png"
              alt=""
            />
          </div>
          <div className="absolute z-10 bottom-[34%] left-[16%] w-[36px] h-[36px] p-[6px] rounded-full">
            <img
              className="w-full h-full"
              src="/people-02.png"
              alt=""
            />
          </div>
          <div className="absolute z-0 bottom-[34%] left-[22%] w-[36px] h-[36px] p-[6px] rounded-full">
            <img
              className="w-full h-full"
              src="/people-03.png"
              alt=""
            />
          </div>
          <p
            className="absolute bottom-[40%] left-[38%] font-normal leading-4 text-xs text-white "
          >
            + 264 se juntou
          </p>
          <p className="absolute bottom-[15%] left-[28%] font-bold text-[18px] leading-[22px] text-white">
            Hawkins
          </p>
        </div>

      </motion.div>

    </motion.div>

  </section>
);

export default World;
