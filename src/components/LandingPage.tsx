import { Header } from './Header';
import { Hero } from './Hero';
import { Communities } from './Communities';
import { StayFinder } from './StayFinder';
import { Properties } from './Properties';
import { Services } from './Services';
import { LeevStandard } from './LeevStandard';
import { SantiagoGuide } from './SantiagoGuide';
import { Gallery } from './Gallery';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Communities />
        <StayFinder />
        <Properties />
        <Services />
        <LeevStandard />
        <SantiagoGuide />
        <Gallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
