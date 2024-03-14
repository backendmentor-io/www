'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Badge } from './Badge'

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
