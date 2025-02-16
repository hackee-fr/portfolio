import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, Code, LucideIcon } from "lucide-react";
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

type SideProjectProps = {
  logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SIDE_PROJECTS: SideProjectProps[] = [
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
  {
    logo: Code,
    title: "Server FiveM",
    description: "FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers.",
    url: "/server-fivem-2"
  },
  {
    logo: Code,
    title: "Server FiveM",
    description: "FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers.",
    url: "/server-fivem-2"
  },
  {
    logo: Code,
    title: "Server FiveM",
    description: "FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers.",
    url: "/server-fivem-2"
  },
  {
    logo: Code,
    title: "Server FiveM",
    description: "FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers.",
    url: "/server-fivem-2"
  },
];

const SideProject = (props: SideProjectProps) => {

  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-md">
        <props.logo size={16} />
      </span>

      <div>
        <p className="text-sm font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};


type WorkProps = {
  image: string;
  title: string;
  role: string;
  tag?: string;
  date: string;
  url: string;
};

const WORKS: WorkProps[] = [
  {
    image: "https://www.afis.fr/wp-content/uploads/2023/08/logo-thales_400x400.jpg",
    title: "Thales",
    role: "Alternate System and Network Administrator",
    tag: "Alternance",
    date: "2024 - Present",
    url: "https://www.thalesgroup.com/fr"
  },
  {
    image: "/datascientest.jpg",
    title: "DataScientest",
    role: "",
    tag: "School",
    date: "2021",
    url: "https://datascientest.com/"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGPomV7TTm_g9R3GpdbtdLGMJU0OWYAaK0w&s",
    title: "La Plateforme_",
    role: "",
    tag: "School",
    date: "2021",
    url: "https://laplateforme.io/"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJdGvuZyOwkLZ6kKvqjBv-Ejnsl_TUjGi7A&s",
    title: "Epitech",
    role: "",
    tag: "School",
    date: "2021",
    url: "https://www.epitech.eu/"
  },
];

const Work = (props: WorkProps) => {

  return (
    <Link
      href={props.url}
      target='_blank'
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <Image
        src={props.image}
        alt={props.title}
        width={40}
        height={40}
        className="object-contain rounded-md"
      />

      <div className='mr-auto'>
        <div className='flex items-center gap-2'>
          <p className="text-sm font-semibold">{props.title}</p>
          {props.tag && (
            <Badge
              variant="outline"
              className="p-1"
            >
              {props.tag}
            </Badge>
          )}
        </div>

        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>

      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};

type ContactCardProps = {
  image: string;
  medium_image: string;
  name: string;
  description: string;
  url?: string;
};

const ContactCard = (props: ContactCardProps) => {

  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <Image
          src={props.image}
          alt={props.name}
          width={40}
          height={40}
          className="object-contain rounded-full"
        />

        <Image
          src={props.medium_image}
          alt={props.name}
          width={16}
          height={16}
          className="absolute -bottom-2 -right-1 object-contain"
        />
      </div>

      <div className='mr-auto'>
        <div className='flex items-center gap-2'>
          <p className="text-sm font-semibold">{props.name}</p>
        </div>

        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>

      <ArrowUpRight className='group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform' size={16} />
    </Card>
  );
};

export const Status = () => {

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>

          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                {...project}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>

          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                {...work}
              />
            ))}
          </div>
        </Card>

        <Card className="p-4 flex flex-1 flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>

          <div className="flex flex-col gap-4">
            <ContactCard
              name="hackee.fr@gmail.com"
              description=""
              image="/profil-sans-bg.png"
              medium_image="https://ouch-cdn2.icons8.com/Q_mKQhLvgHc4CpJslA6YAg1orkPp2LG3W6rdaEQZ1oo/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTYv/MzE3NWFhMzAtMmQw/Yi00MDgyLTlhZWMt/ZWUyZGNlYzQwYmM0/LnBuZw.png"
              url="mailto:hackee.fr@gmail.com"
            />

            <ContactCard
              name="Trystan LEGRAND-SIMON"
              description=""
              image="/profil-sans-bg.png"
              medium_image="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              url="https://fr.linkedin.com/in/trystan-legrand-simon-594529266"
            />

            <ContactCard
              name="@hackee_fr"
              description=""
              image="/profil-sans-bg.png"
              medium_image="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              url="https://www.instagram.com/hackee_fr/"
            />
          </div>
        </Card>
      </div>
    </Section>
  );
};
