import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import {
  GalleryElementUl,
  GalleryImg,
  StyledBio,
  StyledCaption,
  StyledCard,
  StyledElement,
} from "./GalleryElement.styled";
import NoImageSmall from "../../images/NoImageSmall.png";

export const GalleryElement = ({ elements, hasMore, fetchMoreData }) => {
  return (
    <GalleryElementUl>
      <InfiniteScroll
        dataLength={elements.length}
        next={fetchMoreData}
        hasMore={hasMore}
      />
      {elements.map((el) => {
        const imgSrc = el.image || NoImageSmall;
        const altText = el.photo ? "Image" : "brak zdjęcia";
        const linkPath =
          el.type === "instructor"
            ? `/instruktorzy/${el._id}`
            : `/obiekty/${el._id}`;

        return (
          <StyledElement key={el._id}>
            <Link to={linkPath}>
              <StyledCard>
                <StyledBio>{el.bio}</StyledBio>
                <GalleryImg src={imgSrc} alt={altText} />
                <StyledCaption>
                  <p>{el.fullName}</p>
                  <p>{el.discipline}</p>
                  {el.type === "instructor" ? "" : <p>Zobacz Obiekt</p>}
                </StyledCaption>
              </StyledCard>
            </Link>
          </StyledElement>
        );
      })}
    </GalleryElementUl>
  );
};
