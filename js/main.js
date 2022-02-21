
const getData = async () => {
    let city = document.querySelector('#city').value
    let token = '3daf778d9433b6d3256eb3dd3cc47997'
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${token}`) // This is for getting a different endpoint
    console.log(response.data)
    return response.data

}

const DOM_Elements = {
    weather: '.outputs' // referencing the HTML class

}

const createWeather = (city,tempHigh, tempLow, precip, wind) => {
    const morehtml = `<div class="new_output"> 
    <h4 class="city">City: ${city}</h4>
    <br>
    <h4 class="time">High: ${tempHigh} F</h4>
    <br>
    <h4 class="temperature">Low: ${tempLow} F</h4>
    <br>
    <h4 class="precipitation">Forecast: ${precip}</h4>
    <br>
    <h4 class="sunset">Wind: ${wind} mph</h4>
    <br>
</div>`
    document.querySelector(DOM_Elements.weather).insertAdjacentHTML("beforeend",morehtml)
}

const loadData = async () => {
    clearData()
    const element = await getData();
    createWeather(element.name, element.main.temp_max, element.main.temp_min, element.weather[0].description, element.wind.speed);
}

const clearData = () => {
    document.querySelector(DOM_Elements.weather).innerHTML = '';
}

