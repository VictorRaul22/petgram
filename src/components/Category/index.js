import React from "react";
import { Image, LinkStyles } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <LinkStyles to={`/pet/${path}`}>
    <Image src={cover} alt={cover} />
    {emoji}
  </LinkStyles>
);
