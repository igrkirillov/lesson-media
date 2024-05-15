import cameraIcon from "/src/icons/camera.png";
import microphoneIcon from "/src/icons/microphone.png";
import Post from "./Post";
import postTypes from "./postTypes";
import PostWidget from "./PostWidget";
import LocationDeterminerWidget from "./LocationDeterminerWidget";

export default class PostsWidget {
  constructor(ownerElement, timelineWidget) {
    this.element = this.createElement(ownerElement);
    this.postWidgets = [];
    this.timelineWidget = timelineWidget;
    this.locationDeterminerWidget = new LocationDeterminerWidget(ownerElement);
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
    this.onPostInputButtonClick = this.onPostInputButtonClick.bind(this);
    this.onPostInputTextKeyDown = this.onPostInputTextKeyDown.bind(this);
    this.postInputButtonElement.addEventListener("click", this.onPostInputButtonClick);
    this.postInputTextElement.addEventListener("keydown", this.onPostInputTextKeyDown);
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

  onPostInputButtonClick() {
    this.addTextPost(this.postInputTextElement.value);
    this.postInputTextElement.value = "";
  }

  onPostInputTextKeyDown(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      this.addTextPost(this.postInputTextElement.value);
      this.postInputTextElement.value = "";
    }
  }

  addTextPost(text) {
    const widget = this;
    this.locationDeterminerWidget.determineMyLocation()
      .then(location => {
        const post = new Post(postTypes.text, text, new Date(), location);
        widget.addPost(post);
      })
      .catch(e => {
        console.log("add text with error " + e);
      })
  }

  addVideoPost(blob) {
    const post = new Post(postTypes.video, blob, new Date(), this.timelineWidget.currentLocation);
    this.addPost(post);
  }

  addAudioPost(blob) {
    const post = new Post(postTypes.audio, blob, new Date(), this.timelineWidget.currentLocation);
    this.addPost(post);
  }

  addPost(post) {
    const postWidget = new PostWidget(this.postsFeedElement, this, post);
    this.postWidgets.push(postWidget);
  }

  setFocus() {
    this.postInputTextElement.focus();
  }
}
