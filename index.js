const express = require('express')
const cors = require("cors");
const app = express()
const PORT = 3000
var corsOptions = {
    origin: "http://localhost:3000"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('Hi Mo Mtz HHH')
})


require("./routes/tutorial.routes.js")(app);
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})