
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import LogoArea from './LogoArea'
import PickerArea from './PickerArea'
import MenuButtonArea from './MenuButtonArea'
import DesktopNavArea from './DesktopNavArea'
import MobileMenuNav from './MobileMenuNav'
import NarrowSidebar from './NarrowSidebar'
import Main from './Main'

export default function Layout({children, page}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <header className="relative flex items-center flex-shrink-0 h-16 bg-white">
        <LogoArea />

        <PickerArea page={page} />

        <MenuButtonArea setMobileMenuOpen={setMobileMenuOpen} />

        <DesktopNavArea />

        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 z-40 md:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
              enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
              enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
              leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
            >
              <MobileMenuNav setMobileMenuOpen={setMobileMenuOpen} />
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </header>

      {/* Bottom section */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Narrow sidebar*/}
        <NarrowSidebar page={page} />

        {/* Main area */}
        <Main children={children} />
      </div>
    </div>
  )
}
