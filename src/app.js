const weather = require('./utils/weather')
const path = require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000


app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
app.use(express.static(path.join(__dirname, '../public')))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App 2.0',
        name: 'j624'

    })
})

app.get('/weather', (req, res) => {
    if (!req.query.query) {
        return res.send({
            error: 'You must provide a search query.'
        })
    }

    weather(req.query.query, (error, data) => {
        if(error) {
            return res.send({
                error
            })
        }

        res.send({
            data
        })
    }) 



})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'j624',
        text: 'This site was created by Jihad Ali on Mar 18, 2021. It uses data from darksky.net and mapbox.com.'   
    })
})

app.get('/about/*', (req, res) => {
    res.render('about', {
        title: 'About page not found',
        name: 'j624',
        text: 'The about page you requested has not been found.'   
    })
})

app.get('/*', (req, res) => {
    res.render('about', {
        title: 'Page not found',
        name: 'j624',
        text: 'The page you requested has not been found.'   
    })
})
app.listen(port, () => {
    console.log(`SERVER LISTENING ON PORT ${port}...`)
})








