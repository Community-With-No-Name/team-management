import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/signUp/Container";
import Images from "../images/login.svg"
import Layout from "../components/Layout";






const Login = (props) => {
    return ( 
        <Layout page="Login Page" props={props}>
        <Container>
         <img src={Images} className="transition-all transform h-80 hover:scale-110 hover:-translate-y-5 sm:mt-5 sm:ml-20" /> 
        <form className="sm:w-80 sm:mt-10 sm:mr-8">
           <input type="text" name="username" id="username" placeholder="Enter Username" className="rounded outline-none "/>
           <input type="password" name="password" id="password" placeholder="Enter your password" className="rounded" required/>
             <input type="submit" value="Login" className="py-2 text-center text-white bg-blue-700 border-none rounded hover:bg-opacity-20"/>
             <p className="mt-5 text-center">Don't have an account? <Link to='/sign-up'
             className="pl-2 font-bold text-blue-900 rounded cursor-pointer">SignUp</Link> </p>
          </form>
        </Container>
        </Layout>
     );
}
 
export default Login;