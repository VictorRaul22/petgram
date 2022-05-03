import { gql, useQuery } from "@apollo/client";

const queryGetFavorites = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;
function GetFavorites() {
  const { loading, data, error } = useQuery(queryGetFavorites, {
    fetchPolicy: "cache-and-network",
  });

  return { loading, data, error };
}

export default GetFavorites;
