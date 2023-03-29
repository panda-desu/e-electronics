import { BigCarousel } from "./carousels/BigCarousel";
import { MinCarousel } from "./carousels/MinCarousel";
import { PopularProducts } from "./products/PopularProducts";
import { Sales } from "./News/Sales";
import { BigProduct } from "./products/BigProduct";
import { Comments } from "./News/Comments";
import { LatestNews } from "./News/LatestNews";
export const ArticleSection = () => {
  return (
    <>
      <BigCarousel />
      <MinCarousel />
      <PopularProducts />
      <Sales />
      <BigProduct />
      <Comments />
      <LatestNews />
    </>
  );
};
