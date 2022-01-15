import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "../components/Utils/Container";
import Image from "../images/i1.svg";
export default function ErrorPage(props) {
  return (
    <Layout page="Error Page" props={props}>
      <Container>
        <img src={Image} className="transition-all transform h-72 hover:scale-110 hover:-translate-y-5" />
        <h1 className="w-full font-extrabold text-center text-7xl ">404</h1>
        <p>Can't Find the page ur looking for</p>
        <Link to="/" className="px-6 py-2 mt-2 text-white bg-blue-700 rounded">
          Go back to home page
        </Link>
      </Container>
    </Layout>
  );
}
