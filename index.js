import express from 'express'
import path from 'path'
import {requestTime, logger} from './middlewares.js'
import serverRoutes from "./routes/servers.js";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3001
const app = express()

app.set('view engine', 'ejs')
// console.log(app.get('view engine'))
// console.log(app.get('views'))

//Middlewares
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)

app.get('/', (req, res) => {
    res.render('index', {title: 'Main page', active: 'main'})
})

app.get('/features', (req, res) => {
    res.render('features', {title:'Features', active:'features'})
})

app.get('/about', (req, res) => {
    res.render('about', {title:'About', active:'about'})
})

// app.get('/download', (req, res) => {
//     // console.log(req.requestTime)
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// })

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})
