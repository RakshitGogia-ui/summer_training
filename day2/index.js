const app = document.getElementById("app");
const profile = document.createElement("div");
profile.classList.add("profile");
const name = document.createElement("h2");
name.textContent = "Rakshit";
const branch = document.createElement("p");
branch.textContent = "Electrical";
const clg = document.createElement("p");
clg.textContent= "DTU";
profile.append(name,branch,clg);
app.append(profile);
const button = document.createElement("button");
button.classList.add("btn");
button.textContent="Dark/Light Mode";
app.append(button);
button.addEventListener("click",event => {
   profile.classList.toggle("dark");
})
button.addEventListener()