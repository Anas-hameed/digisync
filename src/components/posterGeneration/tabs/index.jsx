import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MyTabs({tab1,tab2,tab3,tab4,content1,content2,content3,content4}) {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0 font-poppins">

    
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-gray-50 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }  >{tab1}</Tab>
        <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              } >{tab2}</Tab>
        <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }>{tab3}</Tab>

        <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }>{tab4}</Tab>      
      </Tab.List>
      <Tab.Panels
      
      
      >
        <Tab.Panel
        className={classNames(
            'rounded-xl bg-gray-50 p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          )}
        >{content1}</Tab.Panel>
        <Tab.Panel
        className={classNames(
            'rounded-xl bg-gray-50 p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          )}>{content2}</Tab.Panel>
        <Tab.Panel
        className={classNames(
            'rounded-xl bg-gray-50 p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          )}>{content3}</Tab.Panel>
        <Tab.Panel
        className={classNames(
            'rounded-xl bg-gray-50 p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          )}>{content4}</Tab.Panel>  
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

export default MyTabs;