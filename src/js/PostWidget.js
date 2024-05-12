import {toChatDateFormat} from "./utils";

export default class PostWidget {
  constructor(ownerElement, postsWidget, data) {
    this.element = this.createElement(ownerElement, postsWidget, data);
    this.postsWidget = postsWidget;
    this.data = data;
  }

  createElement(ownerElement, postsWidget, data) {
    const element = document.createElement("div");
    element.classList.add("post");
    if (data.user.id === postsWidget.currentUser.id) {
      element.classList.add("post-own");
    } else {
      element.classList.add("post-another");
    }
    element.innerHTML = `
        <div class="post-container">
            <div class="post-title">
                <span>${data.user.name}, </span>
                <span>${toChatDateFormat(data.dateTime)}</span>
            </div>
            <div class="post-content">
                <span>${data.text}</span>
            </div>
        </div>
    `;
    ownerElement.appendChild(element);
    return element;
  }
}
