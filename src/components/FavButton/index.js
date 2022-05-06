import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import PropTypes from "prop-types";
import { Button } from "./styles";
import { isLikes } from "../../helper/customPropTypes";

function FavButton({ liked, likes, onClick }) {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button type="button" onClick={onClick}>
      <Icon size="32px" />
      {likes} likes !
    </Button>
  );
}
FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: isLikes,
  onClick: PropTypes.func.isRequired,
};
export { FavButton };
