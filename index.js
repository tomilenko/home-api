const express = require('express');
require('express-namespace')
const bodyParser = require('body-parser');
const port = 3000;
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.namespace('/api/', () => {
    app.get('/', (req, res) => {
        res.json({"message": "Welcome to Api."});
    });
    // require('./app/routes/note.routes.js')(app);
    app.namespace('utorrent/', () => {
        require('./app/routes/utorrent.routes.js')(app);
    });

    app.namespace('lgtv/', () => {
        require('./app/routes/lgtv.routes.js')(app);
    })

})

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Home page"});
});




app.listen(port, () => {
    console.log("Server is listening on port 3000");
});
// https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
// Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...');
//     process.exit();
// });