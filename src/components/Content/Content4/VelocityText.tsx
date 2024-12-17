import "./VelocityText.scss";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
interface ParallaxProps {
  children: string;
  baseVelocity: number;
}
function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const wrapValue = (value: number, min: number, max: number): number => {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
  };
  const x = useTransform(baseX, (v) => `${wrapValue(v, -20, -45)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
export default function VelocityText() {
  return (
    <section className="component">
      <span className="upper-text">
        <ParallaxText baseVelocity={-2.5}>Framer Motion</ParallaxText>
      </span>
      <span className="lower-text">
        <ParallaxText baseVelocity={2.5}>Scroll velocity</ParallaxText>
      </span>
      <img src="https://www.parabolae.co/images/Pirates-scene.svg" alt="" />
    </section>
  );
}
