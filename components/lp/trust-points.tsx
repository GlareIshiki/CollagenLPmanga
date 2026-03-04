"use client"

import { AnimatedSection } from "./animated-section"
import { SectionTitle } from "./section-title"
import { RefreshCw, BadgeJapaneseYen, Factory, Package } from "lucide-react"

const points = [
  {
    icon: RefreshCw,
    title: "いつでも解約OK",
    desc: "定期コースに回数縛りはありません。お届け日の10日前までにご連絡ください。",
  },
  {
    icon: BadgeJapaneseYen,
    title: "30日間全額返金保証",
    desc: "お体に合わない場合は、初回お届け分に限り全額返金いたします。",
  },
  {
    icon: Factory,
    title: "GMP認定工場で製造",
    desc: "医薬品レベルの品質管理基準を満たした国内工場で製造しています。",
  },
  {
    icon: Package,
    title: "送料無料・ポスト投函",
    desc: "定期コースは送料無料。ポスト投函なので不在でも受け取れます。",
  },
]

export function TrustPoints() {
  return (
    <AnimatedSection className="bg-white px-4 py-10">
      <SectionTitle>{"安心してお試しいただくために"}</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        {points.map((point) => (
          <div key={point.title} className="bg-[var(--color-pink-light)] rounded-xl p-4 flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <point.icon className="w-5 h-5 text-[var(--color-pink-main)]" />
            </div>
            <h3 className="text-xs font-bold text-[var(--color-text)]">{point.title}</h3>
            <p className="text-[10px] text-[var(--color-text-sub)] leading-relaxed">{point.desc}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
