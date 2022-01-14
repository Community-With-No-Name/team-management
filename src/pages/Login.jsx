import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/signUp/Container";
import Images from "../images/login.svg"
import Layout from "../components/Layout";






const Login = () => {
    return ( 
        <Layout page="Login Page">
        <Container>
         <img src={Images} className="transition-all transform h-80 hover:scale-110 hover:-translate-y-5 sm:mt-5 sm:ml-20" /> 
        <form className="sm:w-80 sm:mt-10 sm:mr-8">
           <input type="text" name="username" id="username" placeholder="Enter Username" className=" outline-none rounded"/>
           <input type="password" name="password" id="password" placeholder="Enter your password" className="rounded" required/>
             <input type="submit" value="Login" className="text-center hover:bg-opacity-20 text-white bg-blue-700 rounded border-none py-2"/>
             <p className="mt-5 text-center">Don't have an account? <Link to='/sign-up'
             className="pl-2 text-blue-900 font-bold cursor-pointer rounded">SignUp</Link> </p>
          </form>
        </Container>
        </Layout>
     );
}
 
export default Login;