const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const citydisplay = document.querySelector(".citydisplay");
const datedisplay = document.querySelector(".datedisplay");
const weatherIcon = document.querySelector(".weatherIcon");
const tempDisplay = document.querySelector(".tempDisplay");
const descDisplay = document.querySelector(".descDisplay");

const humidityDisplay = document.querySelector(".humidityDisplay");
const windDisplay = document.querySelector(".windDisplay");

const forecastContainer = document.querySelector(".forecastContainer");
const recentSearches = document.querySelector(".recentSearches");
const apiKey = "b453d9e65deb5dd9e74baf62c9356090";

weatherform.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityinput.value.trim();

    if (!city) {
        alert("Please enter a city");
        return;
    }

    try {
        const currentData = await fetchCurrentWeather(city);
        displayCurrentWeather(currentData);

        const forecastData = await fetchForecast(city);
        displayForecast(forecastData);

        saveRecentSearch(city);

    } catch (error) {
        alert(error.message);
    }
});

async function fetchCurrentWeather(city) {

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("City not found");
    }

    return await response.json();
}

async function fetchForecast(city) {

    const url =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Forecast unavailable");
    }

    return await response.json();
}

function displayCurrentWeather(data) {

    card.style.display = "block";

    citydisplay.textContent = data.name;

    tempDisplay.textContent =
        `${Math.round(data.main.temp)}°C`;

    descDisplay.textContent =
        data.weather[0].description;

    humidityDisplay.textContent =
        `${data.main.humidity}%`;

    windDisplay.textContent =
        `${data.wind.speed} m/s`;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    datedisplay.textContent =
        new Date().toDateString();
}

function displayForecast(data) {

    forecastContainer.innerHTML = "";

    const daily = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    daily.forEach(day => {

        const card = document.createElement("div");
        card.classList.add("forecastCard");

        card.innerHTML = `
            <h3>${new Date(day.dt_txt).toLocaleDateString("en-US",{weekday:"short"})}</h3>

            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

            <p>${Math.round(day.main.temp)}°C</p>

            <p>${day.weather[0].description}</p>
        `;

        forecastContainer.appendChild(card);

    });

}

function saveRecentSearch(city){

    let searches =
    JSON.parse(localStorage.getItem("cities")) || [];

    if(!searches.includes(city)){
        searches.unshift(city);
    }

    searches = searches.slice(0,5);

    localStorage.setItem("cities",
    JSON.stringify(searches));

    renderRecentSearches();
}

function renderRecentSearches(){

    recentSearches.innerHTML="";

    const searches =
    JSON.parse(localStorage.getItem("cities")) || [];

    searches.forEach(city=>{

        const btn =
        document.createElement("button");

        btn.textContent=city;

        btn.addEventListener("click",()=>{
            cityinput.value=city;
            weatherform.requestSubmit();
        });

        recentSearches.appendChild(btn);

    });

}

renderRecentSearches();