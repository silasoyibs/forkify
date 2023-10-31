import * as model from "./model.js";
import recipeView from "./recipeView.js";
import RecipeView  from "./recipeView.js";
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
    if(!id) return
    // renderSpinal(recipeContainer);
    recipeView.showLoader();
     await model.loadRecipe(id);
    const {recipe} = model.state
    //  rendering recipe 
    // const recipeContainerContent = 
    RecipeView.renderRecipe(model.state.recipe);
  } catch (error) {
  }
};
showRecipe();


['hashchange','load'].forEach(ev=>window.addEventListener(ev,showRecipe))
//  window.addEventListener('hashchange',showRecipe);
//  window.addEventListener('load',showRecipe);
