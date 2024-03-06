type GridBackgroundProps = {
  heading: string;
  content: string;
};

export default function GridBackground({
  heading,
  content,
}: GridBackgroundProps) {
  return (
    <div className="fixed top-0 -z-10 flex h-screen w-full items-center justify-center bg-black bg-grid-small-white/[0.3]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex w-full flex-col items-center justify-center md:w-[50vw]">
        <h1 className="fancy-color relative z-20 w-4/5 text-balance bg-clip-text py-8 text-center text-4xl font-bold text-transparent sm:text-7xl">
          {heading}
        </h1>

        <p className="w-2/3 whitespace-pre-line text-balance text-center font-light text-gray-400 sm:text-xl">
          {content}
        </p>
      </div>
    </div>
  );
}
