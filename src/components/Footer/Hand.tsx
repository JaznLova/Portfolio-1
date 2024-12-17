import "./Hand.scss";
import { HiHandRaised } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
const Hand = () => {
  const variants = {
    hand: {
      initial: {
        y: 0,
        transition: {
          duration: 1,
          bounce: 0.5,
          type: "spring",
        },
      },
      hovered: {
        y: "-8rem",
        transition: {
          duration: 1.35,
          bounce: 0.5,
          type: "spring",
        },
      },
    },
    arrow: {
      initial: {
        x: "-8rem",
        transition: {
          duration: 0.35,
        },
      },
      hovered: {
        x: 0,
        transition: {
          duration: 1.35,
          bounce: 0.5,
          type: "spring",
        },
      },
    },
    button: {
      initial: {
        backgroundColor: "var(--orange)",
        transformOrigin: "center bottom",
      },
      hovered: {
        backgroundColor: "var(--obsidian)",
        scaleZ: 1.1,
        transformOrigin: "center top",
        transition: { duration: 0.7, type: "spring" },
      },
    },
  };

  return (
    <motion.a
      href="https://mail.google.com/mail/?view=cm&to=jasonmd149@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hand-button"
      initial="initial"
      animate="initial"
      variants={variants.button}
      whileHover="hovered">
      <motion.div className="hand" variants={variants.hand}>
        <HiHandRaised />
      </motion.div>
      <motion.div className="arrow" variants={variants.arrow}>
        <FaArrowRight />
      </motion.div>
    </motion.a>
  );
};

export default Hand;
