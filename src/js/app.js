import TimelineWidget from "./TimelineWidget";

let mainElement;

document.addEventListener("DOMContentLoaded", () => {
  mainElement = document.querySelector("main");
  new TimelineWidget(mainElement);
});
