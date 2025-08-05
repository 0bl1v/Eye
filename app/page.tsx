import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PartnersSection } from "@/components/partners-section"
import { PricingSection } from "@/components/pricing-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen dark">
      <HeroSection />
      <FeaturesSection />
      <PartnersSection />
      <PricingSection />
      <FooterSection />
    </main>
  )
}
