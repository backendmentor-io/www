import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

export function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="">
      <label className="uppercase">{formatDate(article.date)}</label>
      <h2 className="py-3 text-3xl font-extrabold underline decoration-teal-500 hover:decoration-4">
        <a href={`/articles/${article.slug}`}>{article.title}</a>
      </h2>
      <p className="text-lg">{article.description}</p>
    </article>
  )
}
