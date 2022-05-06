import React from "react";
import { FavButton } from "@components/FavButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Img, ImgWrapper, Article } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useMuationToogleLike } from "../../hooks/useMutationToogleLike";
import { isLikes } from "../../helper/customPropTypes";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
function PhotoCard({ id, liked, likes = 0, src = DEFAULT_IMAGE }) {
  const [show, ref] = useNearScreen();
  const { mutation } = useMuationToogleLike();
  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
}
PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: isLikes,
};
export { PhotoCard };
