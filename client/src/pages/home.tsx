import Navigation from "@/components/navigation";
import HeroBanner from "@/components/hero-banner";
import TeamSection from "@/components/team-section";
import HistorySection from "@/components/history-section";
import ContextSection from "@/components/context-section";
import ChallengesSection from "@/components/challenges-section";
import DonationCollaborationSection from "@/components/donation-collaboration-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroBanner />
      <TeamSection />
      <HistorySection />
      <ContextSection />
      <ChallengesSection />
      <DonationCollaborationSection />
      <Footer />
    </div>
  );
}
