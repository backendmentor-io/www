'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { ArticleWithSlug } from '@/lib/articles'
import { Newsletter } from './Newsletter'

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
