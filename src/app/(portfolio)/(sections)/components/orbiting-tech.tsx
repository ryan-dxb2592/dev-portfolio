import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { getSvgPath } from "@/lib/svg-utils";
import Image from "next/image";

const OrbitingTech = () => {
  const circle1 = [
    {
      name: "React",
      image: getSvgPath("frontend", "reactjs"),
    },
    {
      name: "Next.js",
      image: getSvgPath("frontend", "nextjs"),
    },
    {
      name: "Tailwind CSS",
      image: getSvgPath("frontend", "tailwindcss"),
    },
    {
      name: "TypeScript",
      image: getSvgPath("frontend", "typescript"),
    },
    {
      name: "Docker",
      image: getSvgPath("devops", "docker"),
    },
    {
      name: "Kubernetes",
      image: getSvgPath("devops", "kubernetes"),
    },
  ];

  const circle2 = [
    {
      name: "Node.js",
      image: getSvgPath("backend", "nodejs"),
    },
    {
      name: "Express",
      image: getSvgPath("backend", "expressjs-dark"),
    },
    {
      name: "Python",
      image: getSvgPath("backend", "python"),
    },
    {
      name: "FastAPI",
      image: getSvgPath("backend", "fast-api"),
    },
  ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40} speed={0.5}>
        {circle1.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-center p-1 border rounded-full bg-white"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={40}
                height={40}
                className=""
              />
            </div>
          </div>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={100} reverse speed={1}>
        {circle2.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-center p-1 border rounded-full bg-white"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={40}
                height={40}
                className=""
              />
            </div>
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
};

export default OrbitingTech;
