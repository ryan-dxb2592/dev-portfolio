import { BorderTrail } from "@/components/ui/border-trail";
import { cn } from "@/lib/utils";
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
  logoColor: string;
}

const TechStackCard = ({
  techs,
  title,
  description,
  logo: Icon,
  logoColor,
}: TechStackCardProps) => {
  return (
    <div className="relative flex h-full w-full flex-col rounded-md border p-6 bg-white shadow-md hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300">
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
        }}
        size={100}
      />

      <div className="flex flex-col gap-4 items-start justify-start">
        <div className="flex items-center justify-center gap-2 p-2 rounded-md border">
          <div className="flex items-center justify-center w-10 h-10 rounded-md  overflow-hidden">
            <Icon className={cn(`w-10 h-10`, logoColor)} strokeWidth={1.5} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => {
            return (
              <div className="flex items-center justify-center border rounded-md p-2 gap-2 bg-white cursor-pointer hover:bg-zinc-100 dark:bg-zinc-900 hover:shadow-md transition-all duration-300">
                <img
                  src={tech.image}
                  alt={tech.alt}
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-sm">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
