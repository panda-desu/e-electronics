import { NavBarMid } from "./navbar/NavBarMid";
import { NavBarTop } from "./navbar/NavBarTop";
import { NavBarBot } from "./navbar/NavBarBot";
export const NavBar = () => {
  return (
    <>
      <NavBarTop />
      <NavBarMid />
      <NavBarBot />
    </>
  );
};
