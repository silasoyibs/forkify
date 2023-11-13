import view from "./view.js";

class SearchView extends view {
  _parentEl = document.querySelector(".search");
  getQuery() {
    return this._parentEl.querySelector(".search__field").value;
  }
  addHandlerSearch(Handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      Handler();
    });
  }

  //   clearForm(){
  //     this.#parentEl.querySelector(".search__field").value = "";
  //   }

  //   addHandlerSearch(handler) {
  //     this.#parentEl.addEventListener("submit", function (e) {
  //       e.preventDefault();
  //       handler();
  //     });
  //   }
}
export default new SearchView();
