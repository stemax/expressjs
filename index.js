import express from 'express'
import path from 'path'

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3001
const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })

app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})
