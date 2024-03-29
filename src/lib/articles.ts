import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
  tags: string[]
  level: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

export async function getAllArticlesByTag(tag: string) {
  const articles = await getAllArticles()
  return articles.filter((x) => x.tags && x.tags.includes(tag))
}

export async function getAllArticlesByLevel(level: string) {
  const articles = await getAllArticles()
  return articles.filter((x) => x.level && x.level === level)
}

export async function getTags() {
  let articles = await getAllArticles()
  return [
    ...new Set(
      articles
        .map((x) => x.tags)
        .flatMap((x) => x)
        .filter((x) => Boolean(x)),
    ),
  ]
}

export async function getLevels() {
  let articles = await getAllArticles()
  return [
    ...new Set(
      articles
        .map((x) => x.level)
        .flatMap((x) => x)
        .filter((x) => Boolean(x)),
    ),
  ]
}
