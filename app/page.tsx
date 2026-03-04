"use client"

import { PortfolioBanner } from "@/components/lp/portfolio-banner"
import { HeroSection } from "@/components/lp/hero-section"
import { ConcernSection } from "@/components/lp/concern-section"
import { MangaSection } from "@/components/lp/manga-section"
import { CTAButton } from "@/components/lp/cta-button"
import { ProductFeatures } from "@/components/lp/product-features"
import { IngredientsSection } from "@/components/lp/ingredients-section"
import { ReviewCarousel } from "@/components/lp/review-carousel"
import { ComparisonTable } from "@/components/lp/comparison-table"
import { HowToSection } from "@/components/lp/how-to-section"
import { PricingSection } from "@/components/lp/pricing-section"
import { TrustPoints } from "@/components/lp/trust-points"
import { FAQSection } from "@/components/lp/faq-section"
import { FinalCTA } from "@/components/lp/final-cta"
import { Footer } from "@/components/lp/footer"
import { AnimatedSection } from "@/components/lp/animated-section"

const mangaPanelsEarly = [
  { number: 1, description: "カフェでみなみを見るチアキ" },
  { number: 2, description: "鏡を見て落ち込むチアキ" },
  { number: 3, description: "スマホで検索するチアキ" },
]

const mangaPanelsMid = [
  { number: 4, description: "あざみん登場" },
  { number: 5, description: "驚くチアキ" },
  { number: 6, description: "あざみんの自己紹介" },
  { number: 7, description: "怪しむチアキ" },
  { number: 8, description: "あざみんの説得" },
  { number: 9, description: "商品を見せるあざみん" },
  { number: 10, description: "箱を受け取るチアキ" },
  { number: 11, description: "コラーゲンの解説をするあざみん" },
  { number: 12, description: "興味を示すチアキ" },
  { number: 13, description: "成分を説明するあざみん" },
  { number: 14, description: "パッケージ裏を読むチアキ" },
  { number: 15, description: "ドリンクを飲むチアキ" },
  { number: 16, description: "1週間後" },
  { number: 17, description: "あざみんのツッコミ" },
  { number: 18, description: "1ヶ月後" },
  { number: 19, description: "鏡を見て驚くチアキ" },
  { number: 20, description: "肌の変化を実感するチアキ" },
  { number: 21, description: "あざみんの「言った通りでしょ」" },
]

const mangaPanelsLate = [
  { number: 22, description: "チアキがもっと知りたがる" },
  { number: 23, description: "線維芽細胞の解説" },
  { number: 24, description: "吸収率の解説" },
  { number: 25, description: "納得するチアキ" },
  { number: 26, description: "口コミを確認するチアキ" },
  { number: 27, description: "あざみんの照れ" },
]

const mangaPanelsClimax = [
  { number: 28, description: "みなみとの再会" },
  { number: 29, description: "みなみが肌の変化に気づく" },
  { number: 30, description: "コラーゲンの話をするチアキ" },
  { number: 31, description: "あざみん再登場" },
]

const mangaPanelsFinal = [
  { number: 32, description: "読者への語りかけ" },
  { number: 33, description: "商品イメージカット" },
  { number: 34, description: "最終コマ・購入誘導" },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <div className="mx-auto max-w-[480px] bg-white shadow-xl">
        {/* 0. Portfolio Banner */}
        <PortfolioBanner />

        <main>
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Concern Section */}
          <ConcernSection />

          {/* 3. Manga: Panels 1-3 */}
          <AnimatedSection className="px-0">
            <MangaSection panels={mangaPanelsEarly} />
          </AnimatedSection>

          {/* CTA Button 1 */}
          <div className="py-6 bg-white">
            <CTAButton />
          </div>

          {/* 4. Manga: Panels 4-21 */}
          <AnimatedSection className="px-0">
            <MangaSection panels={mangaPanelsMid} />
          </AnimatedSection>

          {/* 5. Product Features */}
          <ProductFeatures />

          {/* 6. Ingredients */}
          <IngredientsSection />

          {/* 7. Manga: Panels 22-27 */}
          <AnimatedSection className="px-0">
            <MangaSection panels={mangaPanelsLate} />
          </AnimatedSection>

          {/* 8. Reviews */}
          <ReviewCarousel />

          {/* 9. Manga: Panels 28-31 (Climax) */}
          <AnimatedSection className="px-0">
            <MangaSection panels={mangaPanelsClimax} />
          </AnimatedSection>

          {/* 10. Comparison */}
          <ComparisonTable />

          {/* 11. How To */}
          <HowToSection />

          {/* 12. Manga: Panels 32-34 (Final) */}
          <AnimatedSection className="px-0">
            <MangaSection panels={mangaPanelsFinal} />
          </AnimatedSection>

          {/* 13. Pricing */}
          <PricingSection />

          {/* 14. Trust Points */}
          <TrustPoints />

          {/* 15. FAQ */}
          <FAQSection />

          {/* 16. Final CTA */}
          <FinalCTA />
        </main>

        {/* 17. Footer */}
        <Footer />
      </div>
    </div>
  )
}
