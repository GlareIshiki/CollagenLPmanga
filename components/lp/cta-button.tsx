"use client"

export function CTAButton({ text = "今すぐ試してみる", showBadge = true }: { text?: string; showBadge?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1 w-full px-4">
      {showBadge && (
        <span className="text-xs font-bold text-[var(--color-pink-main)]">
          {"＼ 初回限定50%OFF ／"}
        </span>
      )}
      <button
        className="w-full h-[60px] rounded-xl bg-gradient-to-r from-[var(--color-pink-main)] to-[var(--color-pink-sub)] text-white font-bold text-lg shadow-[0_4px_15px_rgba(232,115,154,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-transform animate-pulse-cta cursor-pointer"
        onClick={() => {
          const el = document.getElementById("pricing")
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }}
      >
        {text} ▶
      </button>
    </div>
  )
}
