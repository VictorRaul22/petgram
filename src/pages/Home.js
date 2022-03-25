import React from "react";
import { ListOfCategories } from "@components/ListOfCategories";
import { ListOfPhotoCard } from "@components/ListOfPhotoCard";
import { useParams } from "react-router-dom";

export const Home = () => {
  const { petId = 2 } = useParams();
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={petId} />
    </>
  );
};
