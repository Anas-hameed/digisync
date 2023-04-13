import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Card from '../card'

export default function Accordion({content}) {
  return (
    <div className="w-full mt-6  ">
      <div className="mx-auto w-full bg-white  ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex border-[1px] border-gray-600 rounded-md w-full justify-between py-3 bg-neutral-200 px-4  text-left text-sm  text-black hover:bg-neutral-300 focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
                <span>Results</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              {content}
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
