import View from './View.js';

import icons from 'url:../../img/icons.svg'; // parcel 2

class paginationView extends View {
  _parentElement = document.querySelector(`.pagination`);

  addHandlerClick(handler) {
    this._parentElement.addEventListener(`click`, function (e) {
      const btn = e.target.closest(`.btn--inline`);

      console.log(btn);
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const generateBtnPrev = `     
     <button data-goto="${
       curPage - 1
     }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${curPage - 1}</span>
    </button>
    `;
    const generateBtnNext = `     
     <button data-goto="${
       curPage + 1
     }" class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
    </button>
    `;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const pageNumber = `
      <div class="page--number">
         <p>Page ${curPage} of ${numPages}</p>
      </div>`;
    console.log(numPages);
    //page 1, there are other pages
    if (curPage === 1 && numPages > 1) {
      return generateBtnNext + pageNumber;
    }
    //page 1, no other pages
    if (curPage === 1 && numPages === 1) {
      return ``;
    }
    // last page
    if (curPage === numPages && numPages > 1) {
      return generateBtnPrev + pageNumber;
    }
    // other page
    if (curPage < numPages && numPages !== 1) {
      return generateBtnPrev + generateBtnNext + pageNumber;
    }
  }
}

export default new paginationView();
