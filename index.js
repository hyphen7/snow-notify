const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hi! There.<h1>");
});

app.listen(PORT, () => {
    console.log("Express is runnning");
});