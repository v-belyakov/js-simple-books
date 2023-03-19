import { DivComponent } from "../../common/divComponent";
import "./header.css";

export class Header extends DivComponent {
  constructor(appState) {
    super();

    this.appState = appState;
  }

  render() {
    this.el.innerHTML = "";
    this.el.classList.add("header");
    this.el.innerHTML = `
      <div class="header__container">
        <div class="header__logo">
          <a href="#/">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google">
          </a>
        </div>
        <div class="header__menu">
          <a class="header__menu__item" href="#">Book search</a>
          <a class="header__menu__item" href="#favorites">
            <span class="header__menu__item__text">Favorites</span>
            <span class="header__menu__item__counter">${this.appState.favorites.length}</span>
          </a>
        </div>
      </div>
    `;

    return this.el;
  }
}
