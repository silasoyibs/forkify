import view from "./view.js";

class paginationView extends view {
  _parentElement = document.querySelector(".pagination");
  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      console.log(btn);

      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      console.log(gotoPage);
      handler(gotoPage);
    });
  }
  _displayMarkup() {
    const curPage = this._data.page;
    const numberpages = Math.ceil(
      this._data.results.length / this._data.itemsPerPage
    );
    // page 1, and there are other pages
    if (curPage === 1 && numberpages > 1 && numberpages > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
        <span>page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="img/icons.svg#icon-arrow-right"></use>
        </svg>
        </button>  
      `;
    }
    // page 1, and there are not other pages
    // last page
    if (curPage === numberpages && numberpages > 1) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="img/icons.svg#icon-arrow-left"></use>
        </svg>
        <span>page ${curPage - 1}</span>
      </button>
      `;
    }
    // other page
    if (curPage < numberpages) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="img/icons.svg#icon-arrow-left"></use>
        </svg>
        <span>page ${curPage - 1}</span>
      </button>
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="img/icons.svg#icon-arrow-right"></use>
      </svg>
      </button>  
      `;
    }
    // page 1 and no ther page
    return;
  }
}

export default new paginationView();
