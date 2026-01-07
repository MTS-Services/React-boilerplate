import GuessworkSection from './section/GuessworkSection';
import HeroSection from './section/HeroSection';
import InvestorSection from './section/InvestorSection';
import ReadySection from './section/ReadySection';
import SmartSection from './section/SmartSection';

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <GuessworkSection />
      <SmartSection />
      <InvestorSection />
      <ReadySection />
    </>
  );
};

export default HomeView;
