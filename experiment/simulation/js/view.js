const stageCanvas = document.querySelector(".stage > canvas");
const stageContext = stageCanvas.getContext("2d");

const eyeCanvas = document.querySelector(".eye-piece > canvas");
const eyeContext = eyeCanvas.getContext("2d");

const btnClose = document.querySelector("#close");

btnClose.addEventListener("click", () => {
  document.querySelector(".view").style.visibility = "hidden";
});

function stageAnimation() {
  const x = stageCanvas.width / 10;
  const y = stageCanvas.height / 2;
  // stageContext.lineWidth = 2;

  // draw millimeter scale
  let mmScaleLength = 10;
  let numLines = 100;

  let countLines = 0;

  for (let n = 0, i = 0; n <= numLines; i += 4, n++) {
    let length = 10;
    if (n % 5 === 0) length = 17;
    if (n % 10 === 0) {
      length = 30;
    }
    stageContext.beginPath();
    stageContext.moveTo(x + i, y - length);
    stageContext.lineTo(x + i, y + length);
    stageContext.stroke();
  }
}

stageAnimation();

function eyeAnimation() {
  const x = eyeCanvas.width / 10;
  const y = eyeCanvas.height / 2;
  // eyeContext.lineWidth = 2;

  // draw millimeter scale
  let mmScaleLength = 10;
  let numLines = 100;

  let countLines = 0;

  for (let n = 0, i = 0; n <= numLines; i += 4, n++) {
    let length = 6;
    if (n % 5 === 0) length = 11;
    if (n % 10 === 0) {
      length = 15;
    }
    eyeContext.beginPath();
    eyeContext.moveTo(x + i, y - length);
    eyeContext.lineTo(x + i, y + length);
    eyeContext.stroke();
  }
}

eyeAnimation();

function controls() {
  // window.addEventListener("keyup", handleKeyUp);
  window.addEventListener("keydown", handleKeyDown);
  // window.addEventListener("keydown", handleKeyDown);

  function handleKeyDown(e) {
    switch (e.key) {
      case "ArrowDown":
        handleArrowDown();
        break;
      case "ArrowUp":
        handleArrowUp();
        break;
      case "ArrowRight":
        handleArrowRight();
        break;
      case "ArrowLeft":
        handleArrowLeft();
        break;
    }
  }

  const eyePiece = eyeCanvas.parentElement;
  let eyePiecePositionY = 0;
  let eyePiecePositionX = 0;
  function handleArrowDown() {
    eyePiecePositionY += 5;
    // eyePiece.style.top = eyePiecePositionY + "px";
    eyePiece.style.transform = `translate(${eyePiecePositionX}px,${eyePiecePositionY}px)`;
  }

  function handleArrowUp() {
    eyePiecePositionY -= 5;
    // eyePiece.style.top = eyePiecePositionY + "px";
    eyePiece.style.transform = `translate(${eyePiecePositionX}px,${eyePiecePositionY}px)`;
  }

  function handleArrowRight() {
    eyePiecePositionX += 5;
    // eyePiece.style.left = eyePiecePositionX + "px";
    eyePiece.style.transform = `translate(${eyePiecePositionX}px,${eyePiecePositionY}px)`;
  }

  function handleArrowLeft() {
    eyePiecePositionX -= 5;
    eyePiece.style.transform = `translate(${eyePiecePositionX}px,${eyePiecePositionY}px)`;
  }
}

controls();
