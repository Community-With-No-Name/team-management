import React from 'react'
import {
  HomeIcon,
  UserIcon
} from '@heroicons/react/outline'
import {Link} from "react-router-dom"
export default function NarrowSidebar({page}) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const sidebarNavigation = [
        { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
        { name: 'Error Page', href: '/sign-up', icon: UserIcon, current: false },
      ]
    return (
        <nav aria-label="Sidebar" className="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto">
          <div className="relative flex flex-col w-20 p-3 space-y-3">
            {sidebarNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.name===page ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
                  'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
                )}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </nav>
    )
}
