import React from "react";
import { PhotoCard } from "@components/PhotoCard";
import { useQuery, gql } from "@apollo/client";
import { Load } from "@components/Load";

const ANIMALS_QUERY = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;
function ListOfPhotoCard({ categoryId }) {
  const { data, loading, error } = useQuery(ANIMALS_QUERY, {
    variables: { categoryId },
  });
  if (loading) return <Load />;
  if (error) return <pre>{error.message}</pre>;
  const { photos } = data;
  return (
    <ul>
      {photos.map((photo) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
}

export { ListOfPhotoCard };
