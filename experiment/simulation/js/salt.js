// const stageMicrometer = document.querySelector("#stage-micrometer > img");
// stageMicrometer already defined in main.js

const stageMicrometer = document.querySelector("#stage-micrometer > img");
const salt = document.querySelector("#salt");

salt.style.transform = `translate( ${
  stageMicrometer.getBoundingClientRect().width / 2 -
  salt.getBoundingClientRect().width / 2
}px, -${stageMicrometer.getBoundingClientRect().height}px)`;

// create particles and append to salt container
const saltContainer = document.querySelector("#salt");

for (let i = 0; i < 100; i++) {
  const particle = document.createElement("div");
  particle.setAttribute("id", "particle");

  const randX = Math.floor(Math.random() * 50);
  const randY = Math.floor(Math.random() * 30);
  particle.style.transform = `translate(${randX}px, ${randY}px)`;

  saltContainer.appendChild(particle);
}

const btnSprinkleSalt = document.querySelector("#sprinkleSalt");
btnSprinkleSalt.addEventListener("click", () => {
  salt.style.visibility = "visible";
});
