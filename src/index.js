console.log("Hello from index.js!");

import exampleImage from "./images/example-image.jpg";

function createImage() {
  const img = document.createElement("img");
  img.src = exampleImage;
  img.alt = "Example Image";
  return img;
}

function createHeading() {
  const heading = document.createElement("h1");
  heading.textContent = "Hello from Webpack!";
  return heading;
}

function createApp() {
  const app = document.createElement("div");
  app.classList.add("app");

  app.appendChild(createHeading());
  app.appendChild(createImage());

  return app;
}

const rootElement = document.getElementById("root");

rootElement.appendChild(createApp());
