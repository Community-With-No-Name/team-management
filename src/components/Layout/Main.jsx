import React from "react";
import { RegBtn } from "../generalComponent/Btn";

export default function Main({ children }) {
  return (
    <main className="flex-1 min-w-0 border-t border-gray-200 lg:flex">
      {/* Primary column */}
      <section
        aria-labelledby="primary-heading"
        className="flex flex-col flex-1 w-full h-full min-w-0 overflow-x-hidden lg:order-last">
        <h1 id="primary-heading" className="sr-only">
          Home
        </h1>

        {/* <div className="flex justify-end registerBtn">
          <div className="flex p-3 my-5 btnArea ">
            <RegBtn path="/register/member" value="Add Member" />
            <RegBtn path="/register/team" value="Create Team" />
          </div>
        </div> */}

        {/* Your content */}
        {children}
      </section>

      {/* Secondary column (hidden on smaller screens) */}
      {/* <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
            <div className="relative flex flex-col h-full bg-gray-100 border-r border-gray-200 w-96">
            </div>
          </aside> */}
    </main>
  );
}
