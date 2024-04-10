import { Article } from '@/components/ArticleCard'
import { getAllArticles, getAllArticlesByTag, getTags } from '@/lib/articles'

export default async function Home({ params }: { params: { tag: string } }) {
  let articles = await getAllArticlesByTag(params.tag)

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

export async function generateStaticParams() {
  const tags = await getTags()

  return tags.map((tag) => ({
    tag: `${tag}`,
  }))
}
