'use client'
export function Badge({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-2xl bg-teal-50 px-2 text-xs font-bold text-teal-600 ring-1 ring-teal-500/10 hover:bg-teal-600 hover:text-white"
    >
      {text}
    </a>
  )
}
