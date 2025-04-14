import { BorderTrail } from "@/components/ui/border-trail";
import { LucideIcon } from "lucide-react";

export interface Tech {
  name: string;
  image: string;
  alt: string;
  slug: string;
}

interface TechStackCardProps {
  techs: Tech[];
  title: string;
  description: string;
  logo: LucideIcon;
}

const TechStackCard = ({
  techs,
  title,
  description,
  logo,
}: TechStackCardProps) => {
  return (
    <div className="relative flex h-full w-full flex-col rounded-md border p-6 dark:bg-zinc-900 shadow-md hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300">
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
        }}
        size={100}
      />

      <div className="flex flex-col gap-2 items-start justify-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => {
            return (
              <img
                src={tech.image}
                alt={tech.alt}
                className="w-10 h-10 rounded-full"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
