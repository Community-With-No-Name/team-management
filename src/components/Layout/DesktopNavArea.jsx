/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import {
  BellIcon,
} from '@heroicons/react/outline'
import { Menu, Transition } from '@headlessui/react'

export default function DesktopNavArea() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    const user = {
        name: 'Whitney Francis',
        email: 'whitneyfrancis@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
    return (
        <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <div className="relative max-w-2xl text-gray-400 focus-within:text-gray-500">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                id="search"
                type="search"
                placeholder="Search"
                className="block w-full pl-12 placeholder-gray-500 border-transparent focus:border-transparent sm:text-sm focus:ring-0"
              />
              <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-4 pointer-events-none">
                <SearchIcon className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-shrink-0 pr-4 ml-10 space-x-10">
            <nav aria-label="Global" className="flex space-x-10">
              <a href="#" className="text-sm font-medium text-gray-900">
                Inboxes
              </a>
              <a href="#" className="text-sm font-medium text-gray-900">
                Reporting
              </a>
              <a href="#" className="text-sm font-medium text-gray-900">
                Settings
              </a>
            </nav>
            <div className="flex items-center space-x-8">
              <span className="inline-flex">
                <a href="#" className="p-1 -mx-1 text-gray-400 bg-white rounded-full hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </a>
              </span>

              <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                      <span className="sr-only">Open user menu</span>
                      <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="" />
                    </Menu.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 z-30 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign Out
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
    )
}
