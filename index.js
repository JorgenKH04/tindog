import Dog from "./Dog.js";
import dogs from "./data.js";

const profileSection = document.querySelector("#profile-section");
const dislikeButton = document.querySelector("#dislike-btn");
const likeButton = document.querySelector("#like-btn");
let dogIndex = 0;
let newDog = "";
let isDisabled = false;

const getDog = () => {
  if (dogs.length > 0 && dogIndex < dogs.length) {
    newDog = new Dog(dogs[dogIndex]);
  } else {
    profileSection.innerHTML = `
    <img src="./images/bernard.jpg" alt="Picture of sad guy from Bernard" />`;
    isDisabled = !isDisabled;
  }
};

const renderDog = () => {
  getDog();
  dogIndex++;
  profileSection.innerHTML = newDog.getDogHtml();
};

renderDog();

document.addEventListener("click", (e) => {
  if (e.target.id === "like-btn" && !isDisabled) {
    newDog.hasBeenSwiped = true;
    newDog.hasBeenLiked = true;
    isDisabled = !isDisabled;
    document.querySelector("#like-tag").style.display = "block";
    setTimeout(() => {
      document.querySelector("#like-tag").style.display = "none";
      renderDog();
      isDisabled = !isDisabled;
    }, 1000);
  } else if (e.target.id === "dislike-btn" && !isDisabled) {
    newDog.hasBeenSwiped = true;
    isDisabled = !isDisabled;
    document.querySelector("#dislike-tag").style.display = "block";
    setTimeout(() => {
      document.querySelector("#dislike-tag").style.display = "none";
      renderDog();
      isDisabled = !isDisabled;
    }, 1000);
  }
});
