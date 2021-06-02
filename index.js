const express = require('express')
const mongoose = require('mongoose')

const houses = require('./routes/houses')

const app = express()



app.use(express.json())

// Enables CORS
const cors = require('cors')
app.use(cors({ origin: true }))

app.get('/', (req, res) => {
  res.send('Welcome to the House Listing API')
})

app.use('/api/houses', houses)

require('dotenv').config()

const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://okumu:T5tiSj5i6QGSBwwp@cluster0.v5lde.mongodb.net/house_app?retryWrites=true&w=majority')
  .then(result => {
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  })
  .catch(err => console.log(err))
