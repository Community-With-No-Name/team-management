import { UserAddIcon } from '@heroicons/react/outline'
import { ThreeDRotationSharp } from '@material-ui/icons'
import React from 'react'
import Layout from '../components/Layout'
import img from "../images/member.svg"
export default function AddMember(props) {
    const MoveToNextPage = (e) => {
        e.preventDefault()
        console.log(props.history, props.match, props.location)
        props.history.replace('/verified', '/verified')
    }
  return (
    <Layout page="Members" props={props}>
      <div className="grid w-full max-w-6xl max-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
      <div className="hidden w-full h-full col-span-1 sm:my-auto sm:mx-auto sm:block" data-aos="fade-in-up" data-aos-duration="800">
        <img 
        src={img}
        alt="" 
        className="w-full h-full transition-all transform hover:-translate-y-3 hover:scale-110" />
      </div>
    <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="w-auto h-auto mx-auto transition-all transform sm:hidden hover:scale-105 hover:-translate-y-3"
          src={img}
            alt="Workflow"
            data-aos="fade-in-up" data-aos-duration="800"
        />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Add Member</h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-gray-50 sm:rounded-lg sm:px-5">
            <form className="space-y-6" onSubmit={MoveToNextPage}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Enter Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                    autoComplete="email"
                    placeholder="Enter Email Address"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Add To Team
              </label>
              <div className="mt-1">
              <select id="members" name="members" required className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
  <option>Please Select Team</option>
  <option>Team Hospital Management</option>
  <option>Team Hotel Management</option>
  <option>Team ISE-OWO-Mi</option>
</select>

              </div>
            </div>


            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-all transform bg-indigo-600 border border-transparent rounded-md shadow-sm hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <UserAddIcon className="w-5 h-5 mr-2" /> Add Member
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