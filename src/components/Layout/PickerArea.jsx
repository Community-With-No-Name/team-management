import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  HomeIcon,
  UserIcon,
  LoginIcon,
  UserAddIcon,
  UserGroupIcon
} from '@heroicons/react/outline'

export default function PickerArea({page, props}) {
    const sidebarNavigation = [
        { name: 'Dashboard', href: '/', icon: HomeIcon },
        { name: 'Add Team', href: '/add-team', icon: UserGroupIcon},
        { name: 'Teams', href: '/teams', icon: UserGroupIcon},
        { name: 'Add Member', href: '/add-member', icon: UserIcon},
        { name: 'Members', href: '/members', icon: UserIcon},
        { name: 'Login Page',href: '/login', icon: LoginIcon},
        { name: 'signUp Page', href: '/sign-up', icon: UserAddIcon}
      ]
      console.log(props.history)
    const handlePageNavigation = (e) => {
        const pageTO = sidebarNavigation.filter((p)=>p.name===e.target.value)
        props.history.replace(`${pageTO[0].href}`,`${pageTO[0].href}`)
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
              // defaultValue={sidebarNavigation.find((item) => page && item.name===page).name}
            >
              <option>Please Select Page</option>
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
