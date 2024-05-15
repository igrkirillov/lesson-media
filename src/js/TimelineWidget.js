import PostsWidget from "./PostsWidget";
import Location from "./Location";

export default class TimelineWidget {
  constructor(ownerElement) {
    this.element = this.createElement(ownerElement);
    this.postsWidget = new PostsWidget(this.element, this);
    this.addListeners();
  }

  createElement(ownerElement) {
    const element = document.createElement("div");
    element.classList.add("chat");
    ownerElement.appendChild(element);
    return element;
  }

  addListeners() {}

  setFocus() {
    this.postsWidget.setFocus();
  }

  get currentLocation() {
    return new Location(5, 5);
  }
}
