const form = document.querySelector("form")
const search = document.querySelector("input")
const weatherText = document.querySelector("#weatherText")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    weatherText.textContent = "Loading..."
    
    const query = search.value

    fetch(`/weather?query=${query}`).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                weatherText.textContent = data.error

            } else {
                weatherText.innerHTML = `It is ${data.data.description} in ${data.data.query}, the temperature is ${data.data.temp}°C`
                weatherText.innerHTML += `<p><img src="${data.data.icon}"></p>`

            }


        })
    })
    

})