class SearchView {
  _parentEl = document.querySelector(`.search`);

  getQuery() {
    const query = this._parentEl.querySelector(`.search__field`).value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener(`submit`, function (e) {
      e.preventDefault();
      handler();
    });
  }
  _clearInput() {
    this._parentEl.addEventListener.value = ``;
  }
}

export default new SearchView();
