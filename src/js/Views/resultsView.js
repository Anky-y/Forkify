import View from './View.js';

import previewView from './previewView.js';

import icons from 'url:../../img/icons.svg'; // parcel 2

class resultsView extends View {
  _parentElement = document.querySelector(`.results`);
  _errorMessage = `No recipes found! :(. Please try another one! `;
  _message = ``;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join(``);
  }
}

export default new resultsView();
