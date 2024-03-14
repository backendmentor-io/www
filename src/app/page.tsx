import { Article, LatestArticle } from '@/components/ArticleCard'
import { getAllArticles } from '@/lib/articles'

export default async function Home() {
  let articles = await getAllArticles()

  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-1 gap-8 divide-y lg:grid-cols-2 2xl:grid-cols-3">
        {articles.map((article, i) =>
          i === 0 ? (
            <LatestArticle key={article.slug} article={article} />
          ) : (
            <Article key={article.slug} article={article} />
          ),
        )}
      </div>
    </>
  )
}
