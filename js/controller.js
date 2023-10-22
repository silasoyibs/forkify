const recipeContainer = document.querySelector('.recipe');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
async function apiCall (){
  try{
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=07512e6f-4b93-4da4-91ea-d6ba1249dcab`);
    console.log(response);
    const data = await response.json();
    console.log(data);
  }catch(error){
      console.log(error);
  }
}
