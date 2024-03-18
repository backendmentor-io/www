import { Badge } from '@/components/Badge'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getTags } from '@/lib/articles'

export default async function NotFound() {
  const tags = await getTags()
  return (
    <SimpleLayout
      title="Page not found."
      intro="Sorry, we couldn't find the page you're looking for. Try and use the tags below to find articles you are interested in."
    >
      <div className="flex flex-wrap gap-2">
        {tags.map((x, i) => (
          <Badge key={i} text={x} href={`/tags/${x}`} />
        ))}
      </div>
    </SimpleLayout>
  )
}
