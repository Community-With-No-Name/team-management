import React from "react";
import RegComponent from "../components/RegComponent";
import Layout from "../components/Layout";

export default function Registration({status}) {
  return (
    <Layout>
      <RegComponent status={status} />
    </Layout>
  );
}
