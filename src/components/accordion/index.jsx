import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Card from '../card'

export default function Accordion() {
  return (
    <div className="w-full mt-6  ">
      <div className="mx-auto w-full max-w-md bg-white  ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between py-4 bg-neutral-200 px-4  text-left text-sm  text-black hover:bg-neutral-300 focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
                <span>Results</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="  grid grid-cols-2 pt-4  text-black ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
                {/* <ol>
                <li>- Nature is the art of God</li>
                <li>- Nature is the art of God</li>
                <li>- Nature is the art of God</li>
                </ol> */}
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
  )
}
