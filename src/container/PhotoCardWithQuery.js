/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Load } from "@components/Load";
import PropType from "prop-types";
import { PhotoCard } from "../components/PhotoCard";
import { useGetPhotoWithQuery } from "../hooks/useGetPhotoWithQuery";

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhotoWithQuery(id);
  if (loading) return <Load />;
  if (error) return <pre>error</pre>;

  return (
    <>
      <a href="/">BACK</a>
      <PhotoCard {...data.photo} />
    </>
  );
};
PhotoCardWithQuery.propTypes = {
  id: PropType.string.isRequired,
};
