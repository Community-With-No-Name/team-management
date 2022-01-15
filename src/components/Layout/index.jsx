
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import LogoArea from './LogoArea'
import PickerArea from './PickerArea'
import MenuButtonArea from './MenuButtonArea'
import DesktopNavArea from './DesktopNavArea'
import MobileMenuNav from './MobileMenuNav'
import NarrowSidebar from './NarrowSidebar'
import Main from './Main'

export default function Layout({children, page, props}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      <header className="relative flex items-center flex-shrink-0 h-16 bg-white">
        <LogoArea />

        <PickerArea page={page} props={props} />

        <MenuButtonArea setMobileMenuOpen={setMobileMenuOpen} />

        <DesktopNavArea />

              <MobileMenuNav setMobileMenuOpen={setMobileMenuOpen}
              mobileMenuOpen={mobileMenuOpen} />
            
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
