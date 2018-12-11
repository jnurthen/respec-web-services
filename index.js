const port = parseInt(process.env.PORT, 10) || 3000;
const app = require("express")();
const bodyParser = require("body-parser");

app.post("/xref", bodyParser.json(), require("./routes/xref/").route);

app.listen(port, () => console.log(`Listening on port ${port}!`));
