import { DivComponent } from "../../common/divComponent.js";
import { Card } from "../../components/card/card.js";
import "./cardList.css";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();

    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = `
        <div class="card-list__loader">
          Loading...
        </div>
      `;

      return this.el;
    }

    this.el.classList.add("card-list");
    this.el.innerHTML = `
      <div class="card-list__container">
        Found books ${this.parentState.numFound}
      </div>
    `;

    for (const card of this.parentState.list) {
      this.el.append(new Card(this.appState, card).render());
    }

    return this.el;
  }
}
