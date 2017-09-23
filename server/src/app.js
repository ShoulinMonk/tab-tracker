/**
 * Created by papa on 23.sep.2017.
 */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) = > {
    res.send({
    message: "Cheese is nice"
})

})
app.listen(process.env.PORT || 8081)
