const searchCity = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=89c8c9b906be567d873945df30103776`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayName(data));
};

const displayName = inputs => {
    const displayInput = document.getElementById('weather-details');
    console.log(inputs)
    displayInput.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${inputs.weather[0].icon}@2x.png" alt="">
        <h1>${inputs.name}</h1>
        <h3><span>${(inputs.main.temp-273.15).toFixed(1)}</span>&deg;C</h3>
        <h1 class="lead">${inputs.weather[0].main}</h1>
    `
}