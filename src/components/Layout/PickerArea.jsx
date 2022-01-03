import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  HomeIcon,
} from '@heroicons/react/outline'

export default function PickerArea() {
    const sidebarNavigation = [
        { name: 'Open', href: '#', icon: HomeIcon, current: true },
      ]
    return (
        <div className="mx-auto md:hidden">
          <div className="relative">
            <label htmlFor="inbox-select" className="sr-only">
              Choose inbox
            </label>
            <select
              id="inbox-select"
              className="pl-3 pr-8 text-base font-medium text-gray-900 border-0 rounded-md bg-none focus:ring-2 focus:ring-indigo-600"
              defaultValue={sidebarNavigation.find((item) => item.current).name}
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
