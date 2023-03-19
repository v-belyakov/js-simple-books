import { DivComponent } from "../../common/divComponent.js";
import "./card.css";

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();

    this.appState = appState;
    this.cardState = cardState;
  }

  #addToFavorites() {
    this.appState.favorites.push(this.cardState);
  }

  #deleteFromFavorites() {
    this.appState.favorites = this.appState.favorites.filter(
      (record) => record.key !== this.cardState.key
    );
  }

  render() {
    const isInFavorites = this.appState.favorites.find(
      (record) => record.key == this.cardState.key
    );

    this.el.classList.add("card");
    this.el.innerHTML = `
      <div class="card__container">
        <div class="card__image">
          <img src="https://covers.openlibrary.org/b/olid/${
            this.cardState.cover_edition_key
          }-M.jpg" alt="${this.cardState.title}" />
        </div>
        <div class="card__info">
          <div class="card__tag">
            ${this.cardState.subject?.[0] || "Not specified"}
          </div>
          <div class="card__title">
            ${this.cardState.title}
          </div>
          <div class="card__author">
            ${this.cardState.author_name?.[0] || "Not specified"}
          </div>
          <div class="card__footer">
            <button class="button__add ${
              isInFavorites ? "button__active" : ""
            }">
              ${isInFavorites ? "remove" : "add"}
            </button>
          </div>
        </div>
      </div>
    `;

    if (isInFavorites) {
      this.el
        .querySelector("button")
        .addEventListener("click", this.#deleteFromFavorites.bind(this));
    } else {
      this.el
        .querySelector("button")
        .addEventListener("click", this.#addToFavorites.bind(this));
    }

    return this.el;
  }
}
