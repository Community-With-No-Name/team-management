import React from "react";
import Container from "../components/signUp/Container";
import Images from "../images/signup.svg"
import Layout from "../components/Layout";

const signUp = () => {
    return (
        <Layout page='signUp Page'>
         <Container>
         <img src={Images} className="transition-all transform h-80 hover:scale-110 hover:-translate-y-5 sm:mt-5 sm:ml-20" /> 
        <form className="sm:w-80 sm:mt-10 sm:mr-8">
           <input type="text" name="username" id="username" placeholder="Create Username" className=" outline-none rounded"/>
           <input type="email" name="email" id="email" placeholder="enter your email" className="rounded" required/>
           <input type="password" name="password" id="password" placeholder=" Create new password" className="rounded" />
           <input type="password" name="password" id="password" placeholder="Comfirm password" className="rounded" required/>
             <input type="submit" value="SignUp" className="text-center hover:bg-opacity-20 text-white bg-blue-700 rounded border-none py-2"/>
          </form>
         </Container> 
         </Layout>
    );
}
 
export default signUp;