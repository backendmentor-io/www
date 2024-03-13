import { Article } from '@/components/ArticleCard'
import { getAllArticles } from '@/lib/articles'

export default async function Home() {
  let articles = await getAllArticles()

  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-1 gap-3 lg:grid-cols-2 2xl:grid-cols-3">
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
    </>
  )
}
