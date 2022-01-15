import React from 'react'
import Layout from "../components/Layout";
import Image from '../images/verified.svg'
export default function Verified(props) {
    setTimeout(()=> {
        props.history.replace("/", "/")
    }, 5000 )
    return (
        <Layout page="Verified" props={props}>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <img src={Image} className="w-auto h-auto transform md:scale-75 animate-pulse" />
                <h1 className="pt-4 text-4xl font-extrabold text-center">Registration Successful</h1>
                <h1 className="text-xl font-extrabold text-center">you should be redirected back in 5secs</h1>
            </div>
        </Layout>
    )
}
