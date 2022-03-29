import { CalendarIcon, MailIcon } from "@heroicons/react/outline";
import React from "react";
import { Images } from "../Images";
import { Members } from "../Members";

export default function membersCard({users}) {
  
    return (
        <section className="py-8 bg-white">
  <div className="container flex flex-wrap items-center pt-4 pb-12 mx-auto">
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {
      users?.map((user,i)=>(
        <div className="flex flex-col col-span-1 text-center transition-all duration-500 transform bg-white divide-y divide-gray-200 rounded-lg shadow hover:scale-105 hover:shadow-xl" key={i}>
     <div className="flex flex-col flex-1 p-8">
            <img className="flex-shrink-0 w-32 h-32 mx-auto" src={Images[Math.floor(Math.random() * Images.length)]} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{user.full_name}</h3>
            <dl className="flex flex-col justify-between flex-grow mt-1">
              <dt className="sr-only">Email</dt>
              <dd className="text-sm text-gray-500">{user.email}</dd>
            </dl>
            <dl className="flex flex-col justify-between flex-grow mt-1">
              <dt className="sr-only">Matric Number</dt>
              <dd className="text-sm text-gray-500">{user.matric}</dd>
            </dl>
            <dl className="flex flex-col justify-between flex-grow mt-1">
            <dt className="sr-only">Status</dt>
              <dd className="mt-1">
                {
                  user.status==="Not Activated" && <span className="px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full">
                  {user.status}
                </span>
                }
                {
                  user.status==="Activated" && <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  {user.status}
                </span>
                }
              </dd>
            </dl>
          </div>
          <div>
          </div>
    </div>
        ))
      }
      </div>
  </div>
</section>
    )
}