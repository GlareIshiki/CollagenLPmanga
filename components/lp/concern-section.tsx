"use client"

import { AnimatedSection } from "./animated-section"
import { SectionTitle } from "./section-title"
import { Check } from "lucide-react"

const concerns = [
  "最近、ファンデの乗りが悪い…",
  "夕方になると肌がカサカサ",
  "毛穴が目立ってきた気がする",
  "高い化粧水を使っても変わらない",
  "同い年の友達より老けて見える",
  "スキンケア迷子でもう何を使えばいいかわからない",
]

export function ConcernSection() {
  return (
    <AnimatedSection className="bg-[var(--color-pink-light)] px-4 py-10">
      <SectionTitle>{"こんなお悩みありませんか？"}</SectionTitle>
      <ul className="flex flex-col gap-3 mb-6">
        {concerns.map((c, i) => (
          <li key={i} className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 shadow-sm">
            <Check className="w-5 h-5 text-[var(--color-pink-main)] shrink-0 mt-0.5" />
            <span className="text-sm text-[var(--color-text)] leading-relaxed">{c}</span>
          </li>
        ))}
      </ul>
      <p className="text-center text-sm font-bold text-[var(--color-pink-main)] leading-relaxed">
        {"そのお悩み、\"外側のケアだけ\"が原因かもしれません"}
      </p>
    </AnimatedSection>
  )
}
