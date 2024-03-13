'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Button } from './Button'
import { ArticleWithSlug } from '@/lib/articles'

export function Subscribe() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          {' '}
          <Disclosure.Button className="flex w-full justify-between py-2 pr-4 text-left">
            <span className="text-2xl">Subscribe</span>
            <ChevronUpIcon
              className={`${open ? 'rotate-180 transform' : ''} mt-2 h-6 w-6 text-3xl`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pb-4  font-light">
            <p>
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <Newsletter />
            <a href="/feed.xml" className="font-semibold italic">
              www.backendmentor.io/feed.xml
            </a>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export function About() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between py-2 pr-4 text-left">
            <span className="text-2xl">About</span>
            <ChevronUpIcon
              className={`${open ? 'rotate-180 transform' : ''} mt-2 h-6 w-6 text-3xl`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="flex grow flex-col gap-y-5 pb-4 font-light">
            <p>
              Backend Mentor is for developers of all levels to learn backend &
              serverless development using AWS.
            </p>
            <p>
              I share practical examples & real world solutions, along with
              thoughts & best practises.
            </p>
            <p>
              So whether you're a beginner or a seasoned pro, join me to
              discover, experiment & level up your backend skills.
            </p>
            <p>
              By the way my name is <em>Greg</em>, I am a cloud native developer
              & architect living & working in Sydney, Australia.
            </p>
            <p>Copyright ©{new Date().getFullYear()}. All rights reserved.</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export function Explore({ tags }: { tags: string[] }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between py-2 pr-4 text-left">
            <span className="text-2xl">Explore</span>
            <ChevronUpIcon
              className={`${open ? 'rotate-180 transform' : ''} mt-2 h-6 w-6 text-3xl`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="flex grow flex-col gap-y-5 pb-4 font-light">
            <div className="flex flex-wrap gap-2">
              {tags.map((x, i) => (
                <Badge key={i} text={x} href={`/tags/${x}`} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
function Badge({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-2xl bg-teal-50 px-2 text-xs font-bold text-teal-600 ring-1 ring-teal-500/10 hover:bg-teal-600 hover:text-white"
    >
      {text}
    </a>
  )
}
export function ContactMe() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          {' '}
          <Disclosure.Button className="flex w-full justify-between py-2 pr-4 text-left">
            <span className="text-2xl">Get in touch</span>
            <ChevronUpIcon
              className={`${open ? 'rotate-180 transform' : ''} mt-2 h-6 w-6 text-3xl`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="flex grow flex-col gap-y-5 pb-4 font-light">
            <p>
              If you have a question or wanted to connect for any reason. You
              can{' '}
              <a
                href="mailto:hello@backendmentor.io"
                className="font-semibold italic"
              >
                email me
              </a>{' '}
              or connect through{' '}
              <a
                href="https://www.linkedin.com/in/gregmacbean"
                className="font-semibold italic"
              >
                linkedin
              </a>
            </p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
function Newsletter() {
  return (
    <form action="/thank-you" className="">
      <div className="my-3 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)]  placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}
