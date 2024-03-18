// DishPage.jsx

// import { Link, Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

export const DishPage = () => {
  return (
    <main>
     <h1>Menu</h1>
      <ul>
        <li>
          <NavLink to="/barbeque">Шашлик</NavLink>
        </li>
        <li>
          <NavLink to="team"></NavLink>
        </li>
        <li>
          <NavLink to="reviews">Go through the reviews</NavLink>
        </li>
      </ul>
      {/* <Outlet /> */}
    </main>
  );
};

export default DishPage;