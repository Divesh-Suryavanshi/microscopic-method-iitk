// const stageMicrometer = document.querySelector("#stage-micrometer > img");
// stageMicrometer already defined in main.js

const stageMicrometer = document.querySelector("#stage-micrometer > img");
const salt = document.querySelector("#salt");
const stage = document.querySelector(".view > .stage");
const eyePiece = document.querySelector(".eye-piece");
const blackoutCanvas = document.querySelector("#blackout");
const blackoutCtx = blackoutCanvas.getContext("2d");

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
  // place salt on slide
  salt.style.visibility = "visible";

  // remove stage micrometer
  // stage.style.width *= 2;
  stage.style.background = "none";
  // stage.style.transform = "translateX(-250px)";
  stageCanvas.width *= 2;
  stageCanvas.style.background = "rgba(189, 195, 199, 0.6)";
  stageCanvas.style.transform = "translateX(-300px)";

  stageContext.clearRect(0, 0, stageCanvas.width, stageCanvas.height);
  stage.style.borderRadius = "0";

  // add particles
  var img = new Image();
  img.onload = function () {
    stageContext.drawImage(img, 0, 0, stageCanvas.width, stageCanvas.height);
    blackoutCanvas.width = window.innerWidth * 2;
    blackoutCanvas.height = window.innerHeight * 2;
    blackoutCanvas.style.position = "absolute";
    blackoutCanvas.style.zIndex = "1000";
    blackoutCanvas.style.top = "-50%";

    blackoutCtx.fillStyle = "rgba(0, 0, 0, 0.9)";
    blackoutCtx.fillRect(0, 0, blackoutCanvas.width, blackoutCanvas.height);

    const eyePieceRect = eyePiece.getBoundingClientRect();
    const radius = eyePieceRect.width / 2;
    const centerX = (eyePieceRect.left + radius) * 2;
    const centerY = (eyePieceRect.top + radius) * 2;

    // Create a circular clipping path
    blackoutCtx.beginPath();
    blackoutCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    blackoutCtx.closePath();

    // Apply the clipping path
    blackoutCtx.clip();

    // Clear the region inside the clipping path to make it transparent
    blackoutCtx.clearRect(
      centerX - radius,
      centerY - radius,
      2 * radius,
      2 * radius
    );

    controls(blackoutCanvas);
  };

  img.src = "./images/dust-particles.png";
});
