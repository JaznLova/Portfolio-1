import './Content1.scss';
import { motion } from 'framer-motion';

const Content1 = () => {
  const wordVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom:number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        delay: custom || 0,
      },
    }),
  };

  const h2Variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  const h3Variants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
        delay: 0.7,
      },
    },
  };

  return (
    <div className="content-1-container">
      <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <motion.span
          custom={0}
          variants={wordVariants}
          style={{ display: 'inline-block' }}
        >
          a
        </motion.span>{' '}
        <motion.span
          custom={0.2}
          variants={wordVariants}
          style={{ display: 'inline-block' }}
        >
          humour-
        </motion.span>{' '}
        <motion.span
          custom={0.4}
          variants={wordVariants}
          style={{ display: 'inline-block' }}
        >
          centric
        </motion.span>
      </motion.h1>
      <div className="lower-text">
        <motion.h2
          variants={h2Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          digital
        </motion.h2>
        <motion.h3
          variants={h3Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          studio
        </motion.h3>
      </div>
    </div>
  );
};

export default Content1;
