import TimelineWidget from "./TimelineWidget";

let mainElement;
let chatWidget;

document.addEventListener("DOMContentLoaded", () => {
  mainElement = document.querySelector("main");
  chatWidget = new TimelineWidget(mainElement);
});
