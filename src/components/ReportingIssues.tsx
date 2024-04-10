export const ReportingIssues = ({ articleSlug }: { articleSlug: string }) => {
  const baseUri =
    'https://github.com/backendmentor-io/www/tree/main/src/app/articles'
  return (
    <>
      <h2>Reporting Issues or Suggestions</h2>
      <p>
        If you encounter any inaccuracies in the code or have suggestions for
        improvement, I&apos;d love to hear from you! Please submit a{' '}
        <a href={`${baseUri}/${articleSlug}`}>GitHub issue</a> with a brief
        explanation of the problem or idea.
      </p>
    </>
  )
}
