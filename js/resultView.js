import view from "./view.js";
class ResultView extends view {
  _recipeContainer = document.querySelector(".results");
  _displayMarkup() {
    return this._data.map(this._displayMarkupPreview).join(" ");
  }
  _displayMarkupPreview(result) {
    return `
    <li class="preview">
    <a class="preview__link preview__link--active" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
      </div>
    </a>
  </li> 
    `;
  }
}
export default new ResultView();
