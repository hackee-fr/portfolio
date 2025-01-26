import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GitHubIcon } from "./icons/github-icon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "./icons/instagram-icon";
import { LinkedinIcon } from "./icons/linkedin-icon";


export const Header = () => {

  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">
          Trystan LEGRAND-SIMON
        </h1>

        <div className="flex-1" />

        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/hackee-fr"
            className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
            target="_blank"
          >
            <GitHubIcon size={12} className="text-foreground" />
          </Link>

          <Link
            href="https://github.com/hackee-fr"
            className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
            target="_blank"
          >
            <InstagramIcon size={12} className="text-foreground" />
          </Link>

          <Link
            href="https://github.com/hackee-fr"
            className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
            target="_blank"
          >
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};