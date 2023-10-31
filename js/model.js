import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";
export const state = {
    recipe:{}
}

export const loadRecipe = async function(id) {


    try{
        
    const data = await getJSON(`${API_URL}/${id}`)
        // const response = await fetch(
        //     `${API_URL}${id}?key=<insert your key>`
        //   );
        //   const data = await response.json();
        //   // console.log(data);
        //   if (!response.ok) {
        //     throw new Error(`${data.message} (${response.status})`);
        //   }
          let {recipe} = data.data
           state.recipe = {
              id: recipe.id,
              title:recipe.title,
              publisher:recipe.publisher,
              sourceUrl:recipe.source_url,
              image:recipe.image_url,
              servings:recipe.servings,
              cookingTime:recipe.cooking_time,
              ingredients:recipe.ingredients,
          };
    }
    catch(err){
        //temp error handling
            console.log(`${err} 💥💥💥💥`);
    }
}