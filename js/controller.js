import * as model from "./model.js";
import recipeView from "./recipeView.js";
import RecipeView from "./recipeView.js";
import searchView from "./searchView.js";
import ResultView from "./resultView.js";
import resultView from "./resultView.js";

const recipeContainer = document.querySelector(".recipe");
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const apiKey = `07512e6f-4b93-4da4-91ea-d6ba1249dcab`;
const showRecipe = async function () {
  try {
    let id = window.location.hash.slice(1);
    if (!id) return;
    // renderSpinal(recipeContainer);
    recipeView.showLoader();
    await model.loadRecipe(id);
    const { recipe } = model.state;
    //  rendering recipe
    // const recipeContainerContent =
    RecipeView.renderRecipe(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
showRecipe();

const controlRecipeSearch = async function () {
  try {
    resultView.showLoader();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResult(query);
    ResultView.renderRecipe(model.state.search.results);
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(controlRecipeSearch);
};
init();
//  window.addEventListener('hashchange',showRecipe);
//  window.addEventListener('load',showRecipe);
