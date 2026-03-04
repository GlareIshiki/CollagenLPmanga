"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const { ref, isInView } = useInView(0.05)

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "opacity-0 transition-all duration-700",
        isInView && "animate-fade-in-up",
        className
      )}
    >
      {children}
    </section>
  )
}
