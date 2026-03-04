"use client"

import { AnimatedSection } from "./animated-section"
import { SectionTitle } from "./section-title"

const rows = [
  { label: "コラーゲン配合量", plulico: "5,000mg", a: "3,000mg", b: "2,000mg" },
  { label: "分子量", plulico: "500Da以下", a: "3,000Da", b: "5,000Da" },
  { label: "ビタミンC", plulico: "◎ 1,000mg", a: "△ 100mg", b: "× なし" },
  { label: "ヒアルロン酸", plulico: "◎ 配合", a: "× なし", b: "○ 配合" },
  { label: "エラスチン", plulico: "◎ 配合", a: "× なし", b: "× なし" },
  { label: "味", plulico: "ピーチ", a: "マスカット", b: "無味" },
  { label: "1日あたり価格", plulico: "約99円", a: "約133円", b: "約166円" },
]

export function ComparisonTable() {
  return (
    <AnimatedSection className="bg-white px-4 py-10">
      <SectionTitle>{"他社コラーゲンとの違い"}</SectionTitle>
      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-xs border-collapse min-w-[340px]">
          <thead>
            <tr>
              <th className="p-2 text-left text-[var(--color-text-sub)] font-normal bg-[var(--color-bg-gray)] border border-gray-200">{"項目"}</th>
              <th className="p-2 text-center font-bold text-[var(--color-pink-main)] bg-[var(--color-pink-light)] border border-gray-200">{"ぷるりこ"}</th>
              <th className="p-2 text-center text-[var(--color-text-sub)] font-normal bg-[var(--color-bg-gray)] border border-gray-200">{"A社"}</th>
              <th className="p-2 text-center text-[var(--color-text-sub)] font-normal bg-[var(--color-bg-gray)] border border-gray-200">{"B社"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="p-2 text-[var(--color-text)] font-bold bg-[var(--color-bg-gray)] border border-gray-200">{row.label}</td>
                <td className="p-2 text-center font-bold text-[var(--color-pink-main)] bg-[var(--color-pink-light)] border border-gray-200 font-mono">{row.plulico}</td>
                <td className="p-2 text-center text-[var(--color-text-sub)] bg-white border border-gray-200">{row.a}</td>
                <td className="p-2 text-center text-[var(--color-text-sub)] bg-white border border-gray-200">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[10px] text-[var(--color-text-sub)] mt-3 text-center">
        {"※2025年12月時点の公開情報に基づく比較です"}
      </p>
    </AnimatedSection>
  )
}
