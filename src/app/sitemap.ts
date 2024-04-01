import { getAllArticles, getTags } from '@/lib/articles'

const URL = 'https://backendmentor.io'

export default async function sitemap() {
  const articles = await getAllArticles()
  const tags = await getTags()

  const articleMap = articles.map(({ slug, date }) => ({
    url: `${URL}/articles/${slug}`,
    lastModified: new Date(date).toISOString(),
  }))

  const tagMap = tags.map((tag) => ({
    url: `${URL}/tags/${tag}`,
    lastModified: new Date().toISOString(),
  }))

  return [...tagMap, ...articleMap]
}
