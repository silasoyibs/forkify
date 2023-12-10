import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";
export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    itemsPerPage: 10,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    // const response = await fetch(
    //     `${API_URL}${id}?key=<insert your key>`
    //   );
    //   const data = await response.json();
    //   // console.log(data);
    //   if (!response.ok) {
    //     throw new Error(`${data.message} (${response.status})`);
    //   }
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw new err();
    // console.log(`${err} 💥💥💥💥`);
  }
};

export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    throw new err();
  }
};
export const paginationPage = function (page = state.search.page) {
  state.search.page = page;
  const startIndex = (page - 1) * state.search.itemsPerPage;
  const endIndex = startIndex + state.search.itemsPerPage;
  return state.search.results.slice(startIndex, endIndex);
};
