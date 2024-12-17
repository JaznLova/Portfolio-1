import "./Video.scss";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

type videoArguments = {
  width?: string;
  flexAlign?: string;
  greyTextLeft?: string;
  greyTextRight?: string;
  textLarge?: string;
  source?: string;
};
const Video = ({
  width = "65%",
  flexAlign = "flex-start",
  greyTextLeft = "left",
  greyTextRight = "right",
  textLarge = "large",
  source = "/videos/vidhero.mp4",
}: videoArguments) => {
  const boldTextVariants = {
    initial: { x: "-100%", opacity: 0 },
    hovered: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", bounce: 0.5, duration: 1.5 },
        opacity: { duration: 0.5 },
      },
    },
  };
  const videoVariants = {
    initial: {
      scale: 1.0,
      transition: {
        duration: 0.35,
      },
    },
    hovered: {
      scale: 1.1825,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        bounce: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="video"
      initial="initial"
      animate="initial"
      whileInView="visible"
      whileHover="hovered"
      style={
        {
          "--width": width,
          "--flex-align": flexAlign,
        } as React.CSSProperties & { [key: string]: string }
      }>
      <div className="video-container">
        <motion.video
          variants={videoVariants}
          src={source}
          muted
          loop
          autoPlay
          playsInline
          controlsList="nodownload"
        />
      </div>
      <motion.div className="grey-text">
        <motion.span>{greyTextLeft}</motion.span>
        <motion.span>{greyTextRight}</motion.span>
      </motion.div>
      <motion.div className="bold-text">
        <motion.span
          variants={boldTextVariants}
          style={{
            display: "inline-block",
          }}>
          <FaArrowRight color="var(--obsidian)" />
        </motion.span>

        <motion.span
          variants={{
            initial: {
              x: "clamp(-2.6rem, -2.0571vw + -1.9571rem, -3.5rem)",
              transition: { duration: 0.5, ease: "easeInOut" },
            },
            hovered: {
              x: "0.5rem",
              transition: { type: "spring", bounce: 0.5, duration: 1.5 },
            },
          }}>
          {textLarge}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Video;
