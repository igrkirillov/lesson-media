import {toPostDateFormat} from "./utils";
import eyeIcon from "/src/icons/eye.png";

export default class PostWidget {
  constructor(ownerElement, postsWidget, post) {
    this.element = this.createElement(ownerElement, postsWidget, post);
    this.postsWidget = postsWidget;
    this.data = post;
  }

  createElement(ownerElement, postsWidget, post) {
    const element = document.createElement("div");
    element.classList.add("post");
    element.innerHTML = `
        <div class="post-container">
            <div class="post-title">
                <span>${toPostDateFormat(post.dateTime)}</span>
            </div>
            <div class="post-data">
                <span>${post.data}</span>
            </div>
            <div class="post-location">
                <span>[${post.location.latitude}, ${post.location.longitude}]</span>
                <img src="${eyeIcon}" class="eye-icon-class">
            </div>
        </div>
    `;
    ownerElement.appendChild(element);
    return element;
  }
}
