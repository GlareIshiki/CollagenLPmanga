"use client"

import { AnimatedSection } from "./animated-section"
import { SectionTitle } from "./section-title"
import { Atom, Droplets, Cherry } from "lucide-react"

export function ProductFeatures() {
  return (
    <AnimatedSection className="bg-white px-4 md:px-10 py-10">
      <SectionTitle>{"ぷるりこが選ばれる3つの理由"}</SectionTitle>

      <div className="md:grid md:grid-cols-3 md:gap-8">
        {/* Reason 1 */}
        <div className="mb-8 md:mb-0">
          <div className="flex md:flex-col items-center gap-3 mb-3">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--color-pink-light)] flex items-center justify-center shrink-0">
              <Atom className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-pink-main)]" />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text)] md:text-center">
              {"低分子コラーゲンペプチド"}
              <br />
              <span className="font-mono text-[var(--color-pink-main)]">{"5,000mg"}</span>
              {"配合"}
            </h3>
          </div>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed ml-[60px] md:ml-0 md:text-center">
            {"一般的なコラーゲンの1/60サイズまで低分子化。体内への吸収率を徹底的に追求しました。"}
          </p>
          <p className="text-xs text-[var(--color-text-sub)] mt-1 ml-[60px] md:ml-0 md:text-center">
            {"※分子量500Da以下のトリペプチドを採用"}
          </p>
        </div>

        {/* Reason 2 */}
        <div className="mb-8 md:mb-0">
          <div className="flex md:flex-col items-center gap-3 mb-3">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--color-pink-light)] flex items-center justify-center shrink-0">
              <Droplets className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-pink-main)]" />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text)] md:text-center">
              {"美容サポート成分トリプル配合"}
            </h3>
          </div>
          <div className="flex flex-col gap-3 ml-[60px] md:ml-0">
            {[
              { name: "ビタミンC", amount: "1,000mg", desc: "コラーゲン合成に不可欠なビタミン" },
              { name: "ヒアルロン酸", amount: "120mg", desc: "肌のうるおいを内側からサポート" },
              { name: "エラスチン", amount: "75mg", desc: "肌のハリと弾力を支える成分" },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-[var(--color-pink-light)] rounded-lg p-3"
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm font-bold text-[var(--color-text)]">{item.name}</span>
                  <span className="text-sm font-bold text-[var(--color-pink-main)] font-mono">{item.amount}</span>
                </div>
                <p className="text-xs text-[var(--color-text-sub)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reason 3 */}
        <div>
          <div className="flex md:flex-col items-center gap-3 mb-3">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--color-pink-light)] flex items-center justify-center shrink-0">
              <Cherry className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-pink-main)]" />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text)] md:text-center">
              {"毎日おいしく続けられるピーチ味"}
            </h3>
          </div>
          <p className="text-sm text-[var(--color-text-sub)] leading-relaxed ml-[60px] md:ml-0 md:text-center">
            {"甘すぎない爽やかなピーチ味。1日1本、ジュース感覚で飲めるから続けやすい。"}
          </p>
          <p className="text-xs text-[var(--color-text-sub)] mt-1 ml-[60px] md:ml-0 md:text-center">
            {"合成着色料・保存料不使用"}
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
