import react from 'react'
import { Subscribe } from './Subscribe'
import { About } from './About'
import { Explore } from './Explore'
import { ContactMe } from './ContactMe'
import { getAllArticles, getTags } from '@/lib/articles'

export async function Layout({ children }: { children: React.ReactNode }) {
  let tags = await getTags()

  return (
    <>
      <div>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 py-6 font-bold">
            <a href="/" className="text-wrap text-5xl font-extrabold uppercase">
              backend mentor
            </a>
            <p className="text-xl ">
              Dive into the world of backend development with practical examples
              and resources
            </p>
            <div>
              <Subscribe />
              <Explore tags={tags} />
              <About />
              <ContactMe />
            </div>
          </div>
        </div>

        <main className="py-10 lg:pl-80">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}
