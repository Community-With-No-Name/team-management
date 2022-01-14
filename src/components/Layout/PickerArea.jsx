import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  HomeIcon,
  UserIcon
} from '@heroicons/react/outline'

export default function PickerArea({page}) {
    const sidebarNavigation = [
        { name: 'Dashboard', href: '/', icon: HomeIcon },
        // { name: 'Error Page', href: '/sign-up', icon: UserIcon },
        { name: 'Login Page',href: '/login', icon: UserIcon},
        { name: 'signUp Page', href: '/sign-up', icon: UserIcon}
      ]
    const handlePageNavigation = (e) => {
        const page = sidebarNavigation.filter((p)=>p.name===e.target.value)
        window.location.href =  `${page[0].href}`
    }
    return (
        <div className="mx-auto md:hidden">
          <div className="relative">
            <label htmlFor="inbox-select" className="sr-only">
              Choose inbox
            </label>
            <select
      onChange={handlePageNavigation}
              id="inbox-select"
              className="pl-3 pr-8 text-base font-medium text-gray-900 border-0 rounded-md bg-none focus:ring-2 focus:ring-indigo-600"
              defaultValue={sidebarNavigation.find((item) => item.name===page).name}
            >
              {sidebarNavigation.map((item) => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none">
              <ChevronDownIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
            </div>
          </div>
        </div>
    )
}
