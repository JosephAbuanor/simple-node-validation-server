const express = require('express')
const app = express()
const port = 3000

app.get('/validate/creditcard/:card', (req, res) => {
    let card = req.params.card;
    if (card == 4532529513392560) {
        return res.send("valid card");
    }

    return res.send("invalid card");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})