import { MangaPanel } from "./manga-panel"

type Panel = {
  number: number
  description: string
}

export function MangaSection({ panels }: { panels: Panel[] }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {panels.map((panel) => (
        <MangaPanel key={panel.number} number={panel.number} description={panel.description} />
      ))}
    </div>
  )
}
