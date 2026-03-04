"use client"

import { AnimatedSection } from "./animated-section"
import { SectionTitle } from "./section-title"
import { CTAButton } from "./cta-button"
import { Crown } from "lucide-react"

export function PricingSection() {
  return (
    <AnimatedSection
      id="pricing"
      className="bg-gradient-to-b from-[var(--color-pink-light)] to-[#FFF0E0] px-4 py-10"
    >
      <SectionTitle>{"お得な定期コースのご案内"}</SectionTitle>

      {/* Subscription plan */}
      <div className="relative bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-[var(--color-pink-main)] md:max-w-[480px] md:mx-auto">
        {/* Ribbon */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[var(--color-pink-main)] text-white text-xs font-bold px-4 py-1 rounded-full">
          <Crown className="w-3.5 h-3.5" />
          {"おすすめ！"}
        </div>

        <h3 className="text-center font-bold text-[var(--color-text)] mt-2 mb-4">{"定期コース"}</h3>

        <div className="text-center mb-2">
          <span className="text-xs text-[var(--color-text-sub)]">{"初回"}</span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-[var(--color-pink-main)] font-mono">{"¥2,990"}</span>
            <span className="text-xs text-[var(--color-text-sub)]">{"（税込）"}</span>
          </div>
          <span className="inline-block bg-[var(--color-gold)] text-white text-xs font-bold px-3 py-0.5 rounded-full mt-1">
            {"50%OFF"}
          </span>
        </div>

        <div className="text-center mb-4">
          <span className="text-xs text-[var(--color-text-sub)]">{"2回目以降"}</span>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-2xl font-bold text-[var(--color-text)] font-mono">{"¥4,480"}</span>
            <span className="text-xs text-[var(--color-text-sub)]">{"（税込）"}</span>
          </div>
          <span className="inline-block bg-[var(--color-text-sub)] text-white text-xs font-bold px-3 py-0.5 rounded-full mt-1">
            {"25%OFF"}
          </span>
        </div>

        <ul className="flex flex-col gap-2 text-sm text-[var(--color-text)] mb-5">
          {["送料無料", "いつでも解約OK（回数縛りなし）", "30日間全額返金保証"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--color-pink-light)] flex items-center justify-center text-xs text-[var(--color-pink-main)]">
                {"✓"}
              </span>
              {item}
            </li>
          ))}
        </ul>

        <CTAButton text="定期コースに申し込む" showBadge={false} />
      </div>

      {/* Normal plan */}
      <div className="bg-[var(--color-bg-gray)] rounded-xl p-5 md:max-w-[480px] md:mx-auto">
        <h3 className="text-center font-bold text-[var(--color-text-sub)] mb-3">{"通常購入"}</h3>
        <div className="text-center">
          <span className="text-xl font-bold text-[var(--color-text)] font-mono">{"1箱：¥5,980"}</span>
          <span className="text-xs text-[var(--color-text-sub)] ml-1">{"（税込）"}</span>
        </div>
        <p className="text-xs text-[var(--color-text-sub)] text-center mt-1">{"送料：¥660"}</p>
      </div>
    </AnimatedSection>
  )
}
