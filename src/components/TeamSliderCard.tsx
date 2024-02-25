import { useHover } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";

type TeamSliderCardProps = {
  name: string;
  designation: string;
  image: {
    url: string;
    alternativeText: string;
  };
};

export default function TeamSliderCard({
  name,
  designation,
  image,
}: TeamSliderCardProps) {
  let [ref, isHovered] = useHover();

  return (
    <div
      ref={ref}
      className="h-96 relative w-full max-w-48 min-w-[80vw] select-none rounded-lg border-2 border-white max-md:snap-x max-md:snap-mandatory max-md:snap-center md:min-w-[384px]"
    >
      <img
        src={image.url}
        alt={image.alternativeText}
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            key={name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-50 flex h-full w-full flex-wrap items-end justify-start bg-gradient-to-b from-transparent to-black"
          >
            <div className="p-7 text-white">
              <h2 className="text-h4">{name}</h2>
              <h3>{designation}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
