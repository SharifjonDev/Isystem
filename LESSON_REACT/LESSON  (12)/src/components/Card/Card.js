import React, { useState } from "react";
import classes from "./Card.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import NoPhoto from "../../assets/img/no-photo.jpg";

const Card = (props) => {
  const { movie, isLoading } = props;
  const [image, setImage] = useState("");

  const loadImage = () => {
    setImage("loaded");
  };

  return (
    <div className={classes.card}>
      {!image && (
        <SkeletonTheme baseColor="#202020" highlightColor="#C0C0C0">
          <div>
            <Skeleton height={"100px"} />
          </div>
        </SkeletonTheme>
      )}

      <img
        className={classes.imgStyle}
        src={movie?.primaryImage?.url ? movie?.primaryImage?.url : NoPhoto}
        alt={movie?.titleText?.text}
        onLoad={loadImage}
      />

      <div className={classes.cardBody}>
        <h3>{isLoading ? <Skeleton /> : movie?.titleText?.text}</h3>
        <p>{isLoading ? <Skeleton /> : movie?.releaseDate?.year}</p>
      </div>
    </div>
  );
};

export default Card;
