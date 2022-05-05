import React from "react";
import { ListOfCategories } from "@components/ListOfCategories";
import { ListOfPhotoCard } from "@components/ListOfPhotoCard";
import { useParams } from "react-router-dom";
import Layout from "@components/Layout";

const HomePage = () => {
  const { petId = 2 } = useParams();
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      subtitle="Con petgram puedes encontrar fotos de animales domesticos muy bonitos"
    >
      <ListOfCategories />
      <ListOfPhotoCard categoryId={petId} />
    </Layout>
  );
};
export const Home = React.memo(HomePage);
