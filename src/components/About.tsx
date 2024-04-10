'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

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
              So whether you&apos;re a beginner or a seasoned pro, join me to
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
