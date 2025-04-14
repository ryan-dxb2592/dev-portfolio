import GridBackground from "@/components/common/grid-background";
import { IconCloud } from "@/components/magicui/icon-cloud";
import TechStackCard, { Tech } from "./components/tech-stack-card";
import { Code, Server, Database, Cloud, Bot, Settings } from "lucide-react";
import { getSvgPath } from "@/lib/svg-utils";
import OrbitingTech from "./components/orbiting-tech";

// Icon slug arrays removed as they're no longer needed
const TechStackSection = () => {
  // Frontend Technologies
  const frontendTechs: Tech[] = [
    {
      name: "React",
      image: getSvgPath("frontend", "reactjs"),
      alt: "React Logo",
      slug: "react",
    },
    {
      name: "Next.js",
      image: getSvgPath("frontend", "nextjs"),
      alt: "Next.js Logo",
      slug: "nextjs",
    },
    {
      name: "JavaScript",
      image: getSvgPath("frontend", "javascript"),
      alt: "JavaScript Logo",
      slug: "javascript",
    },
    {
      name: "CSS3",
      image: getSvgPath("frontend", "css3"),
      alt: "CSS3 Logo",
      slug: "css3",
    },
    {
      name: "Tailwind CSS",
      image: getSvgPath("frontend", "tailwindcss"),
      alt: "Tailwind CSS Logo",
      slug: "tailwindcss",
    },
    {
      name: "Redux",
      image: getSvgPath("frontend", "redux"),
      alt: "Redux Logo",
      slug: "redux",
    },
    {
      name: "React Query",
      image: getSvgPath("frontend", "react-query"),
      alt: "React Query Logo",
      slug: "react-query",
    },
    {
      name: "Shadcn UI",
      image: getSvgPath("frontend", "shadcnui"),
      alt: "Shadcn UI Logo",
      slug: "shadcnui",
    },
  ];

  // Backend Technologies
  const backendTechs: Tech[] = [
    {
      name: "Node.js",
      image: getSvgPath("backend", "nodejs"),
      alt: "Node.js Logo",
      slug: "nodejs",
    },
    {
      name: "Express.js",
      image: getSvgPath("backend", "expressjs-dark"),
      alt: "Express.js Logo",
      slug: "expressjs",
    },
    {
      name: "Python",
      image: getSvgPath("backend", "python"),
      alt: "Python Logo",
      slug: "python",
    },
    {
      name: "FastAPI",
      image: getSvgPath("backend", "fast-api"),
      alt: "FastAPI Logo",
      slug: "fastapi",
    },
  ];

  // AI Technologies
  const aiTechs: Tech[] = [
    {
      name: "OpenAI",
      image: getSvgPath("ai", "openai"),
      alt: "OpenAI Logo",
      slug: "openai",
    },
    {
      name: "LangChain",
      image: getSvgPath("ai", "langchain"),
      alt: "LangChain Logo",
      slug: "langchain",
    },
    {
      name: "LangGraph",
      image: getSvgPath("ai", "langgraph"),
      alt: "LangGraph Logo",
      slug: "langgraph",
    },
    {
      name: "n8n",
      image: getSvgPath("ai", "n8n"),
      alt: "n8n Logo",
      slug: "n8n",
    },
  ];

  // Database Technologies
  const databaseTechs: Tech[] = [
    {
      name: "PostgreSQL",
      image: getSvgPath("database", "postgresql"),
      alt: "PostgreSQL Logo",
      slug: "postgresql",
    },
    {
      name: "MongoDB",
      image: getSvgPath("database", "mongodb"),
      alt: "MongoDB Logo",
      slug: "mongodb",
    },
    {
      name: "Redis",
      image: getSvgPath("database", "redis"),
      alt: "Redis Logo",
      slug: "redis",
    },
  ];

  // DevOps Technologies
  const devopsTechs: Tech[] = [
    {
      name: "Docker",
      image: getSvgPath("devops", "docker"),
      alt: "Docker Logo",
      slug: "docker",
    },
    {
      name: "Kubernetes",
      image: getSvgPath("devops", "kubernetes"),
      alt: "Kubernetes Logo",
      slug: "kubernetes",
    },
    {
      name: "AWS",
      image: getSvgPath("devops", "aws"),
      alt: "AWS Logo",
      slug: "aws",
    },
    {
      name: "Grafana",
      image: getSvgPath("devops", "grafana"),
      alt: "Grafana Logo",
      slug: "grafana",
    },
  ];

  // Other Technologies
  const otherTechs: Tech[] = [
    {
      name: "Figma",
      image: getSvgPath("others", "figma"),
      alt: "Figma Logo",
      slug: "figma",
    },
    {
      name: "Zod",
      image: getSvgPath("others", "zod"),
      alt: "Zod Logo",
      slug: "zod",
    },
    {
      name: "Swagger",
      image: getSvgPath("others", "swagger"),
      alt: "Swagger Logo",
      slug: "swagger",
    },
    {
      name: "WebRTC",
      image: getSvgPath("others", "webrtc"),
      alt: "WebRTC Logo",
      slug: "webrtc",
    },
  ];

  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
  ];

  return (
    <section className="relative min-h-screen flex items-center w-full">
      <GridBackground gridColor="#94a3b8" gridOpacity={10} gridSize={40} />
      <div className="container max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center">
          {/* <IconCloud /> */}
          <OrbitingTech />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechStackCard
            title="Frontend Development"
            description="Developing engaging and user-friendly web experiences with a focus on responsiveness and interactivity."
            logo={Code}
            techs={frontendTechs}
            logoColor={colors[0]}
          />
          <TechStackCard
            title="Backend Development"
            description="Building robust server-side applications and APIs that power web applications."
            logo={Server}
            techs={backendTechs}
            logoColor={colors[1]}
          />
          <TechStackCard
            title="AI & ML"
            description="Leveraging artificial intelligence and machine learning technologies to create intelligent solutions."
            logo={Bot}
            techs={aiTechs}
            logoColor={colors[2]}
          />
          <TechStackCard
            title="Database"
            description="Managing and organizing data with powerful database solutions for efficient data storage and retrieval."
            logo={Database}
            techs={databaseTechs}
            logoColor={colors[3]}
          />
          <TechStackCard
            title="DevOps"
            description="Implementing continuous integration and delivery pipelines for efficient software development."
            logo={Settings}
            techs={devopsTechs}
            logoColor={colors[4]}
          />
          <TechStackCard
            title="Other Tools"
            description="Additional tools and technologies that enhance the development workflow."
            logo={Cloud}
            techs={otherTechs}
            logoColor={colors[5]}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

<div className="w-full aspect-video rounded-md overflow-hidden border md:col-span-1 lg:col-start-2 lg:col-span-1"></div>;
