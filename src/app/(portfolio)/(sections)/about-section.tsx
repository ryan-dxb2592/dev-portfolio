import { Badge } from "@/components/ui/badge";
import CertBadge from "./components/cert-badge";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="min-h-screen w-full flex items-center -mt-20 bg-secondary">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="flex flex-col-reverse md:flex-row pt-10 md:pt-0 gap-12">
          {/* Left Side */}
          <div className="md:w-1/2 flex flex-col gap-4 shrink-0 items-center justify-center">
            <div className="flex flex-col gap-4 mt-10">
              <div className="relative aspect-square  flex shrink-0 w-[400px] h-[400px] rounded-md overflow-hidden">
                <Image
                  src="/pro-pic.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover "
                />
              </div>
              <div className="flex gap-4 justify-start">
                <CertBadge show={true} />
                <CertBadge show={false} />
                <CertBadge show={false} />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <Badge className="border-blue-500/20 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text px-4 py-2 text-base font-medium">
              About Me
            </Badge>
            <h2 className="text-lg font-bold italic">
              "Driven by a passion for building scalable and efficient
              applications"
            </h2>
            <p className="text-muted-foreground text-base">
              Full-stack developer passionate about building scalable
              applications with a strong focus on the JavaScript ecosystem,
              including the MERN stack and Next.js.
            </p>
            <p className="text-muted-foreground text-base">
              I'm also deeply involved in DevOps, utilizing tools like Docker,
              Kubernetes, AWS, and CI/CD pipelines to ensure efficient and
              robust deployments. My AWS Cloud Practitioner certification
              reflects my cloud expertise. Beyond my core JavaScript skills, I'm
              exploring Python and automation tools like Langchain and N8N to
              expand my problem-solving toolkit.
            </p>
            <p className="text-muted-foreground text-base">
              I'm experienced with databases such as PostgreSQL and MongoDB, and
              familiar with technologies like Prisma, Redis, and RabbitMQ. I'm a
              continuous learner who enjoys tackling complex challenges and
              collaborating to deliver impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
