import cameraIcon from "/src/icons/camera.png";
import microphoneIcon from "/src/icons/microphone.png";

export default class PostsWidget {
  constructor(ownerElement, chatWidget) {
    this.element = this.createElement(ownerElement);
    this.postWidgets = [];
    this.chatWidget = chatWidget;
    this.addListeners();
    this.setFocus();
  }

  createElement(ownerElement) {
    const element = document.createElement("div");
    element.classList.add("posts");
    element.innerHTML = `
      <div class="posts-feed">
        
      </div>
      <div class="posts-input-panel">
        <div class="post-input-container">
            <input type="text" class="post-input-text">
            <a href="#" class="post-video-link">
                <img src="${cameraIcon}" class="camera-icon" alt="camera">
            </a>
            <a href="#" class="post-audio-link">
                <img src="${microphoneIcon}" class="microphone-icon" alt="microphone">
            </a>
        </div>
        <input type="button" class="post-input-button" value="Отправить">        
      </div>
    `;
    ownerElement.appendChild(element);
    return element;
  }

  addListeners() {
    this.onpostInputButtonClick = this.onpostInputButtonClick.bind(this);
    this.onpostInputTextKeyDown = this.onpostInputTextKeyDown.bind(this);
    this.postInputButtonElement.addEventListener(
      "click",
      this.onpostInputButtonClick
    );
    this.postInputTextElement.addEventListener(
      "keydown",
      this.onpostInputTextKeyDown
    );
  }

  get postsFeedElement() {
    return this.element.querySelector(".posts-feed");
  }

  get postInputTextElement() {
    return this.element.querySelector(".post-input-text");
  }

  get postInputButtonElement() {
    return this.element.querySelector(".post-input-button");
  }

  onpostInputButtonClick() {
    this.sendpost(this.postInputTextElement.value);
    this.postInputTextElement.value = "";
  }

  onpostInputTextKeyDown(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      this.sendpost(this.postInputTextElement.value);
      this.postInputTextElement.value = "";
    }
  }

  sendpost(text) {
  }

  setFocus() {
    this.postInputTextElement.focus();
  }
}
