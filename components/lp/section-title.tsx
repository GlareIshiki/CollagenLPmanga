export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-center text-[var(--color-text)] mb-6 relative pb-3">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[var(--color-pink-main)] rounded-full" />
    </h2>
  )
}
