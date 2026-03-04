"use client"

import { AnimatedSection } from "./animated-section"

export function FinalCTA() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-[var(--color-pink-main)] to-[var(--color-pink-sub)] px-4 py-12 text-center">
      <h2 className="text-xl font-bold text-white mb-2 text-balance">
        {"まずは1ヶ月、試してみませんか？"}
      </h2>
      <p className="text-sm text-white/80 mb-6">
        {"今なら初回50%OFFでお届け"}
      </p>
      <div className="mb-6">
        <span className="text-sm text-white/60 line-through mr-2">{"¥5,980"}</span>
        <span className="text-4xl font-bold text-white font-mono">{"¥2,990"}</span>
      </div>
      <button
        className="w-full md:max-w-[480px] h-[60px] rounded-xl bg-white text-[var(--color-pink-main)] font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg cursor-pointer"
        onClick={() => {
          const el = document.getElementById("pricing")
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }}
      >
        {"今すぐ申し込む ▶"}
      </button>
      <p className="text-xs text-white/70 mt-4 leading-relaxed">
        {"＊いつでも解約OK ＊送料無料 ＊30日間返金保証"}
      </p>
    </AnimatedSection>
  )
}
