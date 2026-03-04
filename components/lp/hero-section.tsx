"use client"

import { CTAButton } from "./cta-button"
import { useInView } from "@/hooks/use-in-view"

export function HeroSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-white to-[var(--color-pink-light)] px-4 md:px-10 pt-8 pb-10 overflow-hidden"
    >
      <div className="md:flex md:items-center md:justify-center md:gap-10">
        {/* Product image placeholder */}
        <div
          className={`relative mx-auto md:mx-0 w-56 h-56 md:w-64 md:h-64 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 md:mb-0 shrink-0 transition-all duration-700 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-[var(--color-pink-main)] font-mono tracking-tight">PLULICO</span>
            <span className="text-xs text-[var(--color-text-sub)]">collagen drink</span>
            <div className="w-16 h-20 bg-gradient-to-b from-[var(--color-pink-main)] to-[var(--color-pink-sub)] rounded-md mt-2 flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">50ml</span>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-col md:items-center">
          {/* Catch copy - vertical on mobile, horizontal on desktop */}
          <div
            className={`hidden md:block transition-all duration-700 delay-300 mb-4 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] tracking-widest">
              {"飲むだけで、肌が変わる。"}
            </p>
          </div>

          {/* Sub copy */}
          <p className="text-center text-sm md:text-base text-[var(--color-text-sub)] mb-4">
            {"低分子コラーゲンペプチド配合"}
          </p>

          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-block bg-[var(--color-gold)] text-white text-xs font-bold px-4 py-1.5 rounded-full">
              {"初回限定 50%OFF"}
            </span>
          </div>

          {/* Pricing */}
          <div className="text-center mb-6">
            <span className="text-sm text-[var(--color-text-sub)] line-through mr-2">
              {"通常価格 ¥5,980"}
            </span>
            <br />
            <span className="text-xs text-[var(--color-pink-main)] font-bold">{"初回特別価格"}</span>
            <span className="text-3xl md:text-4xl font-bold text-[var(--color-pink-main)] font-mono ml-1">{"¥2,990"}</span>
            <span className="text-xs text-[var(--color-text-sub)] ml-1">{"（税込・送料無料）"}</span>
          </div>

          <div className="max-w-[480px] w-full mx-auto">
            <CTAButton text="今すぐ試してみる" />
          </div>
        </div>
      </div>

      {/* Catch copy - vertical on mobile only */}
      <div
        className={`absolute top-12 right-4 md:hidden transition-all duration-700 delay-300 ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        <p className="writing-vertical-rl text-2xl font-bold text-[var(--color-text)] tracking-widest leading-loose"
          style={{ writingMode: "vertical-rl" }}>
          {"飲むだけで、肌が変わる。"}
        </p>
      </div>
    </section>
  )
}
