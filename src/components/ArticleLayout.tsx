'use client'

import { useContext } from 'react'

import { AppContext } from '@/app/providers'
import { Container, ContainerInner } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Badge } from './Badge'

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  return (
    <ContainerInner>
      <article>
        <header className="flex flex-col">
          <h1 className="mt-6 text-6xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            {article.title}
          </h1>
          <time
            dateTime={article.date}
            className="order-first flex text-lg uppercase"
          >
            <span>{formatDate(article.date)}</span>
          </time>
        </header>
        <div className="mt-5 flex flex-wrap gap-2">
          {article.tags &&
            article.tags
              .filter(Boolean)
              .map((x, i) => <Badge key={i} text={x} href={`/tags/${x}`} />)}
        </div>
        <Prose data-mdx-content>{children}</Prose>
      </article>
    </ContainerInner>
  )
}
