import { ArticleSection } from "./article/Article";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./navbar/NavBar";

export const MainPage = () => {
  return (
    <>
      <NavBar />
      <ArticleSection />
      <Footer />
    </>
  );
};
