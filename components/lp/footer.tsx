export function Footer() {
  return (
    <footer className="bg-[#333] text-white px-4 py-8 text-center">
      <p className="text-sm font-bold mb-4">{"LADY COSME（レディコスメ）"}</p>
      <nav className="flex flex-wrap justify-center gap-3 mb-4">
        <a href="#" className="text-xs text-white/70 hover:text-white underline transition-colors">
          {"特定商取引法に基づく表記"}
        </a>
        <a href="#" className="text-xs text-white/70 hover:text-white underline transition-colors">
          {"プライバシーポリシー"}
        </a>
        <a href="#" className="text-xs text-white/70 hover:text-white underline transition-colors">
          {"利用規約"}
        </a>
      </nav>
      <p className="text-[10px] text-white/50 mb-2 leading-relaxed">
        {"※本ページはポートフォリオ用のサンプルです。実在の商品・企業ではありません。"}
      </p>
      <p className="text-[10px] text-white/50 mb-1">{"Powered by AI Manga x Claude Code"}</p>
      <p className="text-[10px] text-white/40">{"© 2026 LADY COSME. All rights reserved."}</p>
    </footer>
  )
}
