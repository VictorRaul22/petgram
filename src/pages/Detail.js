import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@components/Layout";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

const Detail = () => {
  const { id } = useParams();
  return (
    <Layout title={`Fotografia ${id}`}>
      <PhotoCardWithQuery id={id} />
    </Layout>
  );
};

export { Detail };
