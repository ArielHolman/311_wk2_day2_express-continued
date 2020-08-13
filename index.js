const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const contactRouter = require('./routers/contact.routers')
const commentsRouter = require('./routers/comments.routers')
const vehiclesRouter = require('./routers/vehicles.routers')
const productsRouter = require('./routers/products.routers')
const port = process.env.PORT || 4001;

// gives express access to html and css files
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactRouter)
app.use(commentsRouter)
app.use(vehiclesRouter)
app.use(productsRouter)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
