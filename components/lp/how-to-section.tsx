"use client"

import { AnimatedSection } from "./animated-section"
import { SectionTitle } from "./section-title"
import { Sun, Wine, CalendarCheck } from "lucide-react"

const steps = [
  { icon: Sun, label: "STEP 1", text: "朝起きたら1本" },
  { icon: Wine, label: "STEP 2", text: "キャップを開けてそのまま飲む" },
  { icon: CalendarCheck, label: "STEP 3", text: "毎日続けるだけ！" },
]

export function HowToSection() {
  return (
    <AnimatedSection className="bg-white px-4 py-10">
      <SectionTitle>{"飲み方はかんたん"}</SectionTitle>
      <div className="flex flex-col gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[var(--color-pink-light)] flex items-center justify-center shrink-0">
              <step.icon className="w-7 h-7 text-[var(--color-pink-main)]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[var(--color-pink-main)] font-mono">{step.label}</span>
              <p className="text-sm font-bold text-[var(--color-text)]">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-[var(--color-text-sub)] mt-6 text-center leading-relaxed">
        {"1箱30本入り。約1ヶ月分。冷蔵庫で冷やすとさらにおいしくお召し上がりいただけます。"}
      </p>
    </AnimatedSection>
  )
}
