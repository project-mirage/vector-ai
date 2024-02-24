import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

export default function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="relative h-[300vh] w-full overflow-clip rounded-md bg-black pt-56 dark:border dark:border-white/[0.1]"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Inspire, create, and innovate"
        description="Discover the power of AI that speaks your language and understands your world. Vector's AI solutions are crafted with precision and empathy, making technology accessible and impactful. Join us in shaping a future where technology connects, not complicates."
      />
    </div>
  );
}
