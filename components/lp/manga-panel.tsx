import Image from "next/image"

export function MangaPanel({ number, description }: { number: number; description: string }) {
  const padded = String(number).padStart(2, "0")
  return (
    <div className="relative w-full aspect-video bg-[#F5F5F5] overflow-hidden">
      <Image
        src={`/images/panel-${padded}.png`}
        alt={`${description}`}
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, 480px"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement
          target.style.display = "none"
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-4xl font-bold text-[var(--color-pink-main)]/20 font-mono">{padded}</span>
        <span className="text-sm text-[var(--color-pink-main)] mt-1 px-4 text-center">{description}</span>
      </div>
    </div>
  )
}
