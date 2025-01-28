import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";


export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Spacing */}
      <Spacing size="md" />

      {/* Hero */}
      <Hero />

      {/* Spacing */}
      <Spacing size="md" />

      {/* Status */}
      <Status />

      {/* Spacing */}
    </main>
  );
}
