import generateJoke from "./generateJoke";

import "./styles/main.scss";
import mosque from "./assets/Mosque.png";

const laughImg = document.getElementById("laughImg");
laughImg.src = mosque;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();

console.log(generateJoke());
