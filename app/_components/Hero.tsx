/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border border-accent px-1 py-0.5 text-primary rounded-sm hover:bg-accent/50 transition-colors",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2
          className="font-caption text-5xl text-primary font-bold"
        >
          Trystan LEGRAND-SIMON
        </h2>
        <h3
          className="font-caption text-3xl"
        >
          System and Network Administrator
        </h3>
        <p>
          Passionate about <Code>Web Development</Code> and the <Code>FiveM</Code> platform, as well as <Code>System and Network Administration</Code>, I also have a strong interest in <Code>Cybersecurity</Code>. I enjoy tackling technical challenges and designing robust, innovative solutions to ensure the performance, security, and reliability of IT infrastructures.
        </p>

        <p className="italic">
          Living in {" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/110px-Flag_of_France.svg.png"
              alt="France Flag"
              className="w-4 h-auto"
            />{" "}
            France
          </Code>
          .
        </p>

        {/* <p>
          Passionné par le développement Web et la plateforme FiveM, ainsi que par l'administration systèmes et réseaux, je m'intéresse également à la cybersécurité. J'aime relever des défis techniques et concevoir des solutions robustes et innovantes pour garantir la performance, la sécurité et la fiabilité des infrastructures informatiques.
        </p> */}
      </div>

      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="/profil-sans-bg.png"
          alt="image de profil retravaillé par l'ia"
          className="w-full h-auto max-w-xs max-md:w-56"
        />
      </div>
    </Section>
  );
};