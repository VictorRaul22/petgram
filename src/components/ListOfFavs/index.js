import React from "react";
import { Grid, Image, Link } from "./styles";

const ListOfFavs = ({ favs = [] }) => (
  <Grid>
    {favs.map((fav) => (
      <Link key={fav.id} to={`/detail/${fav.id}`}>
        <Image key={fav.id} src={fav.src} alt={fav.id} />
      </Link>
    ))}
  </Grid>
);

export default ListOfFavs;
