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
