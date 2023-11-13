export default class View {
  _data;
  renderRecipe(data) {
    this._data = data;
    const markup = this._displayMarkup();
    this._clear();
    this._recipeContainer.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._recipeContainer.innerHTML = "";
  }

  showLoader() {
    const markup = `<div class="spinner">
     <svg>
         <use href="img/icons.svg#icon-loader"></use>
       </svg>
    </div>`;
    this._clear();
    this._recipeContainer.insertAdjacentHTML("afterbegin", markup);
  }
  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
    <div>
      <svg>
        <use href="img/icons.svg#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>   
    `;
    this._clear();
    this._recipeContainer.insertAdjacentHTML("afterbegin", markup);
  }
}
