"use client"

import { AnimatedSection } from "./animated-section"
import { SectionTitle } from "./section-title"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "コラーゲンは飲んでも意味がないと聞きましたが…",
    a: "一度アミノ酸に分解されますが、低分子コラーゲンペプチドは体内でコラーゲン合成を促進するシグナルとして機能することが研究で報告されています。ぷるりこは吸収率を重視し、分子量500Da以下まで低分子化しています。",
  },
  {
    q: "効果はどのくらいで実感できますか？",
    a: "個人差はありますが、肌のターンオーバー周期（約28日）を考慮し、まずは1ヶ月の継続をおすすめしています。多くのお客様が3〜4週間で変化を実感されています。",
  },
  {
    q: "いつ飲むのが効果的ですか？",
    a: "いつお飲みいただいても構いませんが、吸収率の観点から朝食前や就寝前の空腹時がおすすめです。大切なのは毎日続けることです。",
  },
  {
    q: "アレルギーが心配です",
    a: "ぷるりこには魚由来のコラーゲンペプチドとエラスチンが含まれています。魚アレルギーをお持ちの方はお控えください。全成分表示をご確認の上、ご不安な場合はかかりつけの医師にご相談ください。",
  },
  {
    q: "定期コースの解約方法は？",
    a: "次回お届け日の10日前までに、お電話またはマイページから解約手続きが可能です。回数の縛りはございませんので、初回のみでの解約も可能です。",
  },
  {
    q: "妊娠中・授乳中でも飲めますか？",
    a: "ぷるりこは食品ですので基本的に問題ございませんが、妊娠中・授乳中の方はかかりつけの医師にご相談の上お召し上がりください。",
  },
]

export function FAQSection() {
  return (
    <AnimatedSection className="bg-[var(--color-bg-gray)] px-4 py-10">
      <SectionTitle>{"よくあるご質問"}</SectionTitle>
      <Accordion type="single" collapsible className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-white rounded-lg shadow-sm border-0 overflow-hidden"
          >
            <AccordionTrigger className="px-4 text-sm font-bold text-[var(--color-text)] text-left">
              <span className="flex items-start gap-2">
                <span className="text-[var(--color-pink-main)] font-mono shrink-0">{"Q."}</span>
                <span>{faq.q}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <div className="flex items-start gap-2">
                <span className="text-[var(--color-gold)] font-mono font-bold shrink-0">{"A."}</span>
                <p className="text-xs text-[var(--color-text-sub)] leading-relaxed">{faq.a}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </AnimatedSection>
  )
}
