import React from "react";
import RegComponent from "../components/RegComponent";
import Layout from "../components/Layout";
import { CREATE_USER } from "../api/apiUrl";
import { useMutation } from "react-query";
import {postRequest} from "../api/apiCall"
import img from "../images/signup.svg"
import { UserAddIcon } from "@heroicons/react/outline";
import { Images } from "../components/Images";

export default function Registration(props) {

  const [state, setState] = React.useState({
    email: "",
    full_name: "",
    matric: "",
    image: "",
    whatsapp: "",
  });
const handleChange = (e) => {
  setState({
    ...state,
    [e.target.name]: e.target.value
  })
}
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      if(data?.message) {
        alert(`${data?.message}`)
      }
      else {
        alert(`${data?.error}`)
      }
    },
    onError(data) {
      alert("Course reg Failed")
    }
    
  });
  const handleSubmit = (e) => {
      e.preventDefault();
      // setState({
      //   ...state,
      //   image: Images[Math.floor(Math.random() * Images.length)]
      // })
    mutate({
      url: CREATE_USER,
      data: state,
    });
  };
  return (
    <Layout page="signUp Page" props={props}>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Enter Email Address
              </label>
              <div className="mt-1">
                <input
                onChange={handleChange}
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
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                Enter Full Name
              </label>
              <div className="mt-1">
                <input
                onChange={handleChange}
                  id="full_name"
                  name="full_name"
                  type="text"
                    autoComplete="full_name"
                    placeholder="Enter Full Name"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="matric" className="block text-sm font-medium text-gray-700">
                Enter Matric Number
              </label>
              <div className="mt-1">
                <input
                onChange={handleChange}
                  id="matric"
                  name="matric"
                  type="number"
                    autoComplete="matric"
                    placeholder="Enter Matric Number"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                Enter Whatsapp Number
              </label>
              <div className="mt-1">
                <input
                onChange={handleChange}
                  id="whatsapp"
                  name="whatsapp"
                  type="number"
                    autoComplete="whatsapp"
                    placeholder="2349078044747"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-all transform bg-indigo-600 border border-transparent rounded-md shadow-sm hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <UserAddIcon className="w-5 h-5 mr-2" /> Add User
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
    </div>
    </Layout>
  );
}
