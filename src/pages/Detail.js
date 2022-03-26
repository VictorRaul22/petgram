import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

const Detail = () => {
  const { id } = useParams();
  return <PhotoCardWithQuery id={id} />;
};

export { Detail };
