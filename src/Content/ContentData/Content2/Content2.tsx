import "./Content2.scss";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";

const Content2 = () => {
  const text =
    "A team of designers, artists, and dreamers, crafting digital experiences that spark wonder & imagination.".split(
      " "
    );
  const text2 = "stuff we've built".split(" ");
  const titleVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.7,
      },
    },
  };

  return (
    <div className="content-2-container">
      <div className="floating-text">
        <motion.div
          className="icon"
          animate={{
            rotateZ: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        >
          <FaStar color="var(--orange)" size="3vw" />
        </motion.div>
        <div className="text">
          <span>We use fun and playfulness</span>
          <span style={{ marginLeft: "-3%" }}>
            to draw out serious results.
          </span>
        </div>
      </div>
      <h5>[scroll]</h5>
      <div className="video">
        <video
          src="/videos/vidhero.mp4"
          muted
          loop
          autoPlay
          playsInline
          controlsList="nodownload"
        />
      </div>
      <div className="text-2">
        <div className="text-left">
          <h1>Parabolae: /pə'rabələ/</h1>
          <h2>Parables + Parabolae. </h2>
          <h4>Tales and metrics.</h4>
        </div>
        <div className="animated-text">
          {text.map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              viewport={{ amount: 0.5 }}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="title">
        <motion.div
          className="title-text"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 1 }}
        >
          {text2.map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 4,
              }}
              viewport={{ amount: 0.5 }}
            >
              {el}{" "}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="title-sticker"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible" 
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            delay: 0.5,
          }}
        >
          sites, apps and brands
        </motion.div>
      </div>
    </div>
  );
};

export default Content2;
