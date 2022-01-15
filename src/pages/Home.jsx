import React from 'react'
import Layout from '../components/Layout/'
import HomeComponent from "../components/HomeComponent"
export default function Home(props) {
    return (
        <Layout page="Dashboard" props={props}>
            <HomeComponent />
        </Layout>
    )
}
