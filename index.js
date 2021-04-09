const express = require('express');
const app = express();

const PORT = 3030;

app.get('/', (req, res, next) => {
    res.send('hola mundo');
})

app.listen(PORT, () => {
    console.log(`app escuchando el puerto ${PORT}`);
});