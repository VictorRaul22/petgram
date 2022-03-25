/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useParams } from "react-router-dom";
import { PhotoCard } from "../components/PhotoCard";
import { useGetPhotoWithQuery } from "../hooks/useGetPhotoWithQuery";

export const PhotoCardWithQuery = () => {
  const { id } = useParams();
  const { loading, error, data } = useGetPhotoWithQuery(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <pre>error</pre>;

  return (
    <>
      <a href="/">BACK</a>
      <PhotoCard {...data.photo} />
    </>
  );
};
