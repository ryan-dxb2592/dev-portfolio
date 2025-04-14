import GridBackground from "@/components/common/grid-background";
import Image from "next/image";
import { DeveloperProfile } from "@/components/common/code-block/code-profile";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const words = [
    "Full Stack Developer",
    "Software Engineer",
    "DevOps Engineer",
  ];

  return (
    <section className="min-h-screen flex items-center w-full">
      <GridBackground gridColor="#94a3b8" gridOpacity={10} gridSize={40} />
      <div className="relative container max-w-7xl flex flex-col pt-24 lg:pt-0 pb-10 lg:flex-row mx-auto px-4 space-y-1 gap-x-10 gap-y-16 justify-center items-center">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center gap-2">
          <h2 className="xl:text-7xl text-6xl font-black tracking-wide">
            Hello
          </h2>
          <h1 className="xl:text-6xl text-4xl font-bold tracking-wide">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Ryan Pereira
            </span>
          </h1>

          {/* Small Description */}
          <div className="flex flex-col justify-center mt-2 gap-3">
            <div className="w-fit flex justify-center mx-2 items-center border bg-gradient-to-r from-blue-500/10 to-teal-500/10  border-blue-500/20 px-6 py-3 rounded-md tracking-wide shrink-0 -ml-1">
              <FlipWords
                words={words}
                className="text-xl text-blue-400 font-medium"
              />
            </div>
            <p className="text-muted-foreground text-lg xl:text-xl">
              I'm passionate about building scalable and efficient systems.
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-3 mt-8">
            <Button
              variant="outline"
              className="px-4 py-2 h-14 text-base font-medium rounded-md cursor-pointer"
            >
              More About Me
            </Button>
            <Button className="px-4 py-2 h-14 text-base font-medium rounded-md cursor-pointer">
              Get My Resume
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center gap-2 bg-red-500/10">
          <DeveloperProfile />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
