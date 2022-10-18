import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Accordion() {
  return (
    <div className="w-full mt-6 ">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white  ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-md bg-neutral-200 px-4 py-2 text-left text-sm  text-black hover:bg-neutral-300 focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
                <span>Results</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
