document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = [
    "figma-bg1.png",
    "figma-bg2.png",
    "figma-bg3.png",
    "figma-bg4.png",
    "figma-bg5.png",
  ]; // Replace with your image filenames
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const selectedImage = backgrounds[randomIndex];
  const heroElement = document.querySelector(".hero");
  heroElement.style.backgroundImage = `linear-gradient(to right, #243a5a8f, #243a5a6d), url(../assets/images/${selectedImage})`;
});

url("../assets/images/figma-bg1.png");
