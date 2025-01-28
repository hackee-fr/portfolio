/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";

export const Hero = () => {

  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2>Trystan LEGRAND-SIMON</h2>
        <h3>System and Network Administrator</h3>
        <p>....</p>
      </div>

      <div className="flex-1">
        <img
          src="/profil-sans-bg.png"
          alt="image de profil retravaillé par l'ia"
          className="w-full h-auto"
        />
      </div>
    </Section>
  );
};