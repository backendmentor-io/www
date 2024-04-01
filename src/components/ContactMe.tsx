'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

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
            <p>I'd love to hear from you! </p>
            <p>
              If you want to connect for any reason its easiest to reach out on{' '}
              <a
                href="https://www.linkedin.com/in/gregmacbean"
                className="font-semibold italic"
              >
                linkedin
              </a>
            </p>
            <p>
              If have any thoughts to share on an article or example please
              submit a{' '}
              <a
                href="https://github.com/backendmentor-io"
                className="font-semibold italic"
              >
                GitHub
              </a>{' '}
              issue and we can discuss there!
            </p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
