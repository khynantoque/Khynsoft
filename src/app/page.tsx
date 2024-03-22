import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { metadata } from "./layout";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 drop-shadow-2xl">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">
            {metadata.title}
          </span>
          <div className="flex space-x-4 text-gray-900">
            <a href="#">Works</a>
            <a href="/blog">Blog</a>
            <a href="#">Community</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      At Khynsoft we specialize in designing, developing and providing Websites and Apps with blazing-fast efficiency.
      </p>
      <TypewriterEffectSmooth
        words={[
          {
            text: "We",
          },
          {
            text: "Build",
          },
          {
            text: "IT,",
            className: "new"
          },
          {
            text: "To",
          },
          {
            text: "Build",
          },
          {
            text: "your",
          },
          {
            text: "Trust.",
            className: "text-blue-500 dark:text-blue-500",
          },
        ]}
      />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          About Us
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Previous Work
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-slate-100">
      <NavBar />
      <HeroPage />
    </div>
  );
}
