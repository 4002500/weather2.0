const request = require('request')

const weather = (query, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=57186b17e6f08ec98f3f69b32c24a2fb&query=${encodeURIComponent(query)}`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.')

        } else if (body.success == false) {
            callback('Location not found, try another search.')
        } else {
            callback(undefined, {
                query: body.request.query,
                temp: body.current.temperature,
                icon: body.current.weather_icons[0],
                description: body.current.weather_descriptions[0]

            })
        }
    
    })

}

module.exports = weather