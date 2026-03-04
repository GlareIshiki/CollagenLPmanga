"use client"

import { AnimatedSection } from "./animated-section"
import { SectionTitle } from "./section-title"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const nutritionTable = [
  { label: "エネルギー", value: "18.5kcal" },
  { label: "たんぱく質", value: "4.6g" },
  { label: "脂質", value: "0g" },
  { label: "炭水化物", value: "1.2g" },
  { label: "食塩相当量", value: "0.02g" },
  { label: "ビタミンC", value: "1,000mg" },
  { label: "コラーゲンペプチド", value: "5,000mg" },
]

export function IngredientsSection() {
  return (
    <AnimatedSection className="bg-[var(--color-bg-gray)] px-4 py-10">
      <SectionTitle>{"全成分表示"}</SectionTitle>
      <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
        <AccordionItem value="ingredients" className="border-b-0">
          <AccordionTrigger className="px-4 text-sm font-bold text-[var(--color-text)]">
            {"原材料名を確認する"}
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <p className="text-xs text-[var(--color-text-sub)] leading-relaxed">
              {"コラーゲンペプチド（魚由来）、エリスリトール、デキストリン、ヒアルロン酸、エラスチン（魚由来）、ピーチ果汁 / ビタミンC、クエン酸、香料、甘味料（ステビア）"}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="nutrition" className="border-b-0">
          <AccordionTrigger className="px-4 text-sm font-bold text-[var(--color-text)]">
            {"栄養成分表示（1本50mlあたり）"}
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <table className="w-full text-sm">
              <tbody>
                {nutritionTable.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--color-pink-light)]">
                    <td className="py-2 text-[var(--color-text-sub)]">{row.label}</td>
                    <td className="py-2 text-right font-mono font-bold text-[var(--color-text)]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </AnimatedSection>
  )
}
