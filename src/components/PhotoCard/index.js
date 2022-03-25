/* eslint-disable no-unused-vars */
import React from "react";
import { FavButton } from "@components/FavButton";
import { Img, ImgWrapper, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useMuationToogleLike } from "../../hooks/useMutationToogleLike";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [show, ref] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();
  const handleFavClick = () => {
    if (!liked) {
      mutation({
        variables: {
          input: { id },
        },
      });
    }
    setLiked(!liked);
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </a>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
}

export { PhotoCard };
