import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "e980de71";
  const APP_KEY = "fa616790cc3877fbf6a22cb0a8a54ecd";

  //componentDidMount
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;