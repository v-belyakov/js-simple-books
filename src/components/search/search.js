import { DivComponent } from "../../common/divComponent";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();

    this.state = state;
  }

  search() {
    const searchQuery = this.el.querySelector(".search__input").value;
    this.state.searchQuery = searchQuery;
  }

  render() {
    this.el.innerHTML = "";
    this.el.classList.add("search");
    this.el.innerHTML = `
      <div class="search__container">
        <input
          class="search__input"
          type="text"
          placeholder="Search for books"
          value="${this.state.searchQuery || ""}"
        />
        <button class="search__button">Search</button>
      </div>
    `;

    this.el.querySelector(".search__button").addEventListener("click", this.search.bind(this));
    this.el.querySelector(".search__input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.search();
      }
    });

    return this.el;
  }
}
