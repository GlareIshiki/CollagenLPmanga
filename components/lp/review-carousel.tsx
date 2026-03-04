"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { AnimatedSection } from "./animated-section"
import { SectionTitle } from "./section-title"
import { Star } from "lucide-react"

const reviews = [
  {
    stars: 5,
    title: "ファンデの乗りが全然違う！",
    body: "飲み始めて3週間くらいから、朝の肌触りが変わりました。夕方のカサつきもなくなって、メイク直しの回数が減りました。",
    author: "30代女性・会社員",
  },
  {
    stars: 5,
    title: "ピーチ味がおいしくて続けやすい",
    body: "コラーゲンドリンクって独特の味のものが多いけど、これは普通においしい。毎朝の習慣になってます。",
    author: "40代女性・主婦",
  },
  {
    stars: 4,
    title: "1ヶ月でハリを実感",
    body: "正直最初は半信半疑でしたが、1ヶ月続けたら確かに肌のハリが違います。もう手放せません。",
    author: "30代女性・フリーランス",
  },
  {
    stars: 5,
    title: "友達に肌きれいになったって言われた",
    body: "自分では気づきにくいけど、周りから言われると嬉しい。内側からのケアって大事なんだなと実感。",
    author: "20代女性・学生",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "fill-[var(--color-gold)] text-[var(--color-gold)]" : "text-gray-300"}`}
        />
      ))}
    </div>
  )
}

export function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % reviews.length
        scrollToIndex(next)
        return next
      })
    }, 4000)
  }, [])

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current
    if (!container) return
    const card = container.children[index] as HTMLElement
    if (card) {
      container.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" })
    }
  }

  useEffect(() => {
    startAutoScroll()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startAutoScroll])

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return
    const scrollLeft = container.scrollLeft
    const cardWidth = container.children[0]?.clientWidth ?? 280
    const newIndex = Math.round(scrollLeft / (cardWidth + 12))
    setActiveIndex(newIndex)
  }

  const handleTouchStart = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleTouchEnd = () => {
    startAutoScroll()
  }

  return (
    <AnimatedSection className="bg-[var(--color-pink-light)] py-10">
      <div className="px-4">
        <SectionTitle>{"ご愛用者の声"}</SectionTitle>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="min-w-[280px] max-w-[280px] md:min-w-0 md:max-w-none md:flex-1 bg-white rounded-xl p-5 shadow-sm snap-start flex flex-col gap-3"
          >
            <Stars count={review.stars} />
            <h3 className="text-sm font-bold text-[var(--color-text)]">{review.title}</h3>
            <p className="text-xs text-[var(--color-text-sub)] leading-relaxed flex-1">{review.body}</p>
            <p className="text-xs text-[var(--color-text-sub)]">{review.author}</p>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === activeIndex ? "bg-[var(--color-pink-main)]" : "bg-[var(--color-pink-main)]/20"
            }`}
            onClick={() => {
              scrollToIndex(i)
              setActiveIndex(i)
            }}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
      <p className="text-center text-[10px] text-[var(--color-text-sub)] mt-3 px-4">
        {"※個人の感想であり、効果・効能を保証するものではありません"}
      </p>
    </AnimatedSection>
  )
}
