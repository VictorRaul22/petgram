import React from "react";
import useGetFavorites from "@hooks/useGetFavorites";
import Layout from "@components/Layout";
import ListOfFavs from "../components/ListOfFavs";

function Favs() {
  const { loading, data, error } = useGetFavorites();
  if (loading) return "...loading";
  if (error) return `...error ${error}`;
  const { favs } = data;
  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aqui puedes encontrar tus imagenes favoritos"
    >
      <ListOfFavs favs={favs} />
    </Layout>
  );
}

export { Favs };
