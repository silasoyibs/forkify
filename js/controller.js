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
    const response = await fetch(`https://forkify-api.herokuapp.com/v2`);
    console.log(response);
    const data = await response.json();
    console.log(data);
  }catch(error){
      console.log(error);
  }
}
apiCall()