const microscope = document.querySelector("#microscope");
const stageMicrometerContainer = document.querySelector("#stage-micrometer");
const stirer = document.querySelector("#stirer");
const view = document.querySelector(".view");

startAndResetAnimation();

function startAndResetAnimation() {
  stirer.addEventListener("click", stir);
  stageMicrometerContainer.addEventListener(
    "click",
    moveStageMicrometerContainer,
    {
      once: true,
    }
  );
}

function moveStageMicrometerContainer() {
  const microscopeCords = microscope.getBoundingClientRect();
  const stageMicrometerContainerCords =
    stageMicrometerContainer.getBoundingClientRect();

  stageMicrometerContainer.animate(
    [
      {},
      {
        transform: `translate( ${
          microscopeCords.left - stageMicrometerContainerCords.left
        }px, 0)`,
      },
      {
        transform: `translate( ${
          microscopeCords.left + 90 - stageMicrometerContainerCords.left
        }px, 20px) rotateX(70deg) rotateZ(50deg)`, // without outer div y -> 20px now its -20px
        width: `${150 * 0.7}px`,
      },
    ],
    {
      id: "placeOnMicrosocpe",
      duration: 1000,
      fill: "forwards",
    }
  ).onfinish = () => {
    microscope.addEventListener("click", startMicroscope);
    stageMicrometerContainer.addEventListener(
      "click",
      () => {
        stageMicrometerContainer.animate(
          [
            {},
            {
              transform: "translate(0,100px) rotateX(30deg)",
              width: "150px",
            },
          ],
          {
            duration: 1000,
            fill: "forwards",
          }
        ).onfinish = () => {
          stageMicrometerContainer.addEventListener("click", () => {
            console.log(microscope.getAnimations());

            stageMicrometerContainer.animate(
              [
                {},
                {
                  transform: `translate( ${
                    microscopeCords.left +
                    90 -
                    stageMicrometerContainerCords.left
                  }px, 20px) rotateX(70deg) rotateZ(50deg)`,
                },
              ],
              { duration: 1000, fill: "forwards" }
            );
          });
        };
      },
      { once: true }
    );
  };
}

function startMicroscope() {
  view.style.visibility = "visible";
}

function stir() {
  stirer.animate(
    [
      {},
      {
        transform: `rotate(-5deg)`,
      },
      {},
    ],
    {
      duration: 1000,
      iterations: 2,
    }
  );
}
