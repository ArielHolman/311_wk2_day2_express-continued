const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const contactRouter = require('./routers/contact.routers')
const port = process.env.PORT || 4001;

// gives express access to html and css files
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactRouter)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
