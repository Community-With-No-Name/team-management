import { UserGroupIcon } from '@heroicons/react/outline'
import React from 'react'
import Layout from '../components/Layout'
import img from "../images/team.svg"
export default function AddTeam(props) {
  return (
    <Layout page="Teams" props={props}>
      <div className="grid w-full max-w-6xl max-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
      <div className="hidden w-full h-full col-span-1 sm:my-auto sm:mx-auto sm:block" >
        <img 
        src={img}
        alt="" 
        className="w-full h-full mx-auto transition-all transform hover:scale-105 hover:-translate-y-3 " />
      </div>
    <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="w-auto h-auto mx-auto transition-all transform sm:hidden hover:scale-105 hover:-translate-y-3"
          src={img}
            alt="Workflow"
            
        />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Create Team</h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-gray-50 sm:rounded-lg sm:px-5">
            <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Team Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                    autoComplete="name"
                    placeholder="Enter Team Name"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="members" className="block text-sm font-medium text-gray-700">
                Add Members
              </label>
              <div className="mt-1">
                <select
                  id="members"
                  name="members"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                >
                    <option>Please Select Members</option>
                    <option>Jubril Musa</option>
                    <option>Zaccheous Jacob</option>
                    <option>Kushimo Bashir</option>
                </select>
              </div>
            </div>


            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-all transform bg-indigo-600 border border-transparent rounded-md shadow-sm hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <UserGroupIcon className="w-5 h-5 mr-2" /> Create Team
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
    </div>
    </Layout>
  )
}