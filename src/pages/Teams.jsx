import React from 'react'
import Layout from '../components/Layout'
import HomeComponent from "../components/HomeComponent"
import TeamsCard from '../components/Teams/TeamsCard'
export default function Teams(props) {
    return (
        <Layout page="Teams" props={props}>
            <div className="px-6">
            <TeamsCard />
            </div>
        </Layout>
    )
}
