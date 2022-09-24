import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import RecipeDetails from "./RecipeDetails";

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cuisine/" element={<Cuisine />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
