const express = require('express');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./dbconnection');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectToDatabase();


app.use('/api', routes);


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

