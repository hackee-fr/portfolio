import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, LucideIcon } from "lucide-react";

const SIDE_PROJECTS = [
  {
    logo: Code,
    title: "Puissance 4",
    description: "FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers.",
    url: "/puissance4"
  },
  {
    logo: Code,
    title: "Portfolio",
    description: "A collection of projects and personal work.",
    url: "/portfolio"
  },
  {
    logo: Code,
    title: "Server FiveM",
    description: "FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers.",
    url: "/server-fivem"
  },
  {
    logo: Code,
    title: "Server FiveM",
    description: "FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers.",
    url: "/server-fivem-2"
  },
];

type SideProjectProps = {
  logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {

  return (
    <Link
      href={props.url}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
      >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.logo />
      </span>

      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-lg text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

export const Status = () => {

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>

          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                logo={project.logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">Work</Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};
