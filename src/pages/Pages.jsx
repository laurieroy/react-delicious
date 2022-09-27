import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import RecipeDetails from "./RecipeDetails";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
