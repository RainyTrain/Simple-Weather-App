const form = document.querySelector('form')
const city = document.querySelector('.city')
const celsius = document.querySelector('.celsius')
const humidity = document.querySelector('.humidity')
const speed = document.querySelector('.speed')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const res = form.elements
    fetch(`http://api.weatherapi.com/v1/current.json?key=a9b48619ee644d388b171141220404&q=${res[0].value}`)
        .then((data) => {
            return data.json()
        })
        .then((response) => {
            city.innerHTML = `${response.location.name}, ${response.location.country}`
            celsius.innerHTML = response.current.temp_c+'°C';
            const img = document.createElement('img')
            img.src = response.current.condition.icon;
            celsius.appendChild(img)
            humidity.innerHTML = `Humidity: ${response.current.humidity}%`;
            speed.innerHTML = `Wind speed: ${response.current.wind_kph}km/h`
        })
        .catch((e) => {
            console.log(e)
        })
})

